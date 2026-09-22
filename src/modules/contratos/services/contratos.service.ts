import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service'
import { CriarContratoDto } from '../dto/criar-contrato.dto';
import { AtualizarContratoDto } from '../dto/atualizar-contrato.dto';

@Injectable()
export class ContratosService {
    constructor(private readonly prisma: PrismaService) {}

    //Esse método auxiliar foi inserido para evitar que o JSON quebre ao ler o BigInt do MySQL
    private formatarContrato(contrato: any){
        return {
            ...contrato,
            id: contrato.id.toString(),
            idImovel: contrato.idImovel,
            idLocador: contrato.idLocador.toString(),
            idLocatario: contrato.idLocatario.toString(),
        };
    }

    async criar(dados: CriarContratoDto) {
        //Aqui é onde vamos buscar o imóvel no banco de dados para checar regras de negócios
        const imovel = await this.prisma.imovel.findUnique({
            where: {id: dados.idImovel},
            include: {propriedadeimovel: true}
        });

        //Se o imóvel não existir no banco, vamos travar a operação
        if (!imovel){
            throw new NotFoundException(`Imóvel com ID ${dados.idImovel} não encontrado no catálogo`)
        }

        //Se o imóvel existir, mas não estiver DISPONÍVEL, também iremos travar a operação
        if (imovel.status !== 'DISPONIVEL'){
            throw new BadRequestException(`Locação negada. O imóvel atual encontra-se com status: ${imovel.status}`)
        }

        //Se o imóvel já tem proprietários cadastrados (posse partilhada), o locador do contrato
        //precisa ser um deles. Imóveis sem proprietários cadastrados seguem sem essa checagem.
        if (imovel.propriedadeimovel.length > 0) {
            const locadorEProprietario = imovel.propriedadeimovel.some(
                (p) => p.idLocador === BigInt(dados.idLocador)
            );

            if (!locadorEProprietario) {
                throw new BadRequestException(`O locador ${dados.idLocador} não é proprietário do imóvel ${dados.idImovel}.`)
            }
        }

        //Aqui é onde realmente tem início a transição: Tudo aqui dentro PRECISA dar certo ou nada é salvo
        return await this.prisma.$transaction(async (prisma) => {

            //Aqui é onde criamos o contrato
            const novoContrato = await prisma.contratolocacao.create({
                data: {
                    idImovel: dados.idImovel,
                    //Transformando o Number que vem do JSON para BigInt
                    idLocador: BigInt(dados.idLocador),
                    idLocatario: BigInt(dados.idLocatario),
                    dataInicio: dados.dataInicio,
                    dataFim: dados.dataFim,
                    dataReajuste: dados.dataReajuste,
                    valorAluguel: dados.valorAluguel,
                    comissao: dados.comissao,
                    status: 'ATIVO'
                }
            });

            //Aqui atualiza o status do imóvel
            await prisma.imovel.update({
                where: {id: dados.idImovel},
                data: {status: 'ALUGADO'}
            });

            //Aqui acontece o "tratamento" de retorno: o NestJS (JSON) não sabe ler BigInt,
            //por isso, para não quebrar a tela do swagger, convertemos os BigInts gerados para String
            //antes de devolver
            return this.formatarContrato(novoContrato);
        });
    }

    async listarTodos(filtros: { idImovel?: number; idLocatario?: number; idLocador?: number } = {}) {
        const contratos = await this.prisma.contratolocacao.findMany({
            where: {
                ...(filtros.idImovel !== undefined && { idImovel: filtros.idImovel }),
                ...(filtros.idLocatario !== undefined && { idLocatario: BigInt(filtros.idLocatario) }),
                ...(filtros.idLocador !== undefined && { idLocador: BigInt(filtros.idLocador) }),
            },
            include: {
                imovel: {
                    include: { endereco: true } //Traz o imóvel e o endereço acoplados
                }
            }
        });

        return contratos.map(contrato => this.formatarContrato(contrato));
    }

    async buscarPorId(id: number){
        //No banco, nosso ID é BigInt, então aqui acontece a conversão para a busca
        const contrato = await this.prisma.contratolocacao.findUnique({
            where: { id: BigInt(id) },
                include: {
                    imovel: {
                        include: { endereco: true }
                    }
                }
        });

        if (!contrato) {
            throw new NotFoundException(`Contrato com ID ${id} não encontrado.`);
        }

        return this.formatarContrato(contrato);
    }

    async atualizarDados(id: number, dados: AtualizarContratoDto) {
        const contratoOriginal = await this.prisma.contratolocacao.findUnique({
            where: {id: BigInt(id)}
        });

        if (!contratoOriginal){
            throw new NotFoundException(`Contrato com ID ${id} não encontrado para edição`);
        }

        //Essa regra de contrato permite a edição APENAS de contrato que estão "rolando"
        if (contratoOriginal.status !== 'ATIVO'){
            throw new BadRequestException(`Apenas contratos ATIVOS podem ser editados. Status atual: ${contratoOriginal.status}`);
        }

        //Caso o usuário tenha enviado novos IDs, eles serão transformados em BigInt
        const dadosAtualizacao = {
            ...dados,
            ...(dados.idLocador && {idLocador: BigInt(dados.idLocador)}),
            ...(dados.idLocatario && {idLocatario: BigInt(dados.idLocatario)})
        };

        //Aqui é onde o update é executado
        const contratoAtualizado = await this.prisma.contratolocacao.update({
            where: {id: BigInt(id)},
            data: dadosAtualizacao
        });

        return this.formatarContrato(contratoAtualizado);
    }

    //Método de rescisão (patch)

    async rescindir(id: number) {
        //Primeiro vamos validar se o contrato existe
        const contratoOriginal = await this.prisma.contratolocacao.findUnique({
            where: { id: BigInt(id)}
        });

        if (!contratoOriginal) {
            throw new NotFoundException(`Contrato com id ${id} não encontrado para rescisão`);
        }

        //Se o contrato já estiver encerrado ou cancelado, impede nova alteração
        if (contratoOriginal.status !== 'ATIVO') {
            throw new BadRequestException(`Operação negada. Esse contrato já se encontra: ${contratoOriginal.status}`)
        }

        //Aqui acontece a transação: o contrato é fechado e a casa liberada ao mesmo tempo
        return await this.prisma.$transaction(async (prisma) => {
            
            //Aqui desliga o contrato
            const contratoEncerrado = await prisma.contratolocacao.update({
                where: { id: BigInt(id)},
                data: {status: 'ENCERRADO'}
            });

            //Libera o imóvel de volta no catálogo
            await prisma.imovel.update({
                where: {id: contratoOriginal.idImovel},
                data: {status: 'DISPONIVEL'}
            });

            return this.formatarContrato(contratoEncerrado);
        })
    }

    //Método desenvolvido para o upload de arquivo (PDF)

    async uploadDocumento(id: number, arquivo: Express.Multer.File) {
        
        //Validando se o arquivo realmente foi enviado
        if(!arquivo){
            throw new BadRequestException('Nenhum arquivo foi enviado na requisição.')
        }

        //Buscando o contrato para garantir que ele existe e está ativo
        const contratoOriginal = await this.prisma.contratolocacao.findUnique({
            where: {id: BigInt(id)}
        });

        if (!contratoOriginal){
            throw new NotFoundException(`Contrato com ID ${id} não encontrado para upload.`);
        }

        if (contratoOriginal.status !== 'ATIVO'){
            throw new BadRequestException(`Upload negado. O contrato se encontra: ${contratoOriginal.status}`);
        }

        //Atualizando apenas a coluna de bytes com o buffer em memória do arquivo
        const contratoAtualizado = await this.prisma.contratolocacao.update({
            where: {id: BigInt(id)},
            data: {
                contratoDigitalizado: Buffer.from(arquivo.buffer) //O Prisma traduz automaticamente o Buffer para LONGBOB
            }
        });

        return this.formatarContrato(contratoAtualizado);
    }

    async removerDefinitivo(id: number) {
        const contratoOriginal = await this.prisma.contratolocacao.findUnique({
            where: { id: BigInt(id) }
        });

        if (!contratoOriginal) {
            throw new NotFoundException(`Contrato com id ${id} não encontrado para exclusão.`);
        }

        await this.prisma.contratolocacao.delete({
            where: { id: BigInt(id) }
        });

        return { message: 'Contrato removido definitivamente com sucesso.' };
    }
}
