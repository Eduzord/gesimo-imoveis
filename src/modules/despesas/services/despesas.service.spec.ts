import { NotFoundException } from '@nestjs/common';
import { DespesasService } from './despesas.service';

describe('DespesasService - buscarPorId e listarPorImovel', () => {
    let service: DespesasService;
    let prisma: any;

    const despesaBanco = {
        id: BigInt(1),
        idContratoLocacao: BigInt(10),
        descricao: 'IPTU',
        valor: 250,
        tipo: 'IPTU',
        status: 'EM_ABERTO',
        dataVencimento: new Date('2026-07-10'),
        dataPagamento: null,
    };

    beforeEach(() => {
        prisma = {
            despesa: { findUnique: jest.fn(), findMany: jest.fn() },
            contratolocacao: { findMany: jest.fn() },
        };
        service = new DespesasService(prisma);
    });

    it('buscarPorId devolve a despesa formatada (BigInt -> string, valor -> number)', async () => {
        prisma.despesa.findUnique.mockResolvedValue(despesaBanco);

        const resultado = await service.buscarPorId(1);

        expect(resultado).toMatchObject({ id: '1', idContratoLocacao: '10', valor: 250 });
    });

    it('buscarPorId lança 404 quando não existe', async () => {
        prisma.despesa.findUnique.mockResolvedValue(null);

        await expect(service.buscarPorId(999)).rejects.toThrow(NotFoundException);
    });

    it('listarPorImovel busca despesas de TODOS os contratos do imóvel (histórico incluso)', async () => {
        prisma.contratolocacao.findMany.mockResolvedValue([{ id: BigInt(10) }, { id: BigInt(11) }]);
        prisma.despesa.findMany.mockResolvedValue([despesaBanco]);

        const resultado = await service.listarPorImovel(1);

        expect(prisma.contratolocacao.findMany).toHaveBeenCalledWith({ where: { idImovel: 1 }, select: { id: true } });
        expect(prisma.despesa.findMany).toHaveBeenCalledWith(
            expect.objectContaining({ where: { idContratoLocacao: { in: [BigInt(10), BigInt(11)] } } }),
        );
        expect(resultado).toHaveLength(1);
    });

    it('listarPorImovel devolve [] sem consultar despesas quando o imóvel não tem nenhum contrato', async () => {
        prisma.contratolocacao.findMany.mockResolvedValue([]);

        const resultado = await service.listarPorImovel(1);

        expect(resultado).toEqual([]);
        expect(prisma.despesa.findMany).not.toHaveBeenCalled();
    });

    it('emAberto=true filtra EM_ABERTO ou PAGA-sem-comprovante', async () => {
        prisma.contratolocacao.findMany.mockResolvedValue([{ id: BigInt(10) }]);
        prisma.despesa.findMany.mockResolvedValue([]);

        await service.listarPorImovel(1, true);

        expect(prisma.despesa.findMany).toHaveBeenCalledWith(
            expect.objectContaining({
                where: {
                    idContratoLocacao: { in: [BigInt(10)] },
                    OR: [{ status: 'EM_ABERTO' }, { status: 'PAGA', comprovantePagamento: null }],
                },
            }),
        );
    });

    it('emAberto ausente/false não aplica o filtro OR', async () => {
        prisma.contratolocacao.findMany.mockResolvedValue([{ id: BigInt(10) }]);
        prisma.despesa.findMany.mockResolvedValue([]);

        await service.listarPorImovel(1);

        const args = prisma.despesa.findMany.mock.calls[0][0];
        expect(args.where.OR).toBeUndefined();
    });
});

describe('DespesasService - criarParcelada', () => {
    let service: DespesasService;
    let prisma: any;

    // A divisão em partes iguais é feita no FRONT (só para sugerir); o service recebe sempre a lista
    // já definida — por isso o teste usa valores deliberadamente desiguais, como um usuário editaria.
    const dtoBase = {
        idContratoLocacao: 10,
        descricao: 'IPTU 2026',
        tipo: 'IPTU',
        parcelas: [
            { valor: 333.33, dataVencimento: new Date(Date.UTC(2026, 0, 10)) },
            { valor: 333.33, dataVencimento: new Date(Date.UTC(2026, 1, 10)) },
            { valor: 333.34, dataVencimento: new Date(Date.UTC(2026, 2, 10)) },
        ],
    };

    beforeEach(() => {
        prisma = {
            contratolocacao: { findUnique: jest.fn().mockResolvedValue({ id: BigInt(10) }) },
            despesa: {
                // Cada chamada de create() devolve a própria linha que recebeu, já com um ID fake
                create: jest.fn((args: any) => Promise.resolve({ id: BigInt(args.data.numeroParcela), ...args.data })),
            },
            // Forma "array de operações" do $transaction, igual à usada pelo service de reajuste
            $transaction: jest.fn((operacoes: any[]) => Promise.all(operacoes)),
        };
        service = new DespesasService(prisma);
    });

    it('rejeita quando o contrato informado não existe', async () => {
        prisma.contratolocacao.findUnique.mockResolvedValue(null);

        await expect(service.criarParcelada(dtoBase as any)).rejects.toThrow(NotFoundException);
        expect(prisma.despesa.create).not.toHaveBeenCalled();
    });

    it('cria uma despesa por parcela, todas com o mesmo grupoParcelamento', async () => {
        const resultado = await service.criarParcelada(dtoBase as any);

        expect(resultado).toHaveLength(3);
        expect(prisma.despesa.create).toHaveBeenCalledTimes(3);

        const gruposGerados = new Set(resultado.map((d: any) => d.grupoParcelamento));
        expect(gruposGerados.size).toBe(1); // todas as 3 parcelas compartilham o mesmo grupo
    });

    it('numera as parcelas na descrição e preenche numeroParcela/totalParcelas', async () => {
        const resultado = await service.criarParcelada(dtoBase as any);

        expect(resultado.map((d: any) => d.descricao)).toEqual([
            'IPTU 2026 (1/3)',
            'IPTU 2026 (2/3)',
            'IPTU 2026 (3/3)',
        ]);
        expect(resultado.map((d: any) => d.numeroParcela)).toEqual([1, 2, 3]);
        expect(resultado.every((d: any) => d.totalParcelas === 3)).toBe(true);
    });

    it('persiste exatamente o valor e o vencimento de cada parcela, sem recalcular nada', async () => {
        // Parcelas com valores desiguais, como se o usuário tivesse editado a sugestão do front
        const dtoComEdicao = {
            ...dtoBase,
            parcelas: [
                { valor: 100, dataVencimento: new Date(Date.UTC(2026, 0, 5)) },
                { valor: 250.75, dataVencimento: new Date(Date.UTC(2026, 2, 20)) },
            ],
        };

        const resultado = await service.criarParcelada(dtoComEdicao as any);

        expect(resultado.map((d: any) => d.valor)).toEqual([100, 250.75]);
        expect(resultado.map((d: any) => d.dataVencimento)).toEqual(dtoComEdicao.parcelas.map((p) => p.dataVencimento));
        expect(resultado.map((d: any) => d.numeroParcela)).toEqual([1, 2]);
        expect(resultado.every((d: any) => d.totalParcelas === 2)).toBe(true);
    });
});
