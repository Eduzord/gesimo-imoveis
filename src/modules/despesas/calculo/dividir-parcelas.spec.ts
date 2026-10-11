import { dividirEmParcelas } from './dividir-parcelas';

describe('dividirEmParcelas', () => {
    it('divide o valor em partes iguais quando a divisão é exata', () => {
        const parcelas = dividirEmParcelas(1000, 10, new Date(Date.UTC(2026, 0, 10)));

        expect(parcelas).toHaveLength(10);
        expect(parcelas.every((p) => p.valor === 100)).toBe(true);
    });

    it('a última parcela absorve a sobra de centavos, e a soma bate exatamente com o total', () => {
        // 1000 / 3 = 333,33333... -> 333,33 + 333,33 + 333,34 = 1000,00
        const parcelas = dividirEmParcelas(1000, 3, new Date(Date.UTC(2026, 0, 10)));

        expect(parcelas.map((p) => p.valor)).toEqual([333.33, 333.33, 333.34]);
        const soma = parcelas.reduce((total, p) => total + p.valor, 0);
        expect(Math.round(soma * 100) / 100).toBe(1000);
    });

    it('nunca sofre erro de ponto flutuante do JavaScript (ex.: 0,1 + 0,2)', () => {
        const parcelas = dividirEmParcelas(0.3, 3, new Date(Date.UTC(2026, 0, 1)));

        expect(parcelas.map((p) => p.valor)).toEqual([0.1, 0.1, 0.1]);
    });

    it('numera as parcelas a partir de 1, em ordem', () => {
        const parcelas = dividirEmParcelas(300, 3, new Date(Date.UTC(2026, 0, 1)));

        expect(parcelas.map((p) => p.numero)).toEqual([1, 2, 3]);
    });

    it('cada parcela vence um mês após a anterior, no mesmo dia', () => {
        const parcelas = dividirEmParcelas(300, 3, new Date(Date.UTC(2026, 0, 15))); // 15/01/2026

        expect(parcelas.map((p) => p.dataVencimento.toISOString().slice(0, 10))).toEqual([
            '2026-01-15',
            '2026-02-15',
            '2026-03-15',
        ]);
    });

    it('ajusta para o último dia do mês quando o dia original não existe nele (dia 31 -> fevereiro)', () => {
        const parcelas = dividirEmParcelas(200, 2, new Date(Date.UTC(2026, 0, 31))); // 31/01/2026

        expect(parcelas.map((p) => p.dataVencimento.toISOString().slice(0, 10))).toEqual([
            '2026-01-31',
            '2026-02-28', // 2026 não é bissexto
        ]);
    });

    it('respeita ano bissexto ao ajustar o dia 31 para fevereiro', () => {
        const parcelas = dividirEmParcelas(200, 2, new Date(Date.UTC(2028, 0, 31))); // 2028 é bissexto

        expect(parcelas[1].dataVencimento.toISOString().slice(0, 10)).toBe('2028-02-29');
    });

    it('volta a usar o dia original depois de passar por um mês mais curto (dia 31)', () => {
        // 31/01 -> 28/02 (ajustado) -> 31/03 (o dia 31 existe em março, não fica "preso" no 28)
        const parcelas = dividirEmParcelas(300, 3, new Date(Date.UTC(2026, 0, 31)));

        expect(parcelas.map((p) => p.dataVencimento.toISOString().slice(0, 10))).toEqual([
            '2026-01-31',
            '2026-02-28',
            '2026-03-31',
        ]);
    });
});
