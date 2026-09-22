import ExcelJS from 'exceljs';

//Gera a Memória de Cálculo em Excel a partir de um registro já persistido (o número que aparece na
//planilha é sempre o que foi gravado no banco no momento da geração — este arquivo só desenha).
//Diferente da planilha manual de referência (duas colunas de locadores lado a lado, um layout que só
//"fecha" bem para números pares de proprietários), aqui os blocos ficam empilhados verticalmente: fica
//organizado e legível para QUALQUER quantidade de proprietários, sem depender de ajuste manual de layout.
//
//Este documento é o AVISO DE COBRANÇA que vai para o LOCATÁRIO — não o repasse ao locador. Por isso o
//I.R.P.F. de cada locador aparece só como nota informativa (para quem for calcular o repasse depois),
//e nunca reduz o total que está sendo cobrado/depositado (ver docs/memoria-de-calculo.md).

const MESES = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

const AZUL_ESCURO = 'FF1F2937';
const CINZA_CLARO = 'FFF3F4F6';
const AMARELO = 'FFFFF9C4';
const BRANCO = 'FFFFFFFF';

const FORMATO_MOEDA = '"R$" #,##0.00;[RED]-"R$" #,##0.00';

export interface DadosPlanilhaMemoria {
    id: number;
    competencia: string; // AAAA-MM-DD
    valorAluguelBase: number;
    totalAPagar: number;
    imovelEndereco: string; // ex.: "Rua Buenos Aires, 113, Centro"
    contaBancaria: {
        descricao?: string | null;
        banco?: string | null;
        agencia?: string | null;
        numero?: string | null;
        tipoChavePix?: string | null;
        chavePix?: string | null;
        titular?: string | null;
        documentoTitular?: string | null;
    } | null;
    reajuste: { indice: string; percentual: number; valorAnterior: number } | null;
    itens: Array<{
        nomeLocador: string;
        documentoLocador: string | null;
        percentualParticipacao: number;
        valorAluguel: number;
        valorReembolsos: number;
        valorDescontos: number;
        valorIrrf: number;
        valorAPagar: number;
        detalhesExtras: Array<{ descricao: string; natureza: 'ACRESCIMO' | 'DESCONTO'; valor: number }>;
    }>;
}

function competenciaPorExtenso(competencia: string) {
    const [ano, mes] = competencia.split('-').map(Number);
    return `${MESES[mes - 1]} de ${ano}`;
}

export async function gerarPlanilhaMemoriaCalculo(dados: DadosPlanilhaMemoria): Promise<Buffer> {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'GesImo';
    workbook.created = new Date();

    const sheet = workbook.addWorksheet('Memória de Cálculo', {
        pageSetup: { orientation: 'portrait', fitToPage: true, fitToWidth: 1 },
    });

    sheet.columns = [
        { key: 'a', width: 34 },
        { key: 'b', width: 20 },
        { key: 'c', width: 4 },
        { key: 'd', width: 34 },
    ];

    let linha = 1;

    const escrever = (
        texto: string,
        opcoes: { negrito?: boolean; tamanho?: number; cor?: string; preenchimento?: string; coluna?: number } = {},
    ) => {
        const celula = sheet.getRow(linha).getCell(opcoes.coluna ?? 1);
        celula.value = texto;
        celula.font = { bold: opcoes.negrito ?? false, size: opcoes.tamanho ?? 11, color: { argb: opcoes.cor ?? AZUL_ESCURO } };
        if (opcoes.preenchimento) {
            celula.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: opcoes.preenchimento } };
        }
        linha += 1;
        return celula;
    };

    const linhaEmBranco = () => {
        linha += 1;
    };

    //Cabeçalho
    sheet.mergeCells(linha, 1, linha, 4);
    escrever(`MEMÓRIA DE CÁLCULO — ${dados.imovelEndereco}`.toUpperCase(), { negrito: true, tamanho: 13, cor: BRANCO, preenchimento: AZUL_ESCURO, coluna: 1 });
    sheet.getRow(linha - 1).height = 22;
    escrever(`ALUGUEL DE ${competenciaPorExtenso(dados.competencia)}`.toUpperCase(), { negrito: true });
    linhaEmBranco();

    //Um bloco por proprietário, empilhados — funciona para qualquer quantidade de locadores
    for (const item of dados.itens) {
        escrever(`LOCADOR: ${item.nomeLocador} — PART. ${item.percentualParticipacao.toFixed(2).replace('.', ',')}%.`, { negrito: true });
        if (item.documentoLocador) {
            escrever(`CPF/CNPJ: ${item.documentoLocador}`);
        }

        const linhaTabela = (rotulo: string, valor: number, negrito = false, preenchimento?: string) => {
            const linhaAtual = sheet.getRow(linha);
            linhaAtual.getCell(1).value = rotulo;
            const celulaValor = linhaAtual.getCell(2);
            celulaValor.value = valor;
            celulaValor.numFmt = FORMATO_MOEDA;
            [linhaAtual.getCell(1), celulaValor].forEach((c) => {
                c.font = { bold: negrito };
                c.border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
                if (preenchimento) c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: preenchimento } };
            });
            linha += 1;
        };

        linhaTabela('Aluguel', item.valorAluguel);
        for (const extra of item.detalhesExtras) {
            const sinal = extra.natureza === 'DESCONTO' ? -1 : 1;
            linhaTabela(extra.descricao, sinal * extra.valor);
        }
        //Este documento é a cobrança ao locatário: o total abaixo NÃO desconta o IRRF do locador — essa
        //retenção só ocorre no repasse da imobiliária ao locador, feito à parte. O valor do IRRF aparece
        //só como nota informativa, fora da caixa somada, para orientar quem for calcular o repasse depois.
        linhaTabela('A PAGAR (LOCATÁRIO)', item.valorAPagar, true, CINZA_CLARO);
        if (item.valorIrrf > 0) {
            escrever(`Obs.: no repasse a este locador, reter I.R.P.F. de ${item.valorIrrf.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`, { tamanho: 9, cor: 'FF6B7280' });
        }
        linhaEmBranco();
    }

    //Resumo do imóvel
    sheet.mergeCells(linha, 1, linha, 2);
    escrever('RESUMO', { negrito: true, tamanho: 12 });

    const linhaResumo = (rotulo: string, valor: string) => {
        sheet.getRow(linha).getCell(1).value = rotulo;
        sheet.getRow(linha).getCell(1).font = { bold: true };
        sheet.getRow(linha).getCell(2).value = valor;
        linha += 1;
    };

    linhaResumo('Valor do aluguel:', dados.valorAluguelBase.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

    if (dados.reajuste) {
        linhaResumo('Reajuste (índice):', dados.reajuste.indice);
        linhaResumo('Variação do índice:', `${dados.reajuste.percentual.toFixed(2).replace('.', ',')}%`);
        linhaResumo('Valor anterior:', dados.reajuste.valorAnterior.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    }

    //Informativo: soma do IRRF de todos os locadores, a reter no repasse — NÃO integra o total cobrado
    //abaixo, que é o valor que o locatário deve depositar.
    const totalIrrf = dados.itens.reduce((soma, item) => soma + item.valorIrrf, 0);
    if (totalIrrf > 0) {
        linhaResumo('I.R.P.F. a reter no repasse (informativo):', totalIrrf.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    }
    linhaEmBranco();

    const linhaTotal = sheet.getRow(linha);
    linhaTotal.getCell(1).value = 'TOTAL DO DEPÓSITO A PAGAR (LOCATÁRIO)';
    linhaTotal.getCell(2).value = dados.totalAPagar;
    linhaTotal.getCell(2).numFmt = FORMATO_MOEDA;
    [linhaTotal.getCell(1), linhaTotal.getCell(2)].forEach((c) => {
        c.font = { bold: true, size: 12, color: { argb: BRANCO } };
        c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: AZUL_ESCURO } };
        c.border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
    });
    linha += 1;
    linhaEmBranco();

    //Conta para depósito
    if (dados.contaBancaria) {
        const conta = dados.contaBancaria;
        sheet.mergeCells(linha, 1, linha, 2);
        escrever('CONTA PARA DEPÓSITO', { negrito: true, tamanho: 12, preenchimento: AMARELO });
        if (conta.descricao) escrever(conta.descricao);
        if (conta.banco) escrever(`Banco: ${conta.banco}`);
        if (conta.agencia) escrever(`Agência: ${conta.agencia}`);
        if (conta.numero) escrever(`Conta: ${conta.numero}`);
        if (conta.chavePix) escrever(`Chave PIX${conta.tipoChavePix ? ` (${conta.tipoChavePix})` : ''}: ${conta.chavePix}`);
        if (conta.titular) escrever(`Titular: ${conta.titular}`);
        if (conta.documentoTitular) escrever(`CPF/CNPJ: ${conta.documentoTitular}`);
    }

    sheet.getColumn(2).numFmt = FORMATO_MOEDA;

    const arrayBuffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(arrayBuffer as ArrayBuffer);
}
