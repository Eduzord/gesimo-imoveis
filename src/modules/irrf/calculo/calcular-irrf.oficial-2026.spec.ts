import { calcularIrrf, TabelaIrrfParaCalculo } from './calcular-irrf';

//VALIDAÇÃO CONTRA OS EXEMPLOS OFICIAIS DA RECEITA FEDERAL (não é seed nem dado de produção: são valores de conferência).
//Os números abaixo foram copiados das páginas oficiais, consultadas em 21/09/2026. Se a lei mudar, este arquivo NÃO precisa
//mudar junto com o sistema (o ADMIN cadastra a nova tabela pela tela); ele só prova que o cálculo reproduz a regra de 2026.
//
//  Tabela de incidência mensal (Lei 15.191/2025, vigente desde 05/2025):
//    https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026
//  Redução mensal (Lei 15.270/2025, art. 3º-A da Lei 9.250/1995, vigente desde 01/2026) e exemplos de cálculo:
//    https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/exemplos-de-aplicacao-da-lei-15-270-2025
const tabela2026: TabelaIrrfParaCalculo = {
    id: 2026,
    deducaoDependente: 189.59,
    faixas: [
        { ordem: 1, valorDe: 0, valorAte: 2428.8, aliquota: 0, parcelaADeduzir: 0 },
        { ordem: 2, valorDe: 2428.81, valorAte: 2826.65, aliquota: 7.5, parcelaADeduzir: 182.16 },
        { ordem: 3, valorDe: 2826.66, valorAte: 3751.05, aliquota: 15, parcelaADeduzir: 394.16 },
        { ordem: 4, valorDe: 3751.06, valorAte: 4664.68, aliquota: 22.5, parcelaADeduzir: 675.49 },
        { ordem: 5, valorDe: 4664.69, valorAte: null, aliquota: 27.5, parcelaADeduzir: 908.73 },
    ],
    redutor: { limiteIsencao: 5000, limiteSuperior: 7350, constante: 978.62, coeficiente: 0.133145 },
};

//Nos exemplos oficiais a base de cálculo já vem depois das deduções (previdência / desconto simplificado)
//e o redutor é medido sobre o rendimento tributável bruto.
const exemplo = (rendimentoTributavel: number, baseCalculo: number) =>
    calcularIrrf({ tabela: tabela2026, baseCalculo, rendimentoTributavel });

describe('calcularIrrf - exemplos oficiais da Receita Federal (2026)', () => {
    it('Exemplo 1 (João): 1ª faixa, alíquota 0% -> R$ 0,00', () => {
        expect(exemplo(3036, 2428).valorIrrf).toBe(0);
    });

    it('Exemplo 2 (José): rendimento 4.000, base 3.392,80 -> imposto 114,76 zerado pela redução', () => {
        const r = exemplo(4000, 3392.8);

        expect(r.faixaAplicada.ordem).toBe(3);
        expect(r.redutorAplicado).toEqual({ tipo: 'ISENCAO_TOTAL', valor: 114.76 });
        expect(r.valorIrrf).toBe(0);
    });

    it('Exemplo 3 (Maria): rendimento 5.000 (limite), base 4.392,80 -> imposto 312,89 zerado', () => {
        const r = exemplo(5000, 4392.8);

        expect(r.redutorAplicado).toEqual({ tipo: 'ISENCAO_TOTAL', valor: 312.89 });
        expect(r.valorIrrf).toBe(0);
    });

    it('Exemplo 4 (Rita): rendimento 6.000, base 5.350,40 -> 562,63 - 179,75 = R$ 382,88', () => {
        const r = exemplo(6000, 5350.4);

        expect(r.faixaAplicada.ordem).toBe(5);
        expect(r.redutorAplicado).toEqual({ tipo: 'REDUCAO_PARCIAL', valor: 179.75 }); //978,62 - 0,133145 x 6000
        expect(r.valorIrrf).toBe(382.88);
    });

    it('Exemplo 5 (Vera): rendimento 7.607,20 acima de 7.350 -> sem redução, R$ 1.016,27', () => {
        const r = exemplo(7607.2, 7000);

        expect(r.redutorAplicado).toBeNull();
        expect(r.valorIrrf).toBe(1016.27);
    });

    it('mesma conta do exemplo 4, mas medindo o redutor pela base (erro que o sistema NÃO pode cometer)', () => {
        //Se o redutor usasse a base 5.350,40: 978,62 - 0,133145 x 5.350,40 = 266,24 -> imposto 296,39 (diferente de 382,88)
        expect(exemplo(6000, 5350.4).valorIrrf).not.toBe(296.39);
    });

    it('base abaixo de 5.000 mas rendimento acima de 5.000 NÃO é isento (o limite é do rendimento bruto)', () => {
        //rendimento 5.500 com base 4.892,80: o limite de isenção (5.000) é do rendimento, então cai na redução gradual
        const r = exemplo(5500, 4892.8);

        expect(r.redutorAplicado?.tipo).toBe('REDUCAO_PARCIAL');
        //imposto: 4892,80 x 27,5% - 908,73 = 436,79; redução: 978,62 - 0,133145 x 5500 = 246,3225 (246,32); final 190,47
        expect(r.redutorAplicado?.valor).toBe(246.32);
        expect(r.valorIrrf).toBe(190.47);
    });

    it('limites da faixa de redução: 7.350,00 ainda tem redução (quase zero) e 7.350,01 não tem', () => {
        expect(exemplo(7350, 6742.8).redutorAplicado?.tipo).toBe('REDUCAO_PARCIAL');
        expect(exemplo(7350.01, 6742.81).redutorAplicado).toBeNull();
        expect(exemplo(5000.01, 4392.81).redutorAplicado?.tipo).toBe('REDUCAO_PARCIAL');
    });

    it('a redução decresce continuamente e some no limite superior', () => {
        const reducaoEm = (rendimento: number) => exemplo(rendimento, rendimento - 607.2).redutorAplicado?.valor ?? 0;

        expect(reducaoEm(5000.01)).toBeCloseTo(312.89, 1); //quase o valor cheio da faixa isenta
        expect(reducaoEm(6000)).toBe(179.75);
        expect(reducaoEm(7350)).toBeLessThan(0.01);
    });
});
