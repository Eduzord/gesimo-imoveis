import { NotFoundException } from '@nestjs/common';
import { InformeRendimentosService } from './informe-rendimentos.service';

describe('InformeRendimentosService', () => {
    let service: InformeRendimentosService;
    let imoveisService: any;
    let contratosService: any;
    let despesasService: any;
    let memoriaCalculoService: any;

    const imovel = {
        id: 1,
        classificacao: 'RESIDENCIAL',
        endereco: { rua: 'Rua Buenos Aires', numero: '113', bairro: 'Centro', cidade: 'Rio de Janeiro', estado: 'RJ', cep: '20070-020' },
    };

    const contrato = {
        id: '5',
        comissao: 0.05,
        dataInicio: new Date('2026-01-10'),
        idLocatario: '20',
    };

    const memoria = (competencia: string, idLocador: string, valores: Partial<{ valorAluguel: number; baseCalculoIrrf: number; valorIrrf: number }> = {}) => ({
        idContrato: '5',
        competencia,
        itens: [
            {
                idLocador,
                valorAluguel: valores.valorAluguel ?? 1000,
                baseCalculoIrrf: valores.baseCalculoIrrf ?? 1000,
                valorIrrf: valores.valorIrrf ?? 0,
            },
        ],
    });

    // Despesa "confirmação de recebimento": tipo ALUGUEL, status PAGA, do mesmo contrato/mês da memória.
    // "comComprovante" default false — a decisão do usuário foi que o comprovante NÃO é exigido aqui.
    const despesaAluguelPaga = (dataVencimento: string, idContratoLocacao = '5', comComprovante = false) => ({
        tipo: 'ALUGUEL',
        status: 'PAGA',
        idContratoLocacao,
        dataVencimento,
        comprovantePagamento: comComprovante ? Buffer.from('comprovante') : null,
    });

    beforeEach(() => {
        imoveisService = { buscarPorId: jest.fn().mockResolvedValue(imovel) };
        contratosService = { buscarPorId: jest.fn().mockResolvedValue(contrato) };
        despesasService = { listarPorImovel: jest.fn().mockResolvedValue([]) };
        memoriaCalculoService = { listarPorImovel: jest.fn().mockResolvedValue([]) };

        service = new InformeRendimentosService(imoveisService, contratosService, despesasService, memoriaCalculoService);
    });

    it('rejeita quando não há nenhuma memória de cálculo do locador/imóvel naquele ano', async () => {
        memoriaCalculoService.listarPorImovel.mockResolvedValue([memoria('2025-01-01', '10')]); // ano diferente

        await expect(service.montarInforme(1, 10, 2026)).rejects.toThrow(NotFoundException);
    });

    it('rejeita quando há memórias no ano, mas NENHUM mês tem o aluguel confirmado como recebido', async () => {
        memoriaCalculoService.listarPorImovel.mockResolvedValue([memoria('2026-09-01', '10')]);
        despesasService.listarPorImovel.mockResolvedValue([]); // nenhuma despesa ALUGUEL/PAGA

        await expect(service.montarInforme(1, 10, 2026)).rejects.toThrow('confirmado como recebido');
    });

    it('só conta o mês em que existe despesa ALUGUEL/PAGA do mesmo contrato e mês — o resto fica fora', async () => {
        memoriaCalculoService.listarPorImovel.mockResolvedValue([
            memoria('2026-09-01', '10', { valorAluguel: 1000, baseCalculoIrrf: 1000 }), // sem confirmação
            memoria('2026-10-01', '10', { valorAluguel: 1200, baseCalculoIrrf: 1200 }), // com confirmação
        ]);
        despesasService.listarPorImovel.mockResolvedValue([despesaAluguelPaga('2026-10-10')]);

        const resultado = await service.montarInforme(1, 10, 2026);

        expect(resultado.linhas[8]).toMatchObject({ mes: 9, rendimentoBruto: 0 }); // setembro: cobrado, não confirmado
        expect(resultado.linhas[9]).toMatchObject({ mes: 10, rendimentoBruto: 1200 }); // outubro: confirmado
    });

    it('NÃO exige comprovante anexado na despesa de aluguel para confirmar o mês (decisão do usuário)', async () => {
        memoriaCalculoService.listarPorImovel.mockResolvedValue([memoria('2026-09-01', '10')]);
        despesasService.listarPorImovel.mockResolvedValue([despesaAluguelPaga('2026-09-10', '5', false)]); // sem comprovante

        const resultado = await service.montarInforme(1, 10, 2026);

        expect(resultado.linhas[8].rendimentoBruto).toBe(1000);
    });

    it('ignora despesa ALUGUEL ainda EM_ABERTO (cobrada, mas não paga)', async () => {
        memoriaCalculoService.listarPorImovel.mockResolvedValue([memoria('2026-09-01', '10')]);
        despesasService.listarPorImovel.mockResolvedValue([
            { tipo: 'ALUGUEL', status: 'EM_ABERTO', idContratoLocacao: '5', dataVencimento: '2026-09-10', comprovantePagamento: null },
        ]);

        await expect(service.montarInforme(1, 10, 2026)).rejects.toThrow(NotFoundException);
    });

    it('ignora memórias de OUTRO locador (posse partilhada) e de outros anos', async () => {
        memoriaCalculoService.listarPorImovel.mockResolvedValue([
            memoria('2026-01-01', '99'), // outro locador
            memoria('2025-12-01', '10'), // ano anterior
            memoria('2026-03-01', '10', { valorAluguel: 2000, baseCalculoIrrf: 1900, valorIrrf: 20 }),
        ]);
        despesasService.listarPorImovel.mockResolvedValue([despesaAluguelPaga('2026-03-10')]);

        const resultado = await service.montarInforme(1, 10, 2026);

        expect(resultado.linhas[2]).toMatchObject({ mes: 3, rendimentoBruto: 1900, impostoRetido: 20 });
        expect(resultado.totais.rendimentoBruto).toBe(1900);
    });

    it('resolve o endereço, classificação (Urbano/Rural) e o contrato mais recente para o cabeçalho', async () => {
        memoriaCalculoService.listarPorImovel.mockResolvedValue([memoria('2026-06-01', '10')]);
        despesasService.listarPorImovel.mockResolvedValue([despesaAluguelPaga('2026-06-10')]);

        const resultado = await service.montarInforme(1, 10, 2026);

        expect(resultado.imovel).toMatchObject({ endereco: 'Rua Buenos Aires, 113', uf: 'RJ', tipo: 'Urbano' });
        expect(resultado.contrato).toMatchObject({ id: '5', numero: '5', dataInicio: '2026-01-10' });
    });

    it('classifica como Rural quando o imóvel é RURAL', async () => {
        imoveisService.buscarPorId.mockResolvedValue({ ...imovel, classificacao: 'RURAL' });
        memoriaCalculoService.listarPorImovel.mockResolvedValue([memoria('2026-06-01', '10')]);
        despesasService.listarPorImovel.mockResolvedValue([despesaAluguelPaga('2026-06-10')]);

        const resultado = await service.montarInforme(1, 10, 2026);

        expect(resultado.imovel.tipo).toBe('Rural');
    });

    it('gerarPdf delega a montagem do informe e devolve o PDF com o nome do arquivo', async () => {
        memoriaCalculoService.listarPorImovel.mockResolvedValue([memoria('2026-06-01', '10')]);
        despesasService.listarPorImovel.mockResolvedValue([despesaAluguelPaga('2026-06-10')]);

        const resultado = await service.gerarPdf(1, 10, 2026, { locador: { nome: 'Maria da Silva' } });

        expect(resultado.nomeArquivo).toBe('Informe de Rendimentos 2026 - Maria da Silva.pdf');
        expect(Buffer.isBuffer(resultado.buffer)).toBe(true);
        expect(resultado.buffer.length).toBeGreaterThan(0);
        //Assinatura de um PDF válido: todo arquivo PDF começa com "%PDF-"
        expect(resultado.buffer.subarray(0, 5).toString()).toBe('%PDF-');
    });
});
