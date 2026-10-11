// Função PURA: dado o valor total de um lançamento (ex.: o IPTU do ano) e a quantidade de parcelas,
// devolve o valor e o vencimento de cada uma. Sem Prisma, sem I/O — só matemática, testável isolada.

export interface ParcelaCalculada {
    numero: number; // 1-based, para exibição ("Parcela 1/10", "Parcela 2/10"...)
    valor: number;
    dataVencimento: Date;
}

/**
 * Divide um valor total em parcelas mensais de valor igual, com o vencimento de cada uma um mês
 * após a anterior, a partir de "dataPrimeiraParcela".
 *
 * Duas decisões deliberadas, importantes para o registro contábil:
 * 1. A divisão é feita em CENTAVOS (não em reais fracionados) para nunca sofrer erro de arredondamento
 *    de ponto flutuante do JavaScript (ex.: 0.1 + 0.2 !== 0.3).
 *    A sobra da divisão inteira é somada à ÚLTIMA parcela — prática contábil usual — garantindo que a
 *    soma de todas as parcelas bata exatamente com o valor total lançado, sem sobrar nem faltar 1 centavo.
 * 2. O vencimento soma meses de calendário (não "30 dias fixos"), e quando o dia não existe no mês de
 *    destino (ex.: dia 31 chegando em fevereiro) ele é ajustado para o último dia daquele mês, em vez de
 *    "vazar" para o mês seguinte.
 */
export function dividirEmParcelas(
    valorTotal: number,
    numeroParcelas: number,
    dataPrimeiraParcela: Date,
): ParcelaCalculada[] {
    const totalEmCentavos = Math.round(valorTotal * 100);
    const valorBaseEmCentavos = Math.floor(totalEmCentavos / numeroParcelas);
    const sobraEmCentavos = totalEmCentavos - valorBaseEmCentavos * numeroParcelas;

    return Array.from({ length: numeroParcelas }, (_, indice) => {
        const numero = indice + 1;
        const ehUltimaParcela = numero === numeroParcelas;
        const valorEmCentavos = ehUltimaParcela ? valorBaseEmCentavos + sobraEmCentavos : valorBaseEmCentavos;

        return {
            numero,
            valor: valorEmCentavos / 100,
            dataVencimento: somarMeses(dataPrimeiraParcela, indice),
        };
    });
}

function somarMeses(data: Date, quantidadeDeMeses: number): Date {
    const ano = data.getUTCFullYear();
    const diaOriginal = data.getUTCDate();
    const mesDestino = data.getUTCMonth() + quantidadeDeMeses;

    // Dia 0 do mês seguinte ao destino = último dia do mês de destino (truque padrão com Date.UTC)
    const ultimoDiaDoMesDestino = new Date(Date.UTC(ano, mesDestino + 1, 0)).getUTCDate();
    const diaAjustado = Math.min(diaOriginal, ultimoDiaDoMesDestino);

    return new Date(Date.UTC(ano, mesDestino, diaAjustado));
}
