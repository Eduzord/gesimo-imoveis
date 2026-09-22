import { Prisma } from '../../../generated/prisma';
import { calcularIrrf, TabelaIrrfParaCalculo } from './calcular-irrf';

//ATENÇÃO: tabela FICTÍCIA, só para testar a mecânica do cálculo. Não são valores oficiais da Receita Federal.
const tabela: TabelaIrrfParaCalculo = {
    id: 1,
    deducaoDependente: 100,
    faixas: [
        { ordem: 1, valorDe: 0, valorAte: 2000, aliquota: 0, parcelaADeduzir: 0 },
        { ordem: 2, valorDe: 2000.01, valorAte: 3000, aliquota: 10, parcelaADeduzir: 200 },
        { ordem: 3, valorDe: 3000.01, valorAte: null, aliquota: 20, parcelaADeduzir: 500 },
    ],
};

//Redutor fictício: isenção total até 3.500, redução gradual até 4.500
const comRedutor: TabelaIrrfParaCalculo = {
    ...tabela,
    redutor: { limiteIsencao: 3500, limiteSuperior: 4500, constante: 900, coeficiente: 0.2 },
};

const irrf = (baseCalculo: number, numeroDependentes = 0, t = tabela) =>
    calcularIrrf({ tabela: t, baseCalculo, numeroDependentes });

describe('calcularIrrf - faixas', () => {
    it('base na faixa de isenção resulta em IRRF zero', () => {
        const r = irrf(1500);

        expect(r.valorIrrf).toBe(0);
        expect(r.faixaAplicada.ordem).toBe(1);
    });

    it('calcula base x alíquota - parcela a deduzir em cada faixa', () => {
        expect(irrf(2500).valorIrrf).toBe(50); //2500 x 10% - 200
        expect(irrf(4000).valorIrrf).toBe(300); //4000 x 20% - 500
        expect(irrf(2500).faixaAplicada.ordem).toBe(2);
        expect(irrf(4000).faixaAplicada.ordem).toBe(3);
    });

    it('valor exatamente no limite superior pertence à faixa de baixo (limites inclusivos)', () => {
        expect(irrf(2000).faixaAplicada.ordem).toBe(1);
        expect(irrf(3000).faixaAplicada.ordem).toBe(2);
        expect(irrf(3000).valorIrrf).toBe(100);
    });

    it('um centavo acima do limite já pertence à faixa seguinte', () => {
        expect(irrf(2000.01).faixaAplicada.ordem).toBe(2);
        expect(irrf(3000.01).faixaAplicada.ordem).toBe(3);
    });

    it('nunca devolve IRRF negativo (base x alíquota menor que a parcela a deduzir)', () => {
        const r = irrf(2000.01); //200,001 - 200 = 0,001 -> 0,00

        expect(r.valorIrrf).toBe(0);
    });

    it('arredonda para centavos com ROUND_HALF_UP', () => {
        //2555,55 x 10% - 200 = 55,555 -> 55,56 (com float puro daria 55,55)
        expect(irrf(2555.55).valorIrrf).toBe(55.56);
    });

    it('calcula a alíquota efetiva sobre a base informada, em percentual', () => {
        const r = irrf(4000); //300 / 4000

        expect(r.aliquotaEfetiva).toBe(7.5);
        expect(irrf(0).aliquotaEfetiva).toBe(0);
    });

    it('ordena as faixas pela ordem, independentemente da ordem recebida', () => {
        const embaralhada = { ...tabela, faixas: [...tabela.faixas].reverse() };

        expect(irrf(4000, 0, embaralhada).valorIrrf).toBe(300);
    });

    it('aceita string e Prisma.Decimal como valores', () => {
        const comDecimal: TabelaIrrfParaCalculo = {
            id: 2,
            deducaoDependente: new Prisma.Decimal('100.00'),
            faixas: tabela.faixas.map((f) => ({
                ...f,
                valorDe: new Prisma.Decimal(f.valorDe as number),
                valorAte: f.valorAte === null ? null : new Prisma.Decimal(f.valorAte as number),
                aliquota: String(f.aliquota),
                parcelaADeduzir: new Prisma.Decimal(f.parcelaADeduzir as number),
            })),
        };

        expect(calcularIrrf({ tabela: comDecimal, baseCalculo: '2500.00' }).valorIrrf).toBe(50);
    });

    it('devolve os dados de auditoria (versão, base líquida e faixa usada)', () => {
        const r = irrf(2500);

        expect(r).toMatchObject({
            idTabela: 1,
            baseCalculo: 2500,
            baseCalculoLiquida: 2500,
            deducaoDependentes: 0,
            faixaAplicada: { ordem: 2, valorDe: 2000.01, valorAte: 3000, aliquota: 10, parcelaADeduzir: 200 },
            redutorAplicado: null,
        });
    });
});

describe('calcularIrrf - dependentes', () => {
    it('subtrai a dedução por dependente antes de escolher a faixa', () => {
        const r = irrf(3000, 2); //líquida 2800 -> faixa 2: 280 - 200

        expect(r.deducaoDependentes).toBe(200);
        expect(r.baseCalculoLiquida).toBe(2800);
        expect(r.valorIrrf).toBe(80);
    });

    it('dependentes podem mudar a base para uma faixa inferior', () => {
        expect(irrf(3050).faixaAplicada.ordem).toBe(3);
        expect(irrf(3050, 1).faixaAplicada.ordem).toBe(2); //líquida 2950
    });

    it('a base líquida nunca fica negativa', () => {
        const r = irrf(150, 3);

        expect(r.baseCalculoLiquida).toBe(0);
        expect(r.valorIrrf).toBe(0);
    });
});

describe('calcularIrrf - redutor opcional', () => {
    it('sem redutor configurado, só usa faixas', () => {
        expect(irrf(3500).valorIrrf).toBe(200); //700 - 500
        expect(irrf(3500).redutorAplicado).toBeNull();
    });

    it('isenção total até o limite de isenção', () => {
        const r = irrf(3500, 0, comRedutor);

        expect(r.valorIrrf).toBe(0);
        expect(r.redutorAplicado).toEqual({ tipo: 'ISENCAO_TOTAL', valor: 200 });
    });

    it('redução gradual entre o limite de isenção e o limite superior', () => {
        const r = irrf(4000, 0, comRedutor); //bruto 300; redução 900 - 0,2 x 4000 = 100

        expect(r.valorIrrf).toBe(200);
        expect(r.redutorAplicado).toEqual({ tipo: 'REDUCAO_PARCIAL', valor: 100 });
        expect(irrf(4400, 0, comRedutor).valorIrrf).toBe(360); //bruto 380 - redução 20
    });

    it('no limite superior a redução chega a zero', () => {
        expect(irrf(4500, 0, comRedutor).valorIrrf).toBe(400);
    });

    it('acima do limite superior o redutor não se aplica', () => {
        const r = irrf(4600, 0, comRedutor);

        expect(r.valorIrrf).toBe(420);
        expect(r.redutorAplicado).toBeNull();
    });

    it('a redução nunca deixa o imposto negativo', () => {
        const generoso = { ...comRedutor, redutor: { ...comRedutor.redutor!, constante: 2000 } };

        expect(irrf(4000, 0, generoso).valorIrrf).toBe(0);
    });

    it('o redutor usa o rendimento tributável, e não a base depois dos dependentes', () => {
        //rendimento 3600; base líquida 3500 (faixa 3: 3500 x 20% - 500 = 200).
        //Redução sobre o RENDIMENTO: 900 - 0,2 x 3600 = 180 -> 200 - 180 = 20
        //(se usasse a base líquida 3500 cairia na isenção total e daria 0: erro)
        const r = irrf(3600, 1, comRedutor);

        expect(r.rendimentoTributavel).toBe(3600);
        expect(r.baseCalculoLiquida).toBe(3500);
        expect(r.valorIrrf).toBe(20);
        expect(r.redutorAplicado).toEqual({ tipo: 'REDUCAO_PARCIAL', valor: 180 });
    });

    it('rendimento tributável informado (bruto) é que define a faixa do redutor, mesmo com a base menor', () => {
        //base 3300 (após deduções), mas rendimento bruto 3800: fora da isenção total (3500), na redução gradual
        const r = calcularIrrf({ tabela: comRedutor, baseCalculo: 3300, rendimentoTributavel: 3800 });

        //imposto da faixa: 3300 x 20% - 500 = 160; redução: 900 - 0,2 x 3800 = 140; final 160 - 140 = 20
        //(usando a base 3300 haveria isenção total e o resultado seria 0: erro)
        expect(r.redutorAplicado).toEqual({ tipo: 'REDUCAO_PARCIAL', valor: 140 });
        expect(r.valorIrrf).toBe(20);
    });

    it('sem rendimento informado, assume que a base informada é o rendimento (nenhuma outra dedução)', () => {
        expect(irrf(4000, 0, comRedutor).rendimentoTributavel).toBe(4000);
    });

    it('rejeita rendimento tributável menor que a base de cálculo', () => {
        expect(() => calcularIrrf({ tabela: comRedutor, baseCalculo: 4000, rendimentoTributavel: 3999.99 })).toThrow(
            'não pode ser menor que a base',
        );
    });
});

describe('calcularIrrf - entradas inválidas', () => {
    it('rejeita base negativa ou não numérica', () => {
        expect(() => irrf(-1)).toThrow('maior ou igual a zero');
        expect(() => calcularIrrf({ tabela, baseCalculo: 'abc' })).toThrow();
    });

    it('rejeita número de dependentes inválido', () => {
        expect(() => irrf(1000, -1)).toThrow('dependentes');
        expect(() => irrf(1000, 1.5)).toThrow('dependentes');
    });

    it('falha de forma explícita se a tabela não cobre a base (tabela mal formada)', () => {
        const incompleta: TabelaIrrfParaCalculo = { ...tabela, faixas: [tabela.faixas[0]] };

        expect(() => irrf(5000, 0, incompleta)).toThrow('não possui faixa');
    });
});
