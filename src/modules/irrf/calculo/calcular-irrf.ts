import { Prisma } from '../../../generated/prisma';

//Função PURA do cálculo do IRRF: não acessa banco nem framework. Quem chama (o service) escolhe a
//versão da tabela vigente na data de competência e a entrega já carregada. Assim o cálculo é testável
//sem mock e nenhum valor fiscal fica no código.

const Decimal = Prisma.Decimal;
type Decimal = Prisma.Decimal;

//Aceita number, string ou Decimal (o Prisma devolve Decimal), sempre convertido sem perda para o cálculo
export type ValorNumerico = number | string | Decimal;

export interface FaixaIrrf {
    ordem: number;
    valorDe: ValorNumerico;
    valorAte: ValorNumerico | null; //null = última faixa, sem teto
    aliquota: ValorNumerico; //em percentual (7.5 = 7,5%)
    parcelaADeduzir: ValorNumerico;
}

//Redutor da Lei 15.270/2025 (art. 3º-A da Lei 9.250/1995). ATENÇÃO: os limites e a fórmula são medidos sobre o
//RENDIMENTO TRIBUTÁVEL (bruto, antes das deduções), e não sobre a base de cálculo do imposto. Fonte oficial:
//https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/exemplos-de-aplicacao-da-lei-15-270-2025
export interface RedutorIrrf {
    limiteIsencao: ValorNumerico; //rendimento até aqui: o imposto é totalmente zerado
    limiteSuperior: ValorNumerico; //rendimento acima daqui: o redutor deixa de valer
    constante: ValorNumerico;
    coeficiente: ValorNumerico; //redução = constante - coeficiente x rendimento tributável
}

export interface TabelaIrrfParaCalculo {
    id: number;
    deducaoDependente: ValorNumerico;
    faixas: FaixaIrrf[];
    redutor?: RedutorIrrf | null;
}

export interface ParametrosCalculoIrrf {
    tabela: TabelaIrrfParaCalculo;
    baseCalculo: ValorNumerico; //valor tributável já com as deduções permitidas aplicadas pelo chamador (menos dependentes, que são deduzidos aqui)
    numeroDependentes?: number;
    //Rendimento tributável BRUTO, antes de qualquer dedução. É ele (e não a base de cálculo) que decide se o redutor
    //se aplica e qual o valor da redução. Se omitido, assume-se que nenhuma outra dedução foi aplicada e vale a
    //própria baseCalculo informada (os dependentes são deduzidos só depois, dentro desta função).
    rendimentoTributavel?: ValorNumerico;
}

export interface ResultadoIrrf {
    idTabela: number;
    baseCalculo: number;
    rendimentoTributavel: number;
    deducaoDependentes: number;
    baseCalculoLiquida: number;
    valorIrrf: number;
    //IRRF / baseCalculo informada, em percentual (não confundir com a alíquota nominal da faixa)
    aliquotaEfetiva: number;
    faixaAplicada: { ordem: number; valorDe: number; valorAte: number | null; aliquota: number; parcelaADeduzir: number };
    redutorAplicado: { tipo: 'ISENCAO_TOTAL' | 'REDUCAO_PARCIAL'; valor: number } | null;
}

const CENTAVOS = 2;
const ZERO = new Decimal(0);

const maximo = (a: Decimal, b: Decimal) => (a.greaterThan(b) ? a : b);
const arredondar = (valor: Decimal, casas: number) => valor.toDecimalPlaces(casas, Prisma.Decimal.ROUND_HALF_UP);

export function calcularIrrf({
    tabela,
    baseCalculo,
    numeroDependentes = 0,
    rendimentoTributavel,
}: ParametrosCalculoIrrf): ResultadoIrrf {
    const base = new Decimal(baseCalculo);

    if (!base.isFinite() || base.isNegative()) {
        throw new Error('A base de cálculo do IRRF deve ser um número maior ou igual a zero.');
    }

    const rendimento = rendimentoTributavel === undefined ? base : new Decimal(rendimentoTributavel);

    if (!rendimento.isFinite() || rendimento.isNegative()) {
        throw new Error('O rendimento tributável deve ser um número maior ou igual a zero.');
    }
    if (rendimento.lessThan(base)) {
        throw new Error('O rendimento tributável (bruto) não pode ser menor que a base de cálculo (após deduções).');
    }
    if (!Number.isInteger(numeroDependentes) || numeroDependentes < 0) {
        throw new Error('O número de dependentes deve ser um inteiro maior ou igual a zero.');
    }

    //1) Deduz os dependentes. A base líquida nunca fica negativa e é arredondada a centavos
    //   antes de escolher a faixa, para não "cair" entre o valorAte de uma faixa e o valorDe da próxima.
    const deducaoDependentes = new Decimal(tabela.deducaoDependente).times(numeroDependentes);
    const baseLiquida = arredondar(maximo(base.minus(deducaoDependentes), ZERO), CENTAVOS);

    //2) Localiza a faixa (limites inclusivos, como na tabela oficial)
    const faixas = [...tabela.faixas].sort((a, b) => a.ordem - b.ordem);
    const faixa = faixas.find(
        (f) => baseLiquida.greaterThanOrEqualTo(f.valorDe) && (f.valorAte === null || baseLiquida.lessThanOrEqualTo(f.valorAte)),
    );

    if (!faixa) {
        throw new Error(`A tabela IRRF ${tabela.id} não possui faixa para a base de cálculo ${baseLiquida.toFixed(CENTAVOS)}.`);
    }

    //3) Imposto da faixa: base x alíquota - parcela a deduzir, nunca negativo
    let imposto = maximo(baseLiquida.times(faixa.aliquota).dividedBy(100).minus(faixa.parcelaADeduzir), ZERO);
    const impostoDaFaixa = imposto;

    //4) Redutor opcional (isenção até um teto e redução gradual acima dele). Os limites e a fórmula usam o
    //   RENDIMENTO TRIBUTÁVEL bruto; a redução é subtraída do imposto já calculado e nunca o deixa negativo.
    const rendimentoArredondado = arredondar(rendimento, CENTAVOS);
    let redutorAplicado: ResultadoIrrf['redutorAplicado'] = null;
    if (tabela.redutor) {
        const { limiteIsencao, limiteSuperior, constante, coeficiente } = tabela.redutor;

        if (rendimentoArredondado.lessThanOrEqualTo(limiteIsencao)) {
            imposto = ZERO;
            redutorAplicado = { tipo: 'ISENCAO_TOTAL', valor: arredondar(impostoDaFaixa, CENTAVOS).toNumber() };
        } else if (rendimentoArredondado.lessThanOrEqualTo(limiteSuperior)) {
            const reducao = maximo(new Decimal(constante).minus(new Decimal(coeficiente).times(rendimentoArredondado)), ZERO);
            imposto = maximo(impostoDaFaixa.minus(reducao), ZERO);
            redutorAplicado = { tipo: 'REDUCAO_PARCIAL', valor: arredondar(reducao, CENTAVOS).toNumber() };
        }
    }

    const valorIrrf = arredondar(imposto, CENTAVOS);
    const aliquotaEfetiva = base.isZero() ? ZERO : arredondar(valorIrrf.dividedBy(base).times(100), 4);

    return {
        idTabela: tabela.id,
        baseCalculo: arredondar(base, CENTAVOS).toNumber(),
        rendimentoTributavel: rendimentoArredondado.toNumber(),
        deducaoDependentes: arredondar(deducaoDependentes, CENTAVOS).toNumber(),
        baseCalculoLiquida: baseLiquida.toNumber(),
        valorIrrf: valorIrrf.toNumber(),
        aliquotaEfetiva: aliquotaEfetiva.toNumber(),
        faixaAplicada: {
            ordem: faixa.ordem,
            valorDe: new Decimal(faixa.valorDe).toNumber(),
            valorAte: faixa.valorAte === null ? null : new Decimal(faixa.valorAte).toNumber(),
            aliquota: new Decimal(faixa.aliquota).toNumber(),
            parcelaADeduzir: new Decimal(faixa.parcelaADeduzir).toNumber(),
        },
        redutorAplicado,
    };
}
