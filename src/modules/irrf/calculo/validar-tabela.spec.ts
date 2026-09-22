import { montarFaixas, validarTabela, TabelaEntrada } from './validar-tabela';

//Valores fictícios, só para exercitar as regras
const tabelaValida: TabelaEntrada = {
    deducaoDependente: 100,
    faixas: [
        { valorAte: 2000, aliquota: 0, parcelaADeduzir: 0 },
        { valorAte: 3000, aliquota: 10, parcelaADeduzir: 200 },
        { valorAte: null, aliquota: 20, parcelaADeduzir: 500 },
    ],
};

describe('montarFaixas', () => {
    it('deriva ordem e limite inferior (de = até anterior + 0,01)', () => {
        expect(montarFaixas(tabelaValida.faixas)).toEqual([
            { ordem: 1, valorDe: 0, valorAte: 2000, aliquota: 0, parcelaADeduzir: 0 },
            { ordem: 2, valorDe: 2000.01, valorAte: 3000, aliquota: 10, parcelaADeduzir: 200 },
            { ordem: 3, valorDe: 3000.01, valorAte: null, aliquota: 20, parcelaADeduzir: 500 },
        ]);
    });

    it('não sofre erro de ponto flutuante com centavos', () => {
        const faixas = montarFaixas([
            { valorAte: 2428.8, aliquota: 0, parcelaADeduzir: 0 },
            { valorAte: 2826.65, aliquota: 7.5, parcelaADeduzir: 10 },
            { aliquota: 15, parcelaADeduzir: 20 },
        ]);

        expect(faixas.map((f) => f.valorDe)).toEqual([0, 2428.81, 2826.66]);
    });
});

describe('validarTabela', () => {
    it('aceita uma tabela bem formada', () => {
        expect(validarTabela(tabelaValida)).toEqual([]);
    });

    it('exige ao menos uma faixa', () => {
        expect(validarTabela({ ...tabelaValida, faixas: [] })).toEqual(['Informe ao menos uma faixa.']);
    });

    it('a última faixa deve ficar sem limite', () => {
        const erros = validarTabela({
            ...tabelaValida,
            faixas: [
                { valorAte: 2000, aliquota: 0, parcelaADeduzir: 0 },
                { valorAte: 3000, aliquota: 10, parcelaADeduzir: 200 },
            ],
        });

        expect(erros.join(' ')).toContain('última faixa não pode ter limite');
    });

    it('faixas intermediárias precisam de limite', () => {
        const erros = validarTabela({
            ...tabelaValida,
            faixas: [
                { valorAte: null, aliquota: 0, parcelaADeduzir: 0 },
                { valorAte: null, aliquota: 10, parcelaADeduzir: 200 },
            ],
        });

        expect(erros.join(' ')).toContain('faixa 1 precisa de um limite');
    });

    it('os limites devem ser estritamente crescentes', () => {
        const erros = validarTabela({
            ...tabelaValida,
            faixas: [
                { valorAte: 3000, aliquota: 0, parcelaADeduzir: 0 },
                { valorAte: 3000, aliquota: 10, parcelaADeduzir: 200 },
                { valorAte: null, aliquota: 20, parcelaADeduzir: 500 },
            ],
        });

        expect(erros.join(' ')).toContain('maior que o da faixa anterior');
    });

    it('valida alíquota, parcela e dedução por dependente', () => {
        const erros = validarTabela({
            deducaoDependente: -1,
            faixas: [
                { valorAte: 2000, aliquota: 101, parcelaADeduzir: 0 },
                { valorAte: null, aliquota: 20, parcelaADeduzir: -5 },
            ],
        });

        expect(erros).toHaveLength(3);
    });

    it('o redutor precisa ter limite superior maior que o de isenção', () => {
        const erros = validarTabela({
            ...tabelaValida,
            redutor: { limiteIsencao: 5000, limiteSuperior: 5000, constante: 1, coeficiente: 0.1 },
        });

        expect(erros.join(' ')).toContain('limite superior deve ser maior');
    });

    it('aceita um redutor consistente', () => {
        const erros = validarTabela({
            ...tabelaValida,
            redutor: { limiteIsencao: 3500, limiteSuperior: 4500, constante: 900, coeficiente: 0.2 },
        });

        expect(erros).toEqual([]);
    });
});
