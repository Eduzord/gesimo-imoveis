import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { randomUUID } from 'crypto';
import { PrismaService } from '../../../database/prisma.service';
import { CriarDespesaDto } from '../dto/criar-despesa.dto';
import { CriarDespesaParceladaDto } from '../dto/criar-despesa-parcelada.dto';
import 'multer';

// Campos devolvidos ao front em toda listagem/consulta de despesa — centralizado aqui para as
// colunas de parcelamento (adicionadas numa única leva) não ficarem esquecidas numa das consultas.
const CAMPOS_DESPESA = {
    id: true,
    idContratoLocacao: true,
    descricao: true,
    valor: true,
    tipo: true,
    status: true,
    dataVencimento: true,
    dataPagamento: true,
    grupoParcelamento: true,
    numeroParcela: true,
    totalParcelas: true,
} as const;

@Injectable()
export class DespesasService {
    constructor(private readonly prisma: PrismaService) { }

    //Auxiliador para resolver o problema do BigInt
    private formatarDespesa(despesa: any) {
        return {
            ...despesa,
            id: despesa.id.toString(),
            idContratoLocacao: despesa.idContratoLocacao.toString(),
            valor: Number(despesa.valor) //isso vai garantir que o decimal do MySQL volte como number
        };
    }

    async criarAvulsa(dados: CriarDespesaDto) {
        //Validando se o contrato realmente existe
        const contrato = await this.prisma.contratolocacao.findUnique({
            where: { id: BigInt(dados.idContratoLocacao) }
        });

        if (!contrato) {
            throw new NotFoundException(`Impossível lançar despesa. Contrato de locação com ID ${dados.idContratoLocacao} não encontrado.`)
        }

        //Gravando a despesa avulsa no banco
        //O status padrão será "EM_ABERTO"
        const novaDespesa = await this.prisma.despesa.create({
            data: {
                idContratoLocacao: BigInt(dados.idContratoLocacao),
                descricao: dados.descricao,
                valor: dados.valor,
                tipo: dados.tipo,
                dataVencimento: dados.dataVencimento
            }
        });

        return this.formatarDespesa(novaDespesa);
    }

    //Lança um conjunto de parcelas já definidas (ex.: IPTU em 10x). O front sugere a divisão (valor
    //total ÷ quantidade, com a sobra de centavos na última) mas o usuário pode ajustar qualquer
    //parcela antes de confirmar — por isso aqui só persistimos o que já chegou decidido, nunca
    //recalculamos. Cada parcela nasce como uma despesa EM_ABERTO independente, pronta para ser paga e
    //incluída na Memória de Cálculo do mês em que vencer — sem nenhuma diferença de tratamento frente
    //a uma despesa avulsa comum.
    async criarParcelada(dados: CriarDespesaParceladaDto) {
        const contrato = await this.prisma.contratolocacao.findUnique({
            where: { id: BigInt(dados.idContratoLocacao) },
        });

        if (!contrato) {
            throw new NotFoundException(`Impossível lançar despesa. Contrato de locação com ID ${dados.idContratoLocacao} não encontrado.`);
        }

        const totalParcelas = dados.parcelas.length;

        //Todas as parcelas pertencem ao mesmo lançamento — esse ID é o que permite, no futuro,
        //localizar "todas as parcelas deste IPTU" sem depender de interpretar a descrição.
        const grupoParcelamento = randomUUID();

        //Gravação atômica: ou o parcelamento inteiro é lançado, ou nenhuma parcela é criada. Um
        //lançamento "pela metade" (ex.: 10 parcelas pedidas, só 6 gravadas por uma falha no meio do
        //caminho) seria um erro contábil silencioso — pior do que simplesmente falhar por completo.
        const despesasCriadas = await this.prisma.$transaction(
            dados.parcelas.map((parcela, indice) =>
                this.prisma.despesa.create({
                    data: {
                        idContratoLocacao: BigInt(dados.idContratoLocacao),
                        descricao: `${dados.descricao} (${indice + 1}/${totalParcelas})`,
                        valor: parcela.valor,
                        tipo: dados.tipo,
                        dataVencimento: parcela.dataVencimento,
                        grupoParcelamento,
                        numeroParcela: indice + 1,
                        totalParcelas,
                    },
                }),
            ),
        );

        return despesasCriadas.map((despesa) => this.formatarDespesa(despesa));
    }

    async liquidarDespesa(id: number, dataPagamento: Date, arquivo: Express.Multer.File) {
        //Primeiro a "trava de segurança" do arquivo
        if (!arquivo) {
            throw new BadRequestException('O envio do comprovante é obrigatório para a baixa financeira');
        }

        //Depois buscamos a despesa
        const despesa = await this.prisma.despesa.findUnique({
            where: { id: BigInt(id) }
        });

        if (!despesa) {
            throw new NotFoundException(`Despesa com ID ${id} não encontrada.`);
        }

        //Aqui iremos "evitar" o que já foi pago
        if (despesa.status === 'PAGA') {
            throw new BadRequestException(`Esta despesa já foi liquidada anteriormente.`);
        }

        //Agora iremos executar um update triplo (status, data e arquivo)
        const despesaAtualizada = await this.prisma.despesa.update({
            where: { id: BigInt(id) },
            data: {
                status: 'PAGA', //atualiza o status
                dataPagamento: dataPagamento, //registra o dia do pagamento
                comprovantePagamento: arquivo.buffer as any//salva o arquivo PDF/IMG
            }
        });

        return this.formatarDespesa(despesaAtualizada);
    }

    async buscarPorId(id: number) {
        const despesa = await this.prisma.despesa.findUnique({
            where: { id: BigInt(id) },
            select: CAMPOS_DESPESA,
        });

        if (!despesa) {
            throw new NotFoundException(`Despesa com ID ${id} não encontrada.`);
        }

        return this.formatarDespesa(despesa);
    }

    async listarDespesas(idContratoLocacao?: number) {
        //Se o corretor passou um ID, filtramos. Se não, trazemos tudo
        const condicao = idContratoLocacao ? { idContratoLocacao: BigInt(idContratoLocacao) } : {};

        const despesas = await this.prisma.despesa.findMany({
            where: condicao,
            //comprovantePagamento (Bytes) é omitido propositalmente — ver CAMPOS_DESPESA
            select: CAMPOS_DESPESA,
            orderBy: {
                dataVencimento: 'asc' //Ordena das mais antigas para as mais novas
            }
        });

        //Formata o array para converter os BigInts antes de devolver ao Front-end
        return despesas.map(despesa => this.formatarDespesa(despesa));
    }


    //Despesas de todos os contratos (histórico incluso) de um imóvel — usado para "quais despesas em
    //aberto existem para este imóvel" na tela do imóvel e na geração da Memória de Cálculo.
    //"emAberto": status EM_ABERTO, OU status PAGA sem comprovante anexado (não deveria acontecer pelo
    //fluxo normal, que exige o arquivo para liquidar, mas fica como rede de segurança contra dados
    //importados/editados por fora).
    async listarPorImovel(idImovel: number, emAberto?: boolean) {
        const contratosDoImovel = await this.prisma.contratolocacao.findMany({
            where: { idImovel },
            select: { id: true },
        });

        if (contratosDoImovel.length === 0) return [];

        const despesas = await this.prisma.despesa.findMany({
            where: {
                idContratoLocacao: { in: contratosDoImovel.map((c) => c.id) },
                ...(emAberto && {
                    OR: [{ status: 'EM_ABERTO' }, { status: 'PAGA', comprovantePagamento: null }],
                }),
            },
            select: CAMPOS_DESPESA,
            orderBy: { dataVencimento: 'asc' },
        });

        return despesas.map((despesa) => this.formatarDespesa(despesa));
    }

    async baixarComprovante(id: number) {
        //Buscamos a despesa trazendo APENAS a coluna do arquivo para poupar memória
        const despesa = await this.prisma.despesa.findUnique({
            where: { id: BigInt(id) },
            select: { comprovantePagamento: true, status: true }
        });

        if (!despesa) {
            throw new NotFoundException(`Despesa com ID ${id} não encontrada.`);
        }

        if (!despesa.comprovantePagamento) {
            throw new NotFoundException(`Esta despesa não possui um comprovante anexado ou ainda não foi paga.`);
        }

        //Retorna o arquivo convertendo para o formato Buffer do Node
        return Buffer.from(despesa.comprovantePagamento as any);
    }

    async deletarDespesa(id: number) {
        const despesa = await this.prisma.despesa.findUnique({
            where: { id: BigInt(id) }
        });

        if (!despesa) {
            throw new NotFoundException(`Despesa com ID ${id} não encontrada.`);
        }

        if (despesa.status === 'PAGA') {
            throw new BadRequestException('Operação bloqueada: Não é possível excluir uma despesa que já foi PAGA, pois o caixa já foi movimentado.');
        }

        await this.prisma.despesa.delete({
            where: { id: BigInt(id) }
        });

        return { message: `Despesa ${id} cancelada e excluída com sucesso do sistema.` };
    }

    async removerDefinitivo(id: number) {
        const despesa = await this.prisma.despesa.findUnique({
            where: { id: BigInt(id) }
        });

        if (!despesa) {
            throw new NotFoundException(`Despesa com ID ${id} não encontrada.`);
        }

        await this.prisma.despesa.delete({
            where: { id: BigInt(id) }
        });

        return { message: 'Despesa removida definitivamente com sucesso.' };
    }
}
