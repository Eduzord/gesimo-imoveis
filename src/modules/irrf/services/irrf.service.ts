import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { Prisma } from '../../../generated/prisma';
import { CriarTabelaIrrfDto } from '../dto/criar-tabela-irrf.dto';
import { AtualizarTabelaIrrfDto } from '../dto/atualizar-tabela-irrf.dto';
import { CalcularIrrfDto } from '../dto/calcular-irrf.dto';
import { calcularIrrf, TabelaIrrfParaCalculo } from '../calculo/calcular-irrf';
import { montarFaixas, validarTabela } from '../calculo/validar-tabela';
import { dataDeHoje, diaAnterior, paraBr, paraDataUtc, paraIso } from '../calculo/datas';

type TabelaComFaixas = Prisma.tabelairrfGetPayload<{ include: { faixairrf: true } }>;
type SituacaoTabela = 'VIGENTE' | 'FUTURA' | 'ENCERRADA';

@Injectable()
export class IrrfService {
    constructor(private readonly prisma: PrismaService) {}

    //Uma versão fica vigente até o dia anterior ao início da próxima. O fim NÃO é gravado: é derivado aqui,
    //então não existe sobreposição/lacuna e excluir uma versão futura devolve a anterior ao estado "em aberto".
    private formatar(tabela: TabelaComFaixas, proximoInicio: Date | null, hoje: Date, editavel: boolean) {
        const fim = proximoInicio ? diaAnterior(proximoInicio) : null;

        let situacao: SituacaoTabela = 'VIGENTE';
        if (hoje < tabela.vigenciaInicio) situacao = 'FUTURA';
        else if (fim && hoje > fim) situacao = 'ENCERRADA';

        const faixas = [...tabela.faixairrf].sort((a, b) => a.ordem - b.ordem);
        const temRedutor = tabela.redutorLimiteIsencao !== null;

        //Decimal sai como number (mesmo padrão de formatarDespesa) e datas como AAAA-MM-DD
        return {
            id: tabela.id,
            vigenciaInicio: paraIso(tabela.vigenciaInicio),
            vigenciaFim: fim ? paraIso(fim) : null,
            situacao,
            descricao: tabela.descricao,
            deducaoDependente: Number(tabela.deducaoDependente),
            redutor: temRedutor
                ? {
                      limiteIsencao: Number(tabela.redutorLimiteIsencao),
                      limiteSuperior: Number(tabela.redutorLimiteSuperior),
                      constante: Number(tabela.redutorConstante),
                      coeficiente: Number(tabela.redutorCoeficiente),
                  }
                : null,
            faixas: faixas.map((f) => ({
                ordem: f.ordem,
                valorDe: Number(f.valorDe),
                valorAte: f.valorAte === null ? null : Number(f.valorAte),
                aliquota: Number(f.aliquota),
                parcelaADeduzir: Number(f.parcelaADeduzir),
            })),
            editavel,
            criadoEm: tabela.criadoEm,
            atualizadoEm: tabela.atualizadoEm,
        };
    }

    //Ponto único de decisão sobre imutabilidade. Hoje nenhum cálculo é gravado (não existe o model de recibo),
    //então nenhuma versão está "em uso" e todas podem ser corrigidas pelo ADMIN.
    //TODO: quando o recibo persistir o idTabela usado, retornar true se houver recibo apontando para esta versão
    //      (a UI e as rotas de editar/excluir já respeitam este retorno; o histórico passa a ser só por nova versão).
    async tabelaEstaEmUso(_idTabela: number): Promise<boolean> {
        return false;
    }

    async listar(hoje: Date = dataDeHoje()) {
        const tabelas = await this.prisma.tabelairrf.findMany({
            orderBy: { vigenciaInicio: 'asc' },
            include: { faixairrf: true },
        });

        const formatadas = await Promise.all(
            tabelas.map(async (tabela, indice) =>
                this.formatar(tabela, tabelas[indice + 1]?.vigenciaInicio ?? null, hoje, !(await this.tabelaEstaEmUso(tabela.id))),
            ),
        );

        //Mais recente primeiro
        return formatadas.reverse();
    }

    async buscarPorId(id: number, hoje: Date = dataDeHoje()) {
        const tabela = await this.prisma.tabelairrf.findUnique({ where: { id }, include: { faixairrf: true } });

        if (!tabela) {
            throw new NotFoundException(`Tabela IRRF com ID ${id} não encontrada.`);
        }

        return this.formatarComProxima(tabela, hoje);
    }

    async buscarVigente(data: Date = dataDeHoje(), hoje: Date = dataDeHoje()) {
        const tabela = await this.carregarVigente(paraDataUtc(data));
        return this.formatarComProxima(tabela, hoje);
    }

    private async formatarComProxima(tabela: TabelaComFaixas, hoje: Date) {
        const proxima = await this.prisma.tabelairrf.findFirst({
            where: { vigenciaInicio: { gt: tabela.vigenciaInicio } },
            orderBy: { vigenciaInicio: 'asc' },
            select: { vigenciaInicio: true },
        });

        return this.formatar(tabela, proxima?.vigenciaInicio ?? null, hoje, !(await this.tabelaEstaEmUso(tabela.id)));
    }

    //Nunca "cai" para a tabela mais recente: sem versão vigente na data, o cálculo é recusado com uma mensagem
    //que orienta o ADMIN. Calcular com uma tabela errada seria pior do que não calcular.
    private async carregarVigente(data: Date): Promise<TabelaComFaixas> {
        const tabela = await this.prisma.tabelairrf.findFirst({
            where: { vigenciaInicio: { lte: data } },
            orderBy: { vigenciaInicio: 'desc' },
            include: { faixairrf: true },
        });

        if (!tabela) {
            throw new NotFoundException(
                `Não há tabela IRRF vigente para a competência ${paraBr(data)}. Cadastre uma tabela em Tabelas IRRF.`,
            );
        }

        return tabela;
    }

    async criar(dados: CriarTabelaIrrfDto) {
        this.validar(dados);
        const inicio = paraDataUtc(dados.vigenciaInicio);
        await this.garantirInicioLivre(inicio);

        try {
            const criada = await this.prisma.tabelairrf.create({
                data: {
                    ...this.dadosDaTabela(dados, inicio),
                    faixairrf: { create: montarFaixas(dados.faixas) },
                },
            });

            return await this.buscarPorId(criada.id);
        } catch (erro) {
            this.traduzirConflito(erro, inicio);
            throw erro;
        }
    }

    async atualizar(id: number, dados: AtualizarTabelaIrrfDto) {
        await this.buscarPorId(id);
        await this.garantirNaoEmUso(id);

        this.validar(dados);
        const inicio = paraDataUtc(dados.vigenciaInicio);
        await this.garantirInicioLivre(inicio, id);

        try {
            //Substitui a versão inteira numa transação: se algo falhar, a versão antiga permanece intacta
            await this.prisma.$transaction(async (prisma) => {
                await prisma.faixairrf.deleteMany({ where: { idTabela: id } });
                await prisma.tabelairrf.update({
                    where: { id },
                    data: {
                        ...this.dadosDaTabela(dados, inicio),
                        faixairrf: { create: montarFaixas(dados.faixas) },
                    },
                });
            });
        } catch (erro) {
            this.traduzirConflito(erro, inicio);
            throw erro;
        }

        return await this.buscarPorId(id);
    }

    async remover(id: number) {
        await this.buscarPorId(id);
        await this.garantirNaoEmUso(id);

        await this.prisma.tabelairrf.delete({ where: { id } });

        return { message: 'Tabela IRRF removida com sucesso.' };
    }

    //Escolhe a versão pela DATA DE COMPETÊNCIA informada (nunca pela data de hoje) e devolve, junto do valor,
    //tudo o que precisa ser gravado no recibo para auditoria: idTabela, faixa usada e alíquota efetiva.
    async calcular(dados: CalcularIrrfDto) {
        const competencia = paraDataUtc(dados.dataCompetencia);
        const tabela = await this.carregarVigente(competencia);

        if (dados.rendimentoTributavel !== undefined && dados.rendimentoTributavel < dados.baseCalculo) {
            throw new BadRequestException('O rendimento tributável (bruto) não pode ser menor que a base de cálculo (após deduções).');
        }

        const resultado = calcularIrrf({
            tabela: this.paraCalculo(tabela),
            baseCalculo: dados.baseCalculo,
            numeroDependentes: dados.numeroDependentes ?? 0,
            rendimentoTributavel: dados.rendimentoTributavel,
        });

        return {
            ...resultado,
            dataCompetencia: paraIso(competencia),
            vigenciaInicio: paraIso(tabela.vigenciaInicio),
        };
    }

    private paraCalculo(tabela: TabelaComFaixas): TabelaIrrfParaCalculo {
        return {
            id: tabela.id,
            deducaoDependente: tabela.deducaoDependente,
            faixas: tabela.faixairrf.map((f) => ({
                ordem: f.ordem,
                valorDe: f.valorDe,
                valorAte: f.valorAte,
                aliquota: f.aliquota,
                parcelaADeduzir: f.parcelaADeduzir,
            })),
            redutor:
                tabela.redutorLimiteIsencao !== null &&
                tabela.redutorLimiteSuperior !== null &&
                tabela.redutorConstante !== null &&
                tabela.redutorCoeficiente !== null
                    ? {
                          limiteIsencao: tabela.redutorLimiteIsencao,
                          limiteSuperior: tabela.redutorLimiteSuperior,
                          constante: tabela.redutorConstante,
                          coeficiente: tabela.redutorCoeficiente,
                      }
                    : null,
        };
    }

    private dadosDaTabela(dados: CriarTabelaIrrfDto, inicio: Date) {
        return {
            vigenciaInicio: inicio,
            descricao: dados.descricao?.trim() || null,
            deducaoDependente: dados.deducaoDependente,
            redutorLimiteIsencao: dados.redutor?.limiteIsencao ?? null,
            redutorLimiteSuperior: dados.redutor?.limiteSuperior ?? null,
            redutorConstante: dados.redutor?.constante ?? null,
            redutorCoeficiente: dados.redutor?.coeficiente ?? null,
        };
    }

    private validar(dados: CriarTabelaIrrfDto) {
        const erros = validarTabela({
            deducaoDependente: dados.deducaoDependente,
            faixas: dados.faixas,
            redutor: dados.redutor,
        });

        if (erros.length > 0) {
            throw new BadRequestException(erros);
        }
    }

    private async garantirInicioLivre(inicio: Date, ignorarId?: number) {
        const existente = await this.prisma.tabelairrf.findUnique({ where: { vigenciaInicio: inicio } });

        if (existente && existente.id !== ignorarId) {
            throw new ConflictException(
                `Já existe uma tabela IRRF com vigência iniciando em ${paraBr(inicio)}. Edite a existente ou escolha outra data.`,
            );
        }
    }

    private async garantirNaoEmUso(id: number) {
        if (await this.tabelaEstaEmUso(id)) {
            throw new BadRequestException(
                'Esta tabela já foi usada em recibos e não pode ser alterada. Cadastre uma nova versão com a nova vigência.',
            );
        }
    }

    //Corrida entre dois cadastros na mesma data: o índice único do banco vira o mesmo 409 amigável
    private traduzirConflito(erro: unknown, inicio: Date) {
        if ((erro as { code?: string })?.code === 'P2002') {
            throw new ConflictException(`Já existe uma tabela IRRF com vigência iniciando em ${paraBr(inicio)}.`);
        }
    }
}
