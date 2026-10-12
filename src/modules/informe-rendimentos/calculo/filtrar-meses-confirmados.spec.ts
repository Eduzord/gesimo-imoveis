import { filtrarItensComAluguelConfirmado } from './filtrar-meses-confirmados';

describe('filtrarItensComAluguelConfirmado', () => {
    it('mantém o item quando há uma despesa de aluguel paga no mesmo contrato e mês', () => {
        const resultado = filtrarItensComAluguelConfirmado(
            [{ idContrato: '1', competencia: '2026-09-01' }],
            [{ idContratoLocacao: '1', anoMes: '2026-09' }],
        );

        expect(resultado).toHaveLength(1);
    });

    it('remove o item quando NÃO há despesa de aluguel paga para aquele mês (cobrança sem confirmação de recebimento)', () => {
        const resultado = filtrarItensComAluguelConfirmado(
            [{ idContrato: '1', competencia: '2026-09-01' }],
            [],
        );

        expect(resultado).toHaveLength(0);
    });

    it('não confunde meses diferentes do mesmo contrato', () => {
        const resultado = filtrarItensComAluguelConfirmado(
            [
                { idContrato: '1', competencia: '2026-09-01' },
                { idContrato: '1', competencia: '2026-10-01' },
            ],
            [{ idContratoLocacao: '1', anoMes: '2026-09' }],
        );

        expect(resultado.map((i) => i.competencia)).toEqual(['2026-09-01']);
    });

    it('não confunde contratos diferentes no mesmo mês (troca de contrato no imóvel)', () => {
        const resultado = filtrarItensComAluguelConfirmado(
            [{ idContrato: '2', competencia: '2026-09-01' }],
            [{ idContratoLocacao: '1', anoMes: '2026-09' }], // confirmação é de OUTRO contrato
        );

        expect(resultado).toHaveLength(0);
    });
});
