import { BadRequestException } from '@nestjs/common';
import { ImoveisService } from './imoveis.service';

describe('ImoveisService - regras de partilha de posse', () => {
    let service: ImoveisService;
    let prisma: any;

    beforeEach(() => {
        prisma = {
            imovel: {
                create: jest.fn().mockResolvedValue({ id: 1, propriedadeimovel: [] }),
                findUnique: jest.fn().mockResolvedValue({ id: 1, propriedadeimovel: [] }),
                findMany: jest.fn().mockResolvedValue([]),
                update: jest.fn().mockResolvedValue({ id: 1, propriedadeimovel: [] }),
            },
            propriedadeimovel: {
                deleteMany: jest.fn(),
                createMany: jest.fn(),
            },
            $transaction: jest.fn(),
        };
        prisma.$transaction.mockImplementation((fn: any) => fn(prisma));

        service = new ImoveisService(prisma, {} as any);
    });

    const dadosBase: any = { inscricaoIPTU: '1', metragem: 10, endereco: {} };

    it('aceita soma exatamente 100', async () => {
        await expect(
            service.atualizar(1, {
                proprietarios: [
                    { idLocador: 1, percentualParticipacao: 60 },
                    { idLocador: 2, percentualParticipacao: 40 },
                ],
            } as any),
        ).resolves.toBeDefined();
        expect(prisma.propriedadeimovel.createMany).toHaveBeenCalled();
    });

    it('aceita soma menor que 100', async () => {
        await expect(
            service.atualizar(1, {
                proprietarios: [{ idLocador: 1, percentualParticipacao: 99.99 }],
            } as any),
        ).resolves.toBeDefined();
    });

    it('aceita frações que somam 100 apesar do ponto flutuante', async () => {
        await expect(
            service.atualizar(1, {
                proprietarios: [
                    { idLocador: 1, percentualParticipacao: 33.33 },
                    { idLocador: 2, percentualParticipacao: 33.33 },
                    { idLocador: 3, percentualParticipacao: 33.34 },
                ],
            } as any),
        ).resolves.toBeDefined();
    });

    it('rejeita soma acima de 100 sem alterar o banco', async () => {
        await expect(
            service.atualizar(1, {
                proprietarios: [
                    { idLocador: 1, percentualParticipacao: 60 },
                    { idLocador: 2, percentualParticipacao: 40.01 },
                ],
            } as any),
        ).rejects.toThrow(BadRequestException);
        expect(prisma.$transaction).not.toHaveBeenCalled();
    });

    it('rejeita o mesmo locador duas vezes no mesmo imóvel', async () => {
        await expect(
            service.atualizar(1, {
                proprietarios: [
                    { idLocador: 1, percentualParticipacao: 30 },
                    { idLocador: 1, percentualParticipacao: 30 },
                ],
            } as any),
        ).rejects.toThrow(BadRequestException);
    });

    it('aplica a mesma regra na criação', async () => {
        await expect(
            service.criar({
                ...dadosBase,
                proprietarios: [
                    { idLocador: 1, percentualParticipacao: 70 },
                    { idLocador: 2, percentualParticipacao: 40 },
                ],
            }),
        ).rejects.toThrow(BadRequestException);
        expect(prisma.imovel.create).not.toHaveBeenCalled();
    });

    it('não valida nada quando proprietarios não é enviado no PATCH', async () => {
        await service.atualizar(1, { metragem: 20 } as any);
        expect(prisma.propriedadeimovel.deleteMany).not.toHaveBeenCalled();
    });

    it('listarPorLocador filtra pelos vínculos do locador e serializa o BigInt', async () => {
        prisma.imovel.findMany.mockResolvedValue([
            { id: 1, propriedadeimovel: [{ id: 1, idLocador: BigInt(7), percentualParticipacao: '50.00' }] },
        ]);

        const resultado = await service.listarPorLocador(7);

        expect(prisma.imovel.findMany).toHaveBeenCalledWith(
            expect.objectContaining({
                where: { propriedadeimovel: { some: { idLocador: BigInt(7) } } },
            }),
        );
        expect(resultado[0].propriedadeimovel[0].idLocador).toBe('7');
    });
});
