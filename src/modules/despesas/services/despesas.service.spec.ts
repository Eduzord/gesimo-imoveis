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
