//Regras PURAS de montagem e validação de uma versão da tabela IRRF, compartilhadas por criar e atualizar.
//O usuário informa só o limite superior ("Até") de cada faixa; a ordem e o limite inferior ("De")
//são derivados aqui, como na tabela oficial (de = até da faixa anterior + 0,01). Assim é impossível
//gravar faixas com lacuna ou sobreposição.

export interface FaixaEntrada {
    valorAte?: number | null;
    aliquota: number;
    parcelaADeduzir: number;
}

export interface RedutorEntrada {
    limiteIsencao: number;
    limiteSuperior: number;
    constante: number;
    coeficiente: number;
}

export interface TabelaEntrada {
    deducaoDependente: number;
    faixas: FaixaEntrada[];
    redutor?: RedutorEntrada | null;
}

export interface FaixaMontada {
    ordem: number;
    valorDe: number;
    valorAte: number | null;
    aliquota: number;
    parcelaADeduzir: number;
}

//Trabalha em centavos inteiros para não acumular erro de ponto flutuante (0.1 + 0.01 etc.)
const emCentavos = (valor: number) => Math.round(valor * 100);
const emReais = (centavos: number) => centavos / 100;

export function montarFaixas(faixas: FaixaEntrada[]): FaixaMontada[] {
    let limiteAnteriorEmCentavos = -1; //-1 faz a primeira faixa começar em 0,00

    return faixas.map((faixa, indice) => {
        const valorDe = emReais(limiteAnteriorEmCentavos + 1);
        const valorAte = faixa.valorAte === null || faixa.valorAte === undefined ? null : faixa.valorAte;

        if (valorAte !== null) limiteAnteriorEmCentavos = emCentavos(valorAte);

        return {
            ordem: indice + 1,
            valorDe,
            valorAte,
            aliquota: faixa.aliquota,
            parcelaADeduzir: faixa.parcelaADeduzir,
        };
    });
}

//Devolve a lista de problemas (vazia = tabela válida). As mensagens são exibidas ao ADMIN.
export function validarTabela(tabela: TabelaEntrada): string[] {
    const erros: string[] = [];
    const { faixas, redutor } = tabela;

    if (faixas.length === 0) {
        erros.push('Informe ao menos uma faixa.');
        return erros;
    }

    let limiteAnterior = -1;
    faixas.forEach((faixa, indice) => {
        const numero = indice + 1;
        const ehUltima = indice === faixas.length - 1;
        const semTeto = faixa.valorAte === null || faixa.valorAte === undefined;

        if (ehUltima && !semTeto) {
            erros.push('A última faixa não pode ter limite "Até": ela vale para qualquer valor acima da faixa anterior.');
        }
        if (!ehUltima && semTeto) {
            erros.push(`A faixa ${numero} precisa de um limite "Até"; só a última faixa fica sem limite.`);
        }
        if (!semTeto && faixa.valorAte! <= 0) {
            erros.push(`O limite "Até" da faixa ${numero} deve ser maior que zero.`);
        }
        if (!semTeto && limiteAnterior >= 0 && emCentavos(faixa.valorAte!) <= limiteAnterior) {
            erros.push(`O limite "Até" da faixa ${numero} deve ser maior que o da faixa anterior.`);
        }
        if (faixa.aliquota < 0 || faixa.aliquota > 100) {
            erros.push(`A alíquota da faixa ${numero} deve estar entre 0% e 100%.`);
        }
        if (faixa.parcelaADeduzir < 0) {
            erros.push(`A parcela a deduzir da faixa ${numero} não pode ser negativa.`);
        }

        if (!semTeto) limiteAnterior = emCentavos(faixa.valorAte!);
    });

    if (tabela.deducaoDependente < 0) {
        erros.push('A dedução por dependente não pode ser negativa.');
    }

    if (redutor) {
        if (redutor.limiteIsencao < 0 || redutor.limiteSuperior <= redutor.limiteIsencao) {
            erros.push('No redutor, o limite superior deve ser maior que o limite de isenção total.');
        }
        if (redutor.constante < 0 || redutor.coeficiente < 0) {
            erros.push('A constante e o coeficiente do redutor não podem ser negativos.');
        }
    }

    return erros;
}
