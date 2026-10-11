import PDFDocument from 'pdfkit';
import { readFileSync } from 'fs';
import { join } from 'path';

//Layout desenhado a partir de engenharia reversa do "Comprovante Anual de Rendimentos de Aluguéis"
//(modelo oficial fornecido pelo usuário — Ministério da Fazenda / Receita Federal): mesmas 5 seções,
//mesma ordem de campos. A logomarca da Estilo Imóveis é a MESMA imagem usada na Memória de Cálculo —
//nenhuma cópia: aponta para o asset do módulo memoria-calculo (ver "CAMINHO_LOGO" abaixo).
const CAMINHO_LOGO = join(__dirname, '..', '..', 'memoria-calculo', 'assets', 'logo-estilo-imoveis.jpg');

const NOMES_MESES_ABREV = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const CINZA_CLARO = '#F3F4F6';
const CINZA_BORDA = '#9CA3AF';
const AZUL_ESCURO = '#1F2937';

export interface DadosPdfInforme {
    ano: number;
    locador: { nome: string; documento?: string | null };
    locatario: { nome: string; documento?: string | null } | null;
    administradora: { nome?: string | null; documento?: string | null } | null;
    imovel: {
        endereco: string; // já formatado, ex.: "Rua Buenos Aires, 113"
        bairro?: string | null;
        uf?: string | null;
        municipio?: string | null;
        cep?: string | null;
        tipo: 'Urbano' | 'Rural';
    };
    contrato: { numero: string; dataInicio: string } | null; // dataInicio "AAAA-MM-DD"
    linhas: Array<{ mes: number; rendimentoBruto: number; valorComissao: number; impostoRetido: number }>;
    totais: { rendimentoBruto: number; valorComissao: number; impostoRetido: number };
}

const moeda = (valor: number) => valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const dataBr = (iso: string) => iso.split('-').reverse().join('/');

export async function gerarPdfInformeRendimentos(dados: DadosPdfInforme): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument({ size: 'A4', margin: 40 });
        const pedacos: Buffer[] = [];
        doc.on('data', (pedaco) => pedacos.push(pedaco));
        doc.on('end', () => resolve(Buffer.concat(pedacos)));
        doc.on('error', reject);

        const larguraUtil = doc.page.width - doc.page.margins.left - doc.page.margins.right;
        const x0 = doc.page.margins.left;

        desenharCabecalho(doc, dados.ano, x0, larguraUtil);
        let y = 150;

        y = desenharCaixaDuasColunas(doc, x0, y, larguraUtil, {
            titulo: '1 - Beneficiário do Rendimento (Locador)',
            rotuloEsquerda: 'Nome / Nome Empresarial',
            valorEsquerda: dados.locador.nome,
            rotuloDireita: 'CPF / CNPJ',
            valorDireita: dados.locador.documento || '—',
        });

        y = desenharCaixaDuasColunas(doc, x0, y + 10, larguraUtil, {
            titulo: '2 - Fonte Pagadora (Locatário)',
            rotuloEsquerda: 'Nome / Nome Empresarial',
            valorEsquerda: dados.locatario?.nome || 'Não identificado',
            rotuloDireita: 'CPF / CNPJ',
            valorDireita: dados.locatario?.documento || '—',
        });

        y = desenharTabelaRendimentos(doc, x0, y + 14, larguraUtil, dados.linhas, dados.totais);

        y = desenharInformacoesComplementares(doc, x0, y + 14, larguraUtil, dados);

        desenharResponsavel(doc, x0, y + 14, larguraUtil);

        doc.end();
    });
}

function desenharCabecalho(doc: PDFKit.PDFDocument, ano: number, x0: number, largura: number) {
    try {
        doc.image(readFileSync(CAMINHO_LOGO), x0, 30, { width: 85 });
    } catch {
        //Sem a logo, o documento ainda é gerado normalmente — nunca trava a geração por isso.
    }

    const xTextoEsquerda = x0 + 100;
    doc.font('Helvetica-Bold').fontSize(11).fillColor(AZUL_ESCURO)
        .text('MINISTÉRIO DA FAZENDA', xTextoEsquerda, 36);
    doc.font('Helvetica').fontSize(9).fillColor('#374151')
        .text('Secretaria da Receita Federal do Brasil', xTextoEsquerda, 52);

    const larguraDireita = 200;
    const xDireita = x0 + largura - larguraDireita;
    doc.font('Helvetica-Bold').fontSize(10).fillColor(AZUL_ESCURO)
        .text('COMPROVANTE ANUAL DE', xDireita, 34, { width: larguraDireita, align: 'right' })
        .text('RENDIMENTOS DE ALUGUÉIS', xDireita, 48, { width: larguraDireita, align: 'right' });
    doc.font('Helvetica').fontSize(9)
        .text(`Ano-calendário: ${ano}`, xDireita, 64, { width: larguraDireita, align: 'right' });

    doc.moveTo(x0, 118).lineTo(x0 + largura, 118).strokeColor(CINZA_BORDA).lineWidth(1).stroke();
}

//Caixa com um título em barra cinza e duas colunas de rótulo+valor (usada nas seções 1 e 2, que no
//modelo oficial têm a mesma cara: "Beneficiário" e "Fonte Pagadora").
function desenharCaixaDuasColunas(
    doc: PDFKit.PDFDocument,
    x0: number,
    y: number,
    largura: number,
    opcoes: { titulo: string; rotuloEsquerda: string; valorEsquerda: string; rotuloDireita: string; valorDireita: string },
): number {
    doc.font('Helvetica-Bold').fontSize(9).fillColor(AZUL_ESCURO).text(opcoes.titulo, x0, y);
    const yCaixa = y + 14;
    const alturaCaixa = 36;
    const larguraDireita = 160;
    const larguraEsquerda = largura - larguraDireita;

    doc.rect(x0, yCaixa, largura, alturaCaixa).strokeColor(CINZA_BORDA).lineWidth(0.75).stroke();
    doc.moveTo(x0 + larguraEsquerda, yCaixa).lineTo(x0 + larguraEsquerda, yCaixa + alturaCaixa).stroke();

    escreverRotuloValor(doc, x0 + 6, yCaixa + 5, larguraEsquerda - 12, opcoes.rotuloEsquerda, opcoes.valorEsquerda);
    escreverRotuloValor(doc, x0 + larguraEsquerda + 6, yCaixa + 5, larguraDireita - 12, opcoes.rotuloDireita, opcoes.valorDireita);

    return yCaixa + alturaCaixa;
}

function escreverRotuloValor(doc: PDFKit.PDFDocument, x: number, y: number, largura: number, rotulo: string, valor: string) {
    doc.font('Helvetica').fontSize(7).fillColor('#6B7280').text(rotulo, x, y, { width: largura });
    doc.font('Helvetica-Bold').fontSize(10).fillColor(AZUL_ESCURO).text(valor, x, y + 11, { width: largura });
}

function desenharTabelaRendimentos(
    doc: PDFKit.PDFDocument,
    x0: number,
    y: number,
    largura: number,
    linhas: DadosPdfInforme['linhas'],
    totais: DadosPdfInforme['totais'],
): number {
    doc.font('Helvetica-Bold').fontSize(9).fillColor(AZUL_ESCURO).text('3 - Rendimentos (em Reais)', x0, y);
    let yAtual = y + 14;

    const larguraMes = 55;
    const larguraValor = (largura - larguraMes) / 3;
    const colunas = [
        { titulo: 'Mês', largura: larguraMes },
        { titulo: 'Rendimento Bruto', largura: larguraValor },
        { titulo: 'Valor Comissão', largura: larguraValor },
        { titulo: 'Imposto Retido', largura: larguraValor },
    ];
    const alturaLinha = 16;

    const desenharLinha = (valores: string[], opcoes: { negrito?: boolean; preenchimento?: string } = {}) => {
        let x = x0;
        if (opcoes.preenchimento) {
            doc.rect(x0, yAtual, largura, alturaLinha).fillColor(opcoes.preenchimento).fill();
        }
        doc.font(opcoes.negrito ? 'Helvetica-Bold' : 'Helvetica').fontSize(8).fillColor(AZUL_ESCURO);
        colunas.forEach((coluna, indice) => {
            doc.rect(x, yAtual, coluna.largura, alturaLinha).strokeColor(CINZA_BORDA).lineWidth(0.5).stroke();
            doc.text(valores[indice], x + 4, yAtual + 4, { width: coluna.largura - 8, align: indice === 0 ? 'left' : 'right' });
            x += coluna.largura;
        });
        yAtual += alturaLinha;
    };

    desenharLinha(colunas.map((c) => c.titulo), { negrito: true, preenchimento: CINZA_CLARO });
    for (const linha of linhas) {
        desenharLinha([NOMES_MESES_ABREV[linha.mes - 1], moeda(linha.rendimentoBruto), moeda(linha.valorComissao), moeda(linha.impostoRetido)]);
    }
    desenharLinha(['Total', moeda(totais.rendimentoBruto), moeda(totais.valorComissao), moeda(totais.impostoRetido)], {
        negrito: true,
        preenchimento: CINZA_CLARO,
    });

    return yAtual;
}

function desenharInformacoesComplementares(doc: PDFKit.PDFDocument, x0: number, y: number, largura: number, dados: DadosPdfInforme): number {
    doc.font('Helvetica-Bold').fontSize(9).fillColor(AZUL_ESCURO).text('4 - Informações Complementares', x0, y);
    let yAtual = y + 16;

    const linha = (texto: string, opcoes: { negrito?: boolean; tamanho?: number } = {}) => {
        doc.font(opcoes.negrito ? 'Helvetica-Bold' : 'Helvetica').fontSize(opcoes.tamanho ?? 9).fillColor(AZUL_ESCURO)
            .text(texto, x0, yAtual, { width: largura });
        yAtual += (opcoes.tamanho ?? 9) + 7;
    };

    if (dados.administradora?.documento) linha(`CNPJ da Administradora do Imóvel (Imobiliária): ${dados.administradora.documento}`);
    if (dados.administradora?.nome) linha(`Nome: ${dados.administradora.nome}`);
    yAtual += 4;

    linha('Dados do Imóvel', { negrito: true });
    const colunaContrato = x0 + 260;
    const colunaTipo = x0 + 420;
    doc.font('Helvetica').fontSize(9).fillColor(AZUL_ESCURO)
        .text(`Número do Contrato: ${dados.contrato?.numero ?? '—'}`, x0, yAtual)
        .text(`Data do Contrato: ${dados.contrato ? dataBr(dados.contrato.dataInicio) : '—'}`, colunaContrato, yAtual)
        .text(`Tipo do Imóvel: ${dados.imovel.tipo}`, colunaTipo, yAtual);
    yAtual += 16;

    linha(`Endereço do Imóvel: ${dados.imovel.endereco}${dados.imovel.bairro ? ` — ${dados.imovel.bairro}` : ''}`);
    doc.font('Helvetica').fontSize(9).fillColor(AZUL_ESCURO)
        .text(`UF: ${dados.imovel.uf || '—'}`, x0, yAtual)
        .text(`Município: ${dados.imovel.municipio || '—'}`, x0 + 120, yAtual)
        .text(`CEP: ${dados.imovel.cep || '—'}`, colunaTipo, yAtual);
    yAtual += 20;

    doc.font('Helvetica-Oblique').fontSize(7.5).fillColor('#6B7280').text(
        'Atenção: para a inclusão na Declaração do Imposto de Renda da Pessoa Física (DIRPF) dos rendimentos informados neste ' +
        'documento, certifique-se de que os mesmos não constam de outro comprovante emitido pela fonte pagadora.',
        x0, yAtual, { width: largura },
    );
    yAtual += 24;

    return yAtual;
}

function desenharResponsavel(doc: PDFKit.PDFDocument, x0: number, y: number, largura: number) {
    doc.font('Helvetica-Bold').fontSize(9).fillColor(AZUL_ESCURO).text('5 - Responsável pelas Informações', x0, y);
    const yCaixa = y + 14;
    const alturaCaixa = 40;
    const larguraColuna = largura / 3;

    doc.rect(x0, yCaixa, largura, alturaCaixa).strokeColor(CINZA_BORDA).lineWidth(0.75).stroke();
    [1, 2].forEach((indice) => {
        const x = x0 + larguraColuna * indice;
        doc.moveTo(x, yCaixa).lineTo(x, yCaixa + alturaCaixa).stroke();
    });

    ['Nome', 'Data', 'Assinatura'].forEach((rotulo, indice) => {
        doc.font('Helvetica').fontSize(7).fillColor('#6B7280')
            .text(rotulo, x0 + larguraColuna * indice + 6, yCaixa + alturaCaixa - 14, { width: larguraColuna - 12, align: 'center' });
    });
}
