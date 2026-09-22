import { montarRateio } from './montar-rateio';

//Cenário inspirado na planilha de referência (valores fictícios simplificados)
const proprietarios = [
    { idLocador: '1', percentualParticipacao: 60 },
    { idLocador: '2', percentualParticipacao: 40 },
];

describe('montarRateio', () => {
    it('rateia o aluguel pelo percentual de cada proprietário', () => {
        const itens = montarRateio(proprietarios, 10000);

        expect(itens).toHaveLength(2);
        expect(itens[0]).toMatchObject({ idLocador: '1', valorAluguel: 6000, baseCalculoIrrf: 6000 });
        expect(itens[1]).toMatchObject({ idLocador: '2', valorAluguel: 4000, baseCalculoIrrf: 4000 });
    });

    it('rateia uma despesa extra proporcionalmente entre todos quando aplicacao = RATEIO', () => {
        const itens = montarRateio(proprietarios, 10000, [
            { idDespesa: '1', tipo: 'SEGURO_INCENDIO', descricao: 'Seguro', valor: 500, aplicacao: 'RATEIO' },
        ]);

        expect(itens[0].valorReembolsos).toBe(300); // 60% de 500
        expect(itens[1].valorReembolsos).toBe(200); // 40% de 500
        // reembolso não é renda: não entra na base do IRRF
        expect(itens[0].baseCalculoIrrf).toBe(6000);
    });

    it('atribui uma despesa integralmente a um proprietário específico (reembolso de IPTU pago por ele)', () => {
        const itens = montarRateio(proprietarios, 10000, [
            { idDespesa: '2', tipo: 'IPTU', descricao: '7/10 IPTU', valor: 2857.8, aplicacao: 'LOCADOR_ESPECIFICO', idLocadorEspecifico: '1' },
        ]);

        expect(itens[0].valorReembolsos).toBe(2857.8);
        expect(itens[1].valorReembolsos).toBe(0);
    });

    it('rejeita despesa específica sem proprietário informado', () => {
        expect(() =>
            montarRateio(proprietarios, 10000, [
                { idDespesa: '3', tipo: 'OUTRA', descricao: 'X', valor: 10, aplicacao: 'LOCADOR_ESPECIFICO' },
            ]),
        ).toThrow('nenhum foi informado');
    });

    it('rejeita despesa/ajuste para proprietário que não é dono do imóvel', () => {
        expect(() =>
            montarRateio(proprietarios, 10000, [
                { idDespesa: '4', tipo: 'OUTRA', descricao: 'X', valor: 10, aplicacao: 'LOCADOR_ESPECIFICO', idLocadorEspecifico: '999' },
            ]),
        ).toThrow('não é dono deste imóvel');

        expect(() =>
            montarRateio(proprietarios, 10000, [], [{ idLocador: '999', tipo: 'DESCONTO', descricao: 'X', valor: 10 }]),
        ).toThrow('não é dono deste imóvel');
    });

    it('desconto reduz a base do IRRF e soma em valorDescontos; acréscimo manual não reduz', () => {
        const itens = montarRateio(proprietarios, 10000, [], [
            { idLocador: '1', tipo: 'DESCONTO', descricao: 'Adiantamento já recebido', valor: 500 },
            { idLocador: '1', tipo: 'ACRESCIMO', descricao: 'Diferença de mês anterior', valor: 100 },
        ]);

        expect(itens[0].valorDescontos).toBe(500);
        expect(itens[0].valorReembolsos).toBe(100);
        expect(itens[0].baseCalculoIrrf).toBe(5500); // 6000 - 500
    });

    it('registra os detalhes de cada item extra aplicado (para auditoria/exibição)', () => {
        const itens = montarRateio(proprietarios, 10000, [
            { idDespesa: '5', tipo: 'IPTU', descricao: 'IPTU', valor: 1000, aplicacao: 'LOCADOR_ESPECIFICO', idLocadorEspecifico: '1' },
        ], [
            { idLocador: '1', tipo: 'DESCONTO', descricao: 'Desconto', valor: 50 },
        ]);

        expect(itens[0].detalhesExtras).toEqual([
            { origem: 'DESPESA', idDespesa: '5', tipo: 'IPTU', descricao: 'IPTU', natureza: 'ACRESCIMO', valor: 1000 },
            { origem: 'AJUSTE_MANUAL', tipo: 'DESCONTO', descricao: 'Desconto', natureza: 'DESCONTO', valor: 50 },
        ]);
        expect(itens[1].detalhesExtras).toEqual([]);
    });

    it('não deixa a base do IRRF ficar negativa quando o desconto é maior que o aluguel', () => {
        const itens = montarRateio(proprietarios, 100, [], [
            { idLocador: '1', tipo: 'DESCONTO', descricao: 'Desconto grande', valor: 999 },
        ]);

        expect(itens[0].baseCalculoIrrf).toBe(0);
    });

    it('arredonda para centavos', () => {
        const tres = [
            { idLocador: '1', percentualParticipacao: 33.33 },
            { idLocador: '2', percentualParticipacao: 33.33 },
            { idLocador: '3', percentualParticipacao: 33.34 },
        ];
        const itens = montarRateio(tres, 100);

        expect(itens.map((i) => i.valorAluguel)).toEqual([33.33, 33.33, 33.34]);
    });
});
