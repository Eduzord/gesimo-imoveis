// Função PURA: um mês só entra no Informe de Rendimentos se o aluguel daquele mês/contrato tiver sido
// efetivamente RECEBIDO — gerar uma Memória de Cálculo é só a cobrança enviada ao locatário, não prova
// de pagamento. A confirmação usada é uma despesa tipo ALUGUEL, do mesmo contrato e mês, com status
// PAGA (decisão do usuário, 12/10/2026: o comprovante anexado NÃO é exigido para essa confirmação —
// só a baixa do status já é suficiente).

export interface DespesaAluguelPaga {
    idContratoLocacao: string;
    anoMes: string; // "AAAA-MM", derivado da dataVencimento da despesa
}

export interface ItemComContratoECompetencia {
    idContrato: string;
    competencia: string; // "AAAA-MM-DD"
}

export function filtrarItensComAluguelConfirmado<T extends ItemComContratoECompetencia>(
    itens: T[],
    despesasAluguelPagas: DespesaAluguelPaga[],
): T[] {
    const confirmados = new Set(despesasAluguelPagas.map((d) => `${d.idContratoLocacao}|${d.anoMes}`));

    return itens.filter((item) => confirmados.has(`${item.idContrato}|${item.competencia.slice(0, 7)}`));
}
