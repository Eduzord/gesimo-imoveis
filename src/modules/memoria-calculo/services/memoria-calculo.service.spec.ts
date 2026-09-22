import { BadRequestException } from '@nestjs/common';
import { MemoriaCalculoService } from './memoria-calculo.service';

//Simula uma linha já persistida (o que Prisma devolveria de verdade), para os testes de idempotência/regerar
function memoriaPersistidaFake() {
    return {
        id: 9,
        idContrato: BigInt(5),
        idImovel: 1,
        competencia: new Date(Date.UTC(2026, 6, 1)),
        valorAluguelBase: 10000,
        totalAPagar: 10000,
        geradoPorUsuarioId: 1,
        criadoEm: new Date(),
        itens: [],
    };
}

describe('MemoriaCalculoService', () => {
    let service: MemoriaCalculoService;
    let prisma: any;
    let imoveisService: any;
    let contratosService: any;
    let despesasService: any;
    let irrfService: any;

    const imovel = {
        id: 1,
        endereco: { rua: 'Rua Buenos Aires', numero: '113', bairro: 'Centro' },
        status: 'ALUGADO',
        propriedadeimovel: [
            { idLocador: '10', percentualParticipacao: 60 },
            { idLocador: '20', percentualParticipacao: 40 },
        ],
    };

    const contratoAtivo = {
        id: '5',
        status: 'ATIVO',
        valorAluguel: 10000,
        idLocatario: '99',
        dataReajuste: '2026-07-01',
    };

    const dtoBase: any = {
        idImovel: 1,
        competencia: new Date('2026-07-15'), // dia qualquer do mês; o service normaliza pro dia 1
        proprietarios: [
            { idLocador: 10, nome: 'Maria' },
            { idLocador: 20, nome: 'José' },
        ],
    };

    beforeEach(() => {
        prisma = {
            memoriacalculo: {
                findUnique: jest.fn().mockResolvedValue(null),
                create: jest.fn().mockImplementation(({ data }: any) => ({
                    id: 1,
                    ...data,
                    itens: data.itens.create,
                })),
                delete: jest.fn(),
            },
            $transaction: jest.fn().mockImplementation((fn: any) => fn(prisma)),
        };
        imoveisService = { buscarPorId: jest.fn().mockResolvedValue(imovel) };
        contratosService = { listarTodos: jest.fn().mockResolvedValue([contratoAtivo]) };
        despesasService = {
            buscarPorId: jest.fn(),
            criarAvulsa: jest.fn(),
            listarPorImovel: jest.fn().mockResolvedValue([]),
        };
        irrfService = { calcular: jest.fn().mockResolvedValue({ valorIrrf: 0 }) };

        service = new MemoriaCalculoService(prisma, imoveisService, contratosService, despesasService, irrfService);
    });

    it('rejeita quando o imóvel não tem contrato ATIVO', async () => {
        contratosService.listarTodos.mockResolvedValue([{ ...contratoAtivo, status: 'ENCERRADO' }]);

        await expect(service.gerar(dtoBase, 1)).rejects.toThrow(BadRequestException);
    });

    it('rejeita quando falta o nome de um proprietário do imóvel', async () => {
        await expect(
            service.gerar({ ...dtoBase, proprietarios: [{ idLocador: 10, nome: 'Maria' }] }, 1),
        ).rejects.toThrow('proprietário 20');
    });

    it('rateia o aluguel, calcula o IRRF por proprietário e persiste', async () => {
        irrfService.calcular.mockResolvedValueOnce({ valorIrrf: 100 }).mockResolvedValueOnce({ valorIrrf: 0 });

        const resultado = await service.gerar(dtoBase, 42);

        expect(irrfService.calcular).toHaveBeenNthCalledWith(1, {
            baseCalculo: 6000, // 60% de 10000
            dataCompetencia: new Date(Date.UTC(2026, 6, 1)),
            numeroDependentes: 0,
        });
        expect(resultado.itens[0]).toMatchObject({ idLocador: '10', valorAluguel: 6000, valorIrrf: 100, valorAPagar: 5900 });
        expect(resultado.itens[1]).toMatchObject({ idLocador: '20', valorAluguel: 4000, valorIrrf: 0, valorAPagar: 4000 });
        expect(resultado.totalAPagar).toBe(9900);
        expect(resultado.geradoPorUsuarioId).toBe(42);
    });

    it('devolve a memória já existente sem recalcular quando regerar não é true', async () => {
        const existente = memoriaPersistidaFake();
        prisma.memoriacalculo.findUnique.mockResolvedValue(existente);

        const resultado = await service.gerar(dtoBase, 1);

        expect(resultado.id).toBe(9);
        expect(irrfService.calcular).not.toHaveBeenCalled();
        expect(prisma.memoriacalculo.create).not.toHaveBeenCalled();
    });

    it('regerar=true substitui a memória existente (apaga e cria de novo)', async () => {
        const existente = memoriaPersistidaFake();
        prisma.memoriacalculo.findUnique.mockResolvedValue(existente);

        await service.gerar({ ...dtoBase, regerar: true }, 1);

        expect(prisma.memoriacalculo.delete).toHaveBeenCalledWith({ where: { id: 9 } });
        expect(prisma.memoriacalculo.create).toHaveBeenCalled();
    });

    it('despesa extra NOVA é criada como despesa de verdade e rateada proporcionalmente', async () => {
        despesasService.criarAvulsa.mockResolvedValue({
            id: '77', idContratoLocacao: '5', tipo: 'SEGURO_INCENDIO', descricao: 'Seguro', valor: 500,
        });

        const resultado = await service.gerar(
            { ...dtoBase, despesasExtras: [{ origem: 'NOVA', tipo: 'SEGURO_INCENDIO', descricao: 'Seguro', valor: 500, dataVencimento: new Date(), aplicacao: 'RATEIO' }] },
            1,
        );

        expect(despesasService.criarAvulsa).toHaveBeenCalledWith(
            expect.objectContaining({ idContratoLocacao: 5, tipo: 'SEGURO_INCENDIO', valor: 500 }),
        );
        expect(resultado.itens[0].valorReembolsos).toBe(300); // 60% de 500
        expect(resultado.itens[1].valorReembolsos).toBe(200);
    });

    it('despesa extra EXISTENTE precisa pertencer a um contrato deste imóvel', async () => {
        despesasService.buscarPorId.mockResolvedValue({ id: '1', idContratoLocacao: '999', tipo: 'IPTU', descricao: 'IPTU', valor: 100 });

        await expect(
            service.gerar({ ...dtoBase, despesasExtras: [{ origem: 'EXISTENTE', idDespesa: 1, aplicacao: 'RATEIO' }] }, 1),
        ).rejects.toThrow('não pertence a este imóvel');
    });

    it('despesa extra EXISTENTE aplicada a um proprietário específico não é rateada com os demais', async () => {
        despesasService.buscarPorId.mockResolvedValue({ id: '1', idContratoLocacao: '5', tipo: 'IPTU', descricao: '7/10 IPTU', valor: 2857.8 });

        const resultado = await service.gerar(
            { ...dtoBase, despesasExtras: [{ origem: 'EXISTENTE', idDespesa: 1, aplicacao: 'LOCADOR_ESPECIFICO', idLocadorEspecifico: 10 }] },
            1,
        );

        expect(resultado.itens[0].valorReembolsos).toBe(2857.8);
        expect(resultado.itens[1].valorReembolsos).toBe(0);
    });

    it('ajuste manual de desconto reduz a base do IRRF do proprietário', async () => {
        await service.gerar(
            { ...dtoBase, ajustesManuais: [{ idLocador: 10, tipo: 'DESCONTO', descricao: 'Adiantamento', valor: 1000 }] },
            1,
        );

        expect(irrfService.calcular).toHaveBeenNthCalledWith(1, expect.objectContaining({ baseCalculo: 5000 })); // 6000 - 1000
    });

    it('grava o retrato da conta bancária e do reajuste no registro', async () => {
        const resultado = await service.gerar(
            {
                ...dtoBase,
                contaBancaria: { banco: 'SANTANDER', agencia: '3458', numero: '13.003.981-9', titular: 'Estilo Adm.' },
                reajuste: { indice: 'IGPM', percentual: 3.18, valorAnterior: 9690 },
            },
            1,
        );

        expect(resultado.contaBancaria).toMatchObject({ banco: 'SANTANDER', agencia: '3458' });
        expect(resultado.reajuste).toMatchObject({ indice: 'IGPM', percentual: 3.18, valorAnterior: 9690 });
    });

    it('montarPreparacao junta imóvel, contrato ativo, despesas em aberto e memória existente', async () => {
        despesasService.listarPorImovel.mockResolvedValue([{ id: '1', descricao: 'IPTU' }]);

        const resultado = await service.montarPreparacao(1, new Date('2026-07-01'));

        expect(resultado.proprietarios).toHaveLength(2);
        expect(resultado.contratoAtivo).toMatchObject({ id: '5', valorAluguel: 10000 });
        expect(resultado.despesasEmAberto).toHaveLength(1);
        expect(despesasService.listarPorImovel).toHaveBeenCalledWith(1, true);
    });

    it('montarPreparacao devolve contratoAtivo null quando não há contrato ativo', async () => {
        contratosService.listarTodos.mockResolvedValue([]);

        const resultado = await service.montarPreparacao(1, new Date('2026-07-01'));

        expect(resultado.contratoAtivo).toBeNull();
    });
});
