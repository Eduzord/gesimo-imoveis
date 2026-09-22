//Função PURA: dado o aluguel total do imóvel e a lista de proprietários (com seus percentuais), monta o
//rateio de cada um, soma as despesas extras e os ajustes manuais que se aplicam a cada um, e devolve a
//base sobre a qual o IRRF de cada proprietário deve ser calculado. Não faz nenhuma chamada de rede nem
//grava nada — quem chama decide o que fazer com o resultado (inclusive chamar o IRRF depois).

export interface ProprietarioRateio {
    idLocador: string; //BigInt vem como string do restante do sistema
    percentualParticipacao: number;
}

export type AplicacaoExtra = 'RATEIO' | 'LOCADOR_ESPECIFICO';

export interface DespesaExtraParaRateio {
    idDespesa: string;
    tipo: string;
    descricao: string;
    valor: number;
    aplicacao: AplicacaoExtra;
    idLocadorEspecifico?: string; //obrigatório quando aplicacao = LOCADOR_ESPECIFICO
}

export interface AjusteManualParaRateio {
    idLocador: string;
    tipo: 'ACRESCIMO' | 'DESCONTO';
    descricao: string;
    valor: number;
}

export interface DetalheExtraItem {
    origem: 'DESPESA' | 'AJUSTE_MANUAL';
    idDespesa?: string;
    tipo: string;
    descricao: string;
    natureza: 'ACRESCIMO' | 'DESCONTO';
    valor: number;
}

export interface ItemRateio {
    idLocador: string;
    percentualParticipacao: number;
    valorAluguel: number;
    valorReembolsos: number;
    valorDescontos: number;
    //Base sobre a qual o chamador deve calcular o IRRF (aluguel menos descontos; reembolsos não são renda)
    baseCalculoIrrf: number;
    detalhesExtras: DetalheExtraItem[];
}

const arredondar = (valor: number) => Math.round(valor * 100) / 100;

export function montarRateio(
    proprietarios: ProprietarioRateio[],
    valorAluguelBase: number,
    despesasExtras: DespesaExtraParaRateio[] = [],
    ajustesManuais: AjusteManualParaRateio[] = [],
): ItemRateio[] {
    const idsValidos = new Set(proprietarios.map((p) => p.idLocador));

    for (const despesa of despesasExtras) {
        if (despesa.aplicacao === 'LOCADOR_ESPECIFICO') {
            if (!despesa.idLocadorEspecifico) {
                throw new Error(`A despesa "${despesa.descricao}" está marcada para um proprietário específico, mas nenhum foi informado.`);
            }
            if (!idsValidos.has(despesa.idLocadorEspecifico)) {
                throw new Error(`O proprietário informado para a despesa "${despesa.descricao}" não é dono deste imóvel.`);
            }
        }
    }
    for (const ajuste of ajustesManuais) {
        if (!idsValidos.has(ajuste.idLocador)) {
            throw new Error(`O proprietário informado para o ajuste "${ajuste.descricao}" não é dono deste imóvel.`);
        }
    }

    return proprietarios.map((proprietario) => {
        const fracao = proprietario.percentualParticipacao / 100;
        const valorAluguel = arredondar(valorAluguelBase * fracao);
        const detalhesExtras: DetalheExtraItem[] = [];
        let valorReembolsos = 0;
        let valorDescontos = 0;

        for (const despesa of despesasExtras) {
            let valorAplicado = 0;

            if (despesa.aplicacao === 'RATEIO') {
                valorAplicado = arredondar(despesa.valor * fracao);
            } else if (despesa.idLocadorEspecifico === proprietario.idLocador) {
                valorAplicado = arredondar(despesa.valor);
            }

            if (valorAplicado > 0) {
                valorReembolsos += valorAplicado;
                detalhesExtras.push({
                    origem: 'DESPESA',
                    idDespesa: despesa.idDespesa,
                    tipo: despesa.tipo,
                    descricao: despesa.descricao,
                    natureza: 'ACRESCIMO',
                    valor: valorAplicado,
                });
            }
        }

        for (const ajuste of ajustesManuais.filter((a) => a.idLocador === proprietario.idLocador)) {
            const valor = arredondar(ajuste.valor);
            if (ajuste.tipo === 'ACRESCIMO') {
                valorReembolsos += valor;
            } else {
                valorDescontos += valor;
            }
            detalhesExtras.push({
                origem: 'AJUSTE_MANUAL',
                tipo: ajuste.tipo,
                descricao: ajuste.descricao,
                natureza: ajuste.tipo,
                valor,
            });
        }

        valorReembolsos = arredondar(valorReembolsos);
        valorDescontos = arredondar(valorDescontos);

        return {
            idLocador: proprietario.idLocador,
            percentualParticipacao: proprietario.percentualParticipacao,
            valorAluguel,
            valorReembolsos,
            valorDescontos,
            baseCalculoIrrf: Math.max(0, arredondar(valorAluguel - valorDescontos)),
            detalhesExtras,
        };
    });
}
