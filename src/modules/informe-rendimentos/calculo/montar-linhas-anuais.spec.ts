import { montarLinhasAnuais } from './montar-linhas-anuais';

describe('montarLinhasAnuais', () => {
    it('sempre devolve 12 linhas, zeradas nos meses sem memória gerada', () => {
        const resultado = montarLinhasAnuais([], new Map());

        expect(resultado.linhas).toHaveLength(12);
        expect(resultado.linhas.every((l) => l.rendimentoBruto === 0 && l.valorComissao === 0 && l.impostoRetido === 0)).toBe(true);
        expect(resultado.idContratoMaisRecente).toBeNull();
    });

    it('preenche a linha do mês certo a partir da competência (AAAA-MM-DD)', () => {
        const resultado = montarLinhasAnuais(
            [{ idContrato: '1', competencia: '2026-03-01', valorAluguel: 1000, baseCalculoIrrf: 950, valorIrrf: 10 }],
            new Map([['1', 0.05]]),
        );

        expect(resultado.linhas[2]).toMatchObject({ mes: 3, rendimentoBruto: 950, impostoRetido: 10 });
        expect(resultado.linhas.filter((l) => l.mes !== 3).every((l) => l.rendimentoBruto === 0)).toBe(true);
    });

    it('calcula a comissão do mês como valorAluguel × comissão do contrato daquele mês', () => {
        const resultado = montarLinhasAnuais(
            [{ idContrato: '7', competencia: '2026-01-01', valorAluguel: 2000, baseCalculoIrrf: 2000, valorIrrf: 0 }],
            new Map([['7', 0.08]]),
        );

        expect(resultado.linhas[0].valorComissao).toBe(160); // 2000 × 8%
    });

    it('usa comissão 0 quando o contrato do item não está no mapa (defensivo)', () => {
        const resultado = montarLinhasAnuais(
            [{ idContrato: '99', competencia: '2026-01-01', valorAluguel: 2000, baseCalculoIrrf: 2000, valorIrrf: 0 }],
            new Map(),
        );

        expect(resultado.linhas[0].valorComissao).toBe(0);
    });

    it('soma os totais do ano corretamente', () => {
        const resultado = montarLinhasAnuais(
            [
                { idContrato: '1', competencia: '2026-01-01', valorAluguel: 1000, baseCalculoIrrf: 1000, valorIrrf: 0 },
                { idContrato: '1', competencia: '2026-02-01', valorAluguel: 1000, baseCalculoIrrf: 1000, valorIrrf: 50 },
                { idContrato: '1', competencia: '2026-03-01', valorAluguel: 1000, baseCalculoIrrf: 1000, valorIrrf: 50 },
            ],
            new Map([['1', 0.05]]),
        );

        expect(resultado.totais).toEqual({ rendimentoBruto: 3000, valorComissao: 150, impostoRetido: 100 });
    });

    it('identifica o contrato mais recente (pela competência mais alta) para o cabeçalho do documento', () => {
        const resultado = montarLinhasAnuais(
            [
                { idContrato: '1', competencia: '2026-01-01', valorAluguel: 1000, baseCalculoIrrf: 1000, valorIrrf: 0 },
                { idContrato: '2', competencia: '2026-08-01', valorAluguel: 1200, baseCalculoIrrf: 1200, valorIrrf: 0 },
                { idContrato: '2', competencia: '2026-09-01', valorAluguel: 1200, baseCalculoIrrf: 1200, valorIrrf: 0 },
            ],
            new Map([['1', 0.05], ['2', 0.06]]),
        );

        expect(resultado.idContratoMaisRecente).toBe('2');
    });

    it('cada contrato aplica sua própria comissão (ex.: imóvel trocou de contrato no meio do ano)', () => {
        const resultado = montarLinhasAnuais(
            [
                { idContrato: '1', competencia: '2026-01-01', valorAluguel: 1000, baseCalculoIrrf: 1000, valorIrrf: 0 },
                { idContrato: '2', competencia: '2026-08-01', valorAluguel: 1200, baseCalculoIrrf: 1200, valorIrrf: 0 },
            ],
            new Map([['1', 0.05], ['2', 0.10]]),
        );

        expect(resultado.linhas[0].valorComissao).toBe(50); // jan, contrato 1, 5%
        expect(resultado.linhas[7].valorComissao).toBe(120); // ago, contrato 2, 10%
    });
});
