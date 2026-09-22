import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { ImoveisService } from '../../imoveis/services/imoveis.service';
import { ContratosService } from '../../contratos/services/contratos.service';
import { DespesasService } from '../../despesas/services/despesas.service';
import { IrrfService } from '../../irrf/services/irrf.service';
import { CriarMemoriaCalculoDto } from '../dto/criar-memoria-calculo.dto';
import { montarRateio, DespesaExtraParaRateio, AjusteManualParaRateio } from '../calculo/montar-rateio';
import { gerarPlanilhaMemoriaCalculo } from '../excel/gerar-planilha';

//Primeiro dia do mês da competência informada, em UTC (a coluna no banco é DATE, sem horário)
function primeiroDiaDoMes(data: Date): Date {
    return new Date(Date.UTC(data.getUTCFullYear(), data.getUTCMonth(), 1));
}

const NOMES_MESES = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

@Injectable()
export class MemoriaCalculoService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly imoveisService: ImoveisService,
        private readonly contratosService: ContratosService,
        private readonly despesasService: DespesasService,
        private readonly irrfService: IrrfService,
    ) {}

    //Devolve o mesmo formato de gerar()/buscarPorId(), a partir de um registro já carregado com itens
    private formatar(memoria: any) {
        return {
            id: memoria.id,
            idContrato: memoria.idContrato.toString(),
            idImovel: memoria.idImovel,
            competencia: memoria.competencia.toISOString().slice(0, 10),
            valorAluguelBase: Number(memoria.valorAluguelBase),
            contaBancaria: memoria.contaDescricao || memoria.contaBanco
                ? {
                      descricao: memoria.contaDescricao,
                      banco: memoria.contaBanco,
                      agencia: memoria.contaAgencia,
                      numero: memoria.contaNumero,
                      tipoChavePix: memoria.contaTipoChavePix,
                      chavePix: memoria.contaChavePix,
                      titular: memoria.contaTitular,
                      documentoTitular: memoria.contaDocumentoTitular,
                  }
                : null,
            reajuste: memoria.reajusteIndice
                ? {
                      indice: memoria.reajusteIndice,
                      percentual: Number(memoria.reajustePercentual),
                      valorAnterior: Number(memoria.reajusteValorAnterior),
                  }
                : null,
            totalAPagar: Number(memoria.totalAPagar),
            geradoPorUsuarioId: memoria.geradoPorUsuarioId,
            criadoEm: memoria.criadoEm,
            itens: (memoria.itens ?? []).map((item: any) => ({
                idLocador: item.idLocador.toString(),
                nomeLocador: item.nomeLocador,
                documentoLocador: item.documentoLocador,
                percentualParticipacao: Number(item.percentualParticipacao),
                valorAluguel: Number(item.valorAluguel),
                valorReembolsos: Number(item.valorReembolsos),
                valorDescontos: Number(item.valorDescontos),
                baseCalculoIrrf: Number(item.baseCalculoIrrf),
                valorIrrf: Number(item.valorIrrf),
                valorAPagar: Number(item.valorAPagar),
                detalhesExtras: item.detalhesExtras ?? [],
            })),
        };
    }

    async buscarPorId(id: number) {
        const memoria = await this.prisma.memoriacalculo.findUnique({
            where: { id },
            include: { itens: true },
        });

        if (!memoria) {
            throw new NotFoundException(`Memória de cálculo com ID ${id} não encontrada.`);
        }

        return this.formatar(memoria);
    }

    async listarPorImovel(idImovel: number) {
        const memorias = await this.prisma.memoriacalculo.findMany({
            where: { idImovel },
            orderBy: { competencia: 'desc' },
            include: { itens: true },
        });

        return memorias.map((m) => this.formatar(m));
    }

    //Tudo que o modal de "Gerar Memória de Cálculo" precisa para se popular numa única chamada: o
    //contrato ativo, os proprietários (com percentual, sem nome — o front resolve o nome), as despesas
    //em aberto deste imóvel e se já existe uma memória gerada para o mês pedido.
    async montarPreparacao(idImovel: number, competencia: Date) {
        const imovel = await this.imoveisService.buscarPorId(idImovel);
        const contratos = await this.contratosService.listarTodos({ idImovel });
        const contratoAtivo = contratos.find((c: any) => c.status === 'ATIVO') ?? null;
        const despesasEmAberto = await this.despesasService.listarPorImovel(idImovel, true);
        const competenciaNormalizada = primeiroDiaDoMes(competencia);

        let memoriaExistente: any = null;
        if (contratoAtivo) {
            const existente = await this.prisma.memoriacalculo.findUnique({
                where: {
                    idContrato_competencia: { idContrato: BigInt(contratoAtivo.id), competencia: competenciaNormalizada },
                },
                include: { itens: true },
            });
            if (existente) memoriaExistente = this.formatar(existente);
        }

        return {
            imovel: { id: imovel.id, endereco: imovel.endereco, status: imovel.status },
            proprietarios: (imovel.propriedadeimovel ?? []).map((p: any) => ({
                idLocador: p.idLocador,
                percentualParticipacao: Number(p.percentualParticipacao),
            })),
            contratoAtivo: contratoAtivo
                ? {
                      id: contratoAtivo.id,
                      valorAluguel: Number(contratoAtivo.valorAluguel),
                      dataReajuste: contratoAtivo.dataReajuste,
                      idLocatario: contratoAtivo.idLocatario,
                  }
                : null,
            despesasEmAberto,
            memoriaExistente,
        };
    }

    async gerar(dados: CriarMemoriaCalculoDto, usuarioId: number) {
        const imovel = await this.imoveisService.buscarPorId(dados.idImovel);
        const contratos = await this.contratosService.listarTodos({ idImovel: dados.idImovel });
        const contratoAtivo = contratos.find((c: any) => c.status === 'ATIVO');

        if (!contratoAtivo) {
            throw new BadRequestException('Este imóvel não tem um contrato de locação ATIVO. Não é possível gerar a memória de cálculo.');
        }

        const idContrato = Number(contratoAtivo.id);
        const competencia = primeiroDiaDoMes(dados.competencia);

        const existente = await this.prisma.memoriacalculo.findUnique({
            where: { idContrato_competencia: { idContrato: BigInt(idContrato), competencia } },
            include: { itens: true },
        });

        if (existente && !dados.regerar) {
            return this.formatar(existente);
        }

        //Confere que todo proprietário atual do imóvel foi informado (o percentual, fonte de verdade,
        //é sempre o de propriedadeimovel; o front só precisa mandar nome/documento/dependentes)
        const proprietarios: any[] = imovel.propriedadeimovel ?? [];
        if (proprietarios.length === 0) {
            throw new BadRequestException('Este imóvel não tem nenhum proprietário cadastrado. Vincule ao menos um locador antes de gerar a memória.');
        }

        const infoPorLocador = new Map(dados.proprietarios.map((p) => [String(p.idLocador), p]));
        for (const proprietario of proprietarios) {
            if (!infoPorLocador.has(proprietario.idLocador)) {
                throw new BadRequestException(`Faltam os dados (nome) do proprietário ${proprietario.idLocador} para gerar a memória.`);
            }
        }

        //Resolve as despesas extras: busca as existentes (e confere que pertencem a este imóvel) ou lança as novas
        const idsContratosDoImovel = new Set(contratos.map((c: any) => c.id));
        const despesasParaRateio: DespesaExtraParaRateio[] = [];

        for (const extra of dados.despesasExtras ?? []) {
            let despesa: any;

            if (extra.origem === 'EXISTENTE') {
                despesa = await this.despesasService.buscarPorId(extra.idDespesa!);
                if (!idsContratosDoImovel.has(despesa.idContratoLocacao)) {
                    throw new BadRequestException(`A despesa ${extra.idDespesa} não pertence a este imóvel.`);
                }
            } else {
                despesa = await this.despesasService.criarAvulsa({
                    idContratoLocacao: idContrato,
                    tipo: extra.tipo!,
                    descricao: extra.descricao!,
                    valor: extra.valor!,
                    dataVencimento: extra.dataVencimento!,
                });
            }

            despesasParaRateio.push({
                idDespesa: despesa.id,
                tipo: despesa.tipo,
                descricao: despesa.descricao,
                valor: despesa.valor,
                aplicacao: extra.aplicacao,
                idLocadorEspecifico: extra.idLocadorEspecifico ? String(extra.idLocadorEspecifico) : undefined,
            });
        }

        const ajustesParaRateio: AjusteManualParaRateio[] = (dados.ajustesManuais ?? []).map((a) => ({
            idLocador: String(a.idLocador),
            tipo: a.tipo,
            descricao: a.descricao,
            valor: a.valor,
        }));

        const valorAluguelBase = Number(contratoAtivo.valorAluguel);
        let itensRateio;
        try {
            itensRateio = montarRateio(
                proprietarios.map((p) => ({ idLocador: p.idLocador, percentualParticipacao: Number(p.percentualParticipacao) })),
                valorAluguelBase,
                despesasParaRateio,
                ajustesParaRateio,
            );
        } catch (erro: any) {
            throw new BadRequestException(erro.message);
        }

        //IRRF por proprietário (a competência decide qual versão da tabela vale — nunca a data de hoje)
        const itensComIrrf = await Promise.all(
            itensRateio.map(async (item) => {
                const info = infoPorLocador.get(item.idLocador)!;
                const resultadoIrrf = await this.irrfService.calcular({
                    baseCalculo: item.baseCalculoIrrf,
                    dataCompetencia: competencia,
                    numeroDependentes: info.numeroDependentes ?? 0,
                });

                const valorAPagar = Math.round((item.valorAluguel + item.valorReembolsos - item.valorDescontos - resultadoIrrf.valorIrrf) * 100) / 100;

                return {
                    idLocador: BigInt(item.idLocador),
                    nomeLocador: info.nome,
                    documentoLocador: info.documento ?? null,
                    percentualParticipacao: item.percentualParticipacao,
                    valorAluguel: item.valorAluguel,
                    valorReembolsos: item.valorReembolsos,
                    valorDescontos: item.valorDescontos,
                    baseCalculoIrrf: item.baseCalculoIrrf,
                    valorIrrf: resultadoIrrf.valorIrrf,
                    valorAPagar,
                    detalhesExtras: item.detalhesExtras,
                };
            }),
        );

        const totalAPagar = Math.round(itensComIrrf.reduce((soma, item) => soma + item.valorAPagar, 0) * 100) / 100;

        const dadosMemoria = {
            idContrato: BigInt(idContrato),
            idImovel: dados.idImovel,
            competencia,
            valorAluguelBase,
            contaDescricao: dados.contaBancaria?.descricao,
            contaBanco: dados.contaBancaria?.banco,
            contaAgencia: dados.contaBancaria?.agencia,
            contaNumero: dados.contaBancaria?.numero,
            contaTipoChavePix: dados.contaBancaria?.tipoChavePix,
            contaChavePix: dados.contaBancaria?.chavePix,
            contaTitular: dados.contaBancaria?.titular,
            contaDocumentoTitular: dados.contaBancaria?.documentoTitular,
            reajusteIndice: dados.reajuste?.indice,
            reajustePercentual: dados.reajuste?.percentual,
            reajusteValorAnterior: dados.reajuste?.valorAnterior,
            totalAPagar,
            geradoPorUsuarioId: usuarioId,
        };

        const memoriaCriada = await this.prisma.$transaction(async (tx) => {
            if (existente) {
                //regerar = true: substitui a versão anterior (o cascade remove os itens antigos)
                await tx.memoriacalculo.delete({ where: { id: existente.id } });
            }

            return tx.memoriacalculo.create({
                data: { ...dadosMemoria, itens: { create: itensComIrrf } },
                include: { itens: true },
            });
        });

        return this.formatar(memoriaCriada);
    }

    async gerarExcel(id: number): Promise<{ buffer: Buffer; nomeArquivo: string }> {
        const memoria = await this.buscarPorId(id);
        const imovel = await this.imoveisService.buscarPorId(memoria.idImovel);
        const endereco = imovel.endereco
            ? `${imovel.endereco.rua}, ${imovel.endereco.numero ?? 'S/N'} — ${imovel.endereco.bairro}`
            : `Imóvel ${memoria.idImovel}`;

        const buffer = await gerarPlanilhaMemoriaCalculo({ ...memoria, imovelEndereco: endereco });
        const [ano, mes] = memoria.competencia.split('-');
        const nomeArquivo = `Memória Cálculo ${NOMES_MESES[Number(mes) - 1]} ${ano}.xlsx`;

        return { buffer, nomeArquivo };
    }
}
