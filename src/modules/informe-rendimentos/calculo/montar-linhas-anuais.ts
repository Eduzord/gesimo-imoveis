// Função PURA: monta as 12 linhas mensais (Jan-Dez) do Informe de Rendimentos a partir dos itens de
// memória de cálculo já filtrados para um locador e um ano. Sem Prisma, sem I/O — só agregação,
// testável isolada (mesmo padrão de montar-rateio.ts e dividir-parcelas.ts).

export interface ItemMemoriaParaInforme {
    idContrato: string;
    competencia: string; // "AAAA-MM-DD"
    valorAluguel: number; // parte do locador no aluguel bruto do mês (rateio pelo % de posse)
    baseCalculoIrrf: number; // = rendimento tributável do mês (aluguel − descontos; sem reembolsos)
    valorIrrf: number;
}

export interface LinhaMensalInforme {
    mes: number; // 1-12
    rendimentoBruto: number;
    valorComissao: number;
    impostoRetido: number;
}

export interface InformeAnualAgregado {
    linhas: LinhaMensalInforme[]; // sempre 12, uma por mês (zeradas quando não há memória naquele mês)
    totais: { rendimentoBruto: number; valorComissao: number; impostoRetido: number };
    idContratoMaisRecente: string | null; // para resolver os dados de "Número do Contrato" no cabeçalho
}

const arredondar = (valor: number) => Math.round(valor * 100) / 100;

/**
 * "itensDoAno": um item por mês em que esse locador teve uma memória de cálculo gerada, já filtrado
 * para o ano pedido (pode ter menos de 12, se algum mês não teve memória gerada — vira linha zerada).
 * "comissaoPorContrato": a comissão (decimal, ex.: 0.05) de cada contrato envolvido, pela mesma razão
 * de "Valor Comissão" poder variar ao longo do ano caso o imóvel tenha trocado de contrato.
 *
 * Nota: se dois contratos diferentes gerarem memória para o MESMO mês (troca de contrato no meio do
 * mês), só o primeiro item encontrado naquele mês é usado — caso raro, não resolvido neste cálculo.
 */
export function montarLinhasAnuais(
    itensDoAno: ItemMemoriaParaInforme[],
    comissaoPorContrato: Map<string, number>,
): InformeAnualAgregado {
    const porMes = new Map<number, ItemMemoriaParaInforme>();
    let idContratoMaisRecente: string | null = null;
    let competenciaMaisRecente = '';

    for (const item of itensDoAno) {
        const mes = Number(item.competencia.slice(5, 7));
        if (!porMes.has(mes)) porMes.set(mes, item);

        if (item.competencia > competenciaMaisRecente) {
            competenciaMaisRecente = item.competencia;
            idContratoMaisRecente = item.idContrato;
        }
    }

    const linhas: LinhaMensalInforme[] = Array.from({ length: 12 }, (_, indice) => {
        const mes = indice + 1;
        const item = porMes.get(mes);

        if (!item) {
            return { mes, rendimentoBruto: 0, valorComissao: 0, impostoRetido: 0 };
        }

        const comissaoPercentual = comissaoPorContrato.get(item.idContrato) ?? 0;

        return {
            mes,
            rendimentoBruto: arredondar(item.baseCalculoIrrf),
            valorComissao: arredondar(item.valorAluguel * comissaoPercentual),
            impostoRetido: arredondar(item.valorIrrf),
        };
    });

    const totais = linhas.reduce(
        (soma, linha) => ({
            rendimentoBruto: soma.rendimentoBruto + linha.rendimentoBruto,
            valorComissao: soma.valorComissao + linha.valorComissao,
            impostoRetido: soma.impostoRetido + linha.impostoRetido,
        }),
        { rendimentoBruto: 0, valorComissao: 0, impostoRetido: 0 },
    );

    return {
        linhas,
        totais: {
            rendimentoBruto: arredondar(totais.rendimentoBruto),
            valorComissao: arredondar(totais.valorComissao),
            impostoRetido: arredondar(totais.impostoRetido),
        },
        idContratoMaisRecente,
    };
}
