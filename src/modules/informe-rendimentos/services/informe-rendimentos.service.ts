import { Injectable, NotFoundException } from '@nestjs/common';
import { ImoveisService } from '../../imoveis/services/imoveis.service';
import { ContratosService } from '../../contratos/services/contratos.service';
import { MemoriaCalculoService } from '../../memoria-calculo/services/memoria-calculo.service';
import { montarLinhasAnuais, ItemMemoriaParaInforme } from '../calculo/montar-linhas-anuais';
import { gerarPdfInformeRendimentos, DadosPdfInforme } from '../pdf/gerar-pdf';

export interface PessoaExibicao {
    nome: string;
    documento?: string | null;
}

//Dados de exibição que o front já resolve (nome/documento de locador, locatário e administradora vêm
//de outros microsserviços — api-locador e api-microservico-locatario — e este serviço não os chama
//diretamente, mesma decisão já tomada na Memória de Cálculo: o front resolve, o backend só confia
//nesses campos para exibição/impressão, nunca para decidir valores).
export interface DadosExibicaoInforme {
    locador: PessoaExibicao;
    locatario?: PessoaExibicao | null;
    administradora?: PessoaExibicao | null;
}

@Injectable()
export class InformeRendimentosService {
    constructor(
        private readonly imoveisService: ImoveisService,
        private readonly contratosService: ContratosService,
        private readonly memoriaCalculoService: MemoriaCalculoService,
    ) {}

    //Monta o informe anual (todos os meses, mesmo os sem memória gerada) de UM locador, em UM imóvel,
    //para UM ano-calendário — a partir das Memórias de Cálculo já persistidas desse imóvel. Não soma
    //dados "inventados": um mês sem memória gerada aparece com os valores zerados.
    async montarInforme(idImovel: number, idLocador: number, ano: number) {
        const imovel = await this.imoveisService.buscarPorId(idImovel);
        const memorias = await this.memoriaCalculoService.listarPorImovel(idImovel);

        const idLocadorStr = String(idLocador);
        const itensDoAno: ItemMemoriaParaInforme[] = [];

        for (const memoria of memorias) {
            if (!memoria.competencia.startsWith(`${ano}-`)) continue;

            const item = memoria.itens.find((i: any) => i.idLocador === idLocadorStr);
            if (!item) continue; //este locador não participou desta memória específica

            itensDoAno.push({
                idContrato: memoria.idContrato,
                competencia: memoria.competencia,
                valorAluguel: item.valorAluguel,
                baseCalculoIrrf: item.baseCalculoIrrf,
                valorIrrf: item.valorIrrf,
            });
        }

        if (itensDoAno.length === 0) {
            throw new NotFoundException(
                `Nenhuma Memória de Cálculo foi gerada para este locador neste imóvel em ${ano}. Gere as memórias dos meses em que houve aluguel antes de emitir o informe.`,
            );
        }

        //Comissão de cada contrato envolvido no ano (normalmente só um; mais de um só se o imóvel
        //trocou de contrato no meio do ano) — cada mês usa a comissão do SEU próprio contrato.
        const idsContratos = [...new Set(itensDoAno.map((i) => i.idContrato))];
        const contratos = await Promise.all(idsContratos.map((id) => this.contratosService.buscarPorId(Number(id))));
        const comissaoPorContrato = new Map(contratos.map((c: any) => [c.id, Number(c.comissao)]));
        const contratoPorId = new Map(contratos.map((c: any) => [c.id, c]));

        const { linhas, totais, idContratoMaisRecente } = montarLinhasAnuais(itensDoAno, comissaoPorContrato);
        const contratoRepresentativo = idContratoMaisRecente ? contratoPorId.get(idContratoMaisRecente) : null;

        return {
            ano,
            idImovel,
            idLocador,
            imovel: {
                endereco: imovel.endereco ? `${imovel.endereco.rua}, ${imovel.endereco.numero ?? 'S/N'}` : `Imóvel ${idImovel}`,
                bairro: imovel.endereco?.bairro ?? null,
                uf: imovel.endereco?.estado ?? null,
                municipio: imovel.endereco?.cidade ?? null,
                cep: imovel.endereco?.cep ?? null,
                //A Receita classifica o imóvel como Urbano ou Rural; nosso cadastro usa uma classificação
                //mais detalhada (RESIDENCIAL/COMERCIAL/RURAL/INDUSTRIAL) — só RURAL mapeia para "Rural",
                //as demais (todas urbanas por natureza) mapeiam para "Urbano".
                tipo: imovel.classificacao === 'RURAL' ? 'Rural' : 'Urbano',
            },
            contrato: contratoRepresentativo
                ? {
                      id: contratoRepresentativo.id,
                      numero: contratoRepresentativo.id,
                      //dataInicio vem como Date "crua" do Prisma (formatarContrato só trata os BigInt) —
                      //por isso convertida aqui, e não com String(), que daria "Wed Jan 01 2026...".
                      dataInicio: new Date(contratoRepresentativo.dataInicio).toISOString().slice(0, 10),
                      idLocatario: contratoRepresentativo.idLocatario,
                  }
                : null,
            linhas,
            totais,
        };
    }

    async gerarPdf(idImovel: number, idLocador: number, ano: number, exibicao: DadosExibicaoInforme): Promise<{ buffer: Buffer; nomeArquivo: string }> {
        const informe = await this.montarInforme(idImovel, idLocador, ano);

        const dadosPdf: DadosPdfInforme = {
            ano,
            locador: exibicao.locador,
            locatario: exibicao.locatario ?? null,
            administradora: exibicao.administradora ?? null,
            imovel: informe.imovel as DadosPdfInforme['imovel'],
            contrato: informe.contrato ? { numero: String(informe.contrato.numero), dataInicio: informe.contrato.dataInicio } : null,
            linhas: informe.linhas,
            totais: informe.totais,
        };

        const buffer = await gerarPdfInformeRendimentos(dadosPdf);
        const nomeArquivo = `Informe de Rendimentos ${ano} - ${exibicao.locador.nome}.pdf`;

        return { buffer, nomeArquivo };
    }
}
