import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { CriarImovelDto } from '../dto/criar-imovel.dto';
import { AtualizarImovelDto } from '../dto/atualizar-imovel.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ImoveisService {
    //Aqui é onde eu injeto o banco de dados
    constructor(private readonly prisma: PrismaService, private readonly httpService: HttpService) {}

    //O Prisma traz idLocador da tabela propriedadeimovel como BigInt, o que quebra o JSON.
    //Esse helper converte para string antes de devolver ao front-end.
    private formatarImovel(imovel: any) {
        return {
            ...imovel,
            ...(imovel.propriedadeimovel && {
                propriedadeimovel: imovel.propriedadeimovel.map((p: any) => ({
                    ...p,
                    idLocador: p.idLocador.toString(),
                })),
            }),
        };
    }

    //Regras da posse partilhada: o mesmo locador não pode aparecer duas vezes no imóvel
    //e a soma dos percentuais não pode passar de 100%. Soma menor que 100% é permitida.
    private validarPartilha(proprietarios: { idLocador: number; percentualParticipacao: number }[]) {
        const ids = proprietarios.map((p) => String(p.idLocador));
        if (new Set(ids).size !== ids.length) {
            throw new BadRequestException('O mesmo locador não pode ser informado mais de uma vez no mesmo imóvel.');
        }

        //Trabalho em centésimos de ponto percentual para não sofrer com erro de ponto flutuante (Decimal(5,2) no banco)
        const somaCentesimos = proprietarios.reduce((soma, p) => soma + Math.round(p.percentualParticipacao * 100), 0);
        if (somaCentesimos > 10000) {
            throw new BadRequestException(
                `A soma dos percentuais de participação não pode exceder 100% (informado: ${(somaCentesimos / 100).toFixed(2)}%).`
            );
        }
    }

    async listarPorLocador(idLocador: number) {
        const imoveis = await this.prisma.imovel.findMany({
            where: { propriedadeimovel: { some: { idLocador: BigInt(idLocador) } } },
            include: { endereco: true, propriedadeimovel: true }
        });

        return imoveis.map((imovel) => this.formatarImovel(imovel));
    }

    async listarTodos() {
        //Aqui eu faço uma busca de todos os imóveis, trazendo os dados do endereço e dos proprietários relacionados
        const imoveis = await this.prisma.imovel.findMany({
            include: {
                endereco: true,
                propriedadeimovel: true
            }
        });

        return imoveis.map((imovel) => this.formatarImovel(imovel));
    }

    async buscarPorId(id: number) {
        const imovel = await this.prisma.imovel.findUnique({
            where: {id},
            include: {endereco: true, propriedadeimovel: true}
        });

        //Se o banco não char o ID, vai ser disparado um erro 404 padronizado
        if (!imovel) {
            throw new NotFoundException(`Imóvel com ID {id} não encontrado no catálogo.`);
        }

        return this.formatarImovel(imovel);
    }

    async buscarEnderecoPorCep(cep: string) {
        //Aqui eu faço uma remoção de caracteres que não são números,
        //caso o corretor envie o CEP com traços ou pontos
        const cepLimpo = cep.replace(/\D/g, '');

        if (cepLimpo.length !== 8){
            throw new BadRequestException('Cep inválido. O formato correto deve conter 8 dígitos numéricos.');
        }

        try {
            //O firstValueFrom é necessário para transformar a resposta do Axios
            //em uma Promise, já que o NestJS trabalha com Promises
            const resposta = await firstValueFrom(
                this.httpService.get(`https://viacep.com.br/ws/${cepLimpo}/json/`)
            );

            const dados = resposta.data;

            //O ViaCep não dá erro se o CEP não existir, ele apenas retorna
            //um objeto com a propriedade 'erro' como true. Então, aqui vou
            //tratar isso para que o front-end receba um erro 404 de verdade
            if (dados.erro){
                throw new NotFoundException('CEP não encontrado na base dos Correios.');
            }

            //Aqui vou mapear a resposta do ViaCep para o formato que o sistema espera,
            //que é o mesmo do DTO de endereço
            return {
                cep: dados.cep,
                logradouros: dados.logradouro,
                bairro: dados.bairro,
                cidade: dados.localidade,
                estado: dados.uf
            };
            } catch (erro) {
                //Se o erro já for nosso (NotFound ou BadRequest),
                //apenas repasso para o front-end
                if (erro instanceof NotFoundException || erro instanceof BadRequestException) {
                    throw erro;
                }

                //Se a API dos correios cair, aqui vou tratar o erro
                //e avisar o front-end que não foi possível buscar o CEP
                throw new BadRequestException('Serviço de busca de CEP temporariamente indisponível.');
            }
        }

    async criar(dados: CriarImovelDto) {
        //Utilizo o recurso de 'Nested Writes' do Prisma para salvar o endereço, os proprietários
        //e o Imóvel na mesma transação. Assim, se um falhar, os outros sofrem rollback automático
        const { proprietarios, ...dadosImovel } = dados;

        if (proprietarios) {
            this.validarPartilha(proprietarios);
        }

        const imovelCriado = await this.prisma.imovel.create({
            data: {
                inscricaoIPTU: dadosImovel.inscricaoIPTU,
                inscricaoBombeiro: dadosImovel.inscricaoBombeiro,
                metragem: dadosImovel.metragem,
                classificacao: dadosImovel.classificacao,
                tipologia: dadosImovel.tipologia,
                status: dadosImovel.status,
                endereco: {
                    create: dadosImovel.endereco
                }, //O Prisma cria o endereço e já vincula o ID automaticamente
                //Se vieram proprietários, já cria os vínculos de posse partilhada junto
                ...(proprietarios && proprietarios.length > 0 && {
                    propriedadeimovel: {
                        create: proprietarios.map((p) => ({
                            idLocador: BigInt(p.idLocador),
                            percentualParticipacao: p.percentualParticipacao,
                        })),
                    },
                }),
            },

            include:{
                endereco: true,
                propriedadeimovel: true
            }, //Retorno o objeto completo montado para o front-end
        });

        return this.formatarImovel(imovelCriado);
    }

    async atualizar(id: number, dados: AtualizarImovelDto) {
        //Primeiro, garanto que o imóvel existe (se ele não existir, o buscarPorId já trava aqui)
        await this.buscarPorId(id);

        //Separo o bloco de endereço e a lista de proprietários do resto dos dados para o Prisma atualizar corretamente
        const { endereco, proprietarios, ...dadosImovel } = dados;

        if (proprietarios) {
            this.validarPartilha(proprietarios);
        }

        const imovelAtualizado = await this.prisma.$transaction(async (prisma) => {
            //Se o corretor reenviou a lista de proprietários, substituo o vínculo antigo pelo novo
            if (proprietarios) {
                await prisma.propriedadeimovel.deleteMany({ where: { idImovel: id } });

                if (proprietarios.length > 0) {
                    await prisma.propriedadeimovel.createMany({
                        data: proprietarios.map((p) => ({
                            idImovel: id,
                            idLocador: BigInt(p.idLocador),
                            percentualParticipacao: p.percentualParticipacao,
                        })),
                    });
                }
            }

            return await prisma.imovel.update({
                where: {id},
                data: {
                    ...dadosImovel,
                    //Se o corretor enviou dados de endereço na atualização, o sistema atualiza também
                    ...(endereco && {
                        endereco:{
                            update: endereco
                        }
                    })
                },
                include: { endereco: true, propriedadeimovel: true }
            });
        });

        return this.formatarImovel(imovelAtualizado);
    }

    async remover(id: number) {
        //Valido se existe antes de tentar apagar
        await this.buscarPorId(id);

        return await this.prisma.imovel.update({
            where: {id},
            data:{
                status: 'INATIVO' as any //O Prisma vai mapear o valor do enum correspondente
            },
            include: {
                endereco: true //Aqui vai retornar o objeto com o endereço para confirmação visual no front-end
            }
        });
    }

    async removerDefinitivo(id: number) {
        // O buscarPorId já valida se existe e traz os dados (incluindo o idEndereco)
        const imovel = await this.buscarPorId(id);

        await this.prisma.$transaction(async (prisma) => {
            // 1. Apagamos o imóvel primeiro
            await prisma.imovel.delete({
                where: { id }
            });

            // 2. Agora apagamos o endereço que ficou "órfão"
            // Usamos prisma.endereco em vez do inventado "enderecoImovel"
            if (imovel.idEndereco) {
                await prisma.endereco.delete({
                    where: { id: imovel.idEndereco }
                });
            }
        });

        return { message: 'Imóvel e endereço removidos definitivamente com sucesso.' };
    }
}