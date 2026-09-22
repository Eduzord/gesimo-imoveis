import { BadRequestException } from '@nestjs/common';
import { ContratosService } from './contratos.service';

describe('ContratosService - vínculo com a posse do imóvel', () => {
    let service: ContratosService;
    let prisma: any;

    const dto: any = {
        idImovel: 1,
        idLocador: 10,
        idLocatario: 20,
        dataInicio: new Date('2026-01-01'),
        valorAluguel: 1000,
        comissao: 0.1,
    };

    beforeEach(() => {
        prisma = {
            imovel: {
                findUnique: jest.fn(),
                update: jest.fn(),
            },
            contratolocacao: {
                create: jest.fn().mockResolvedValue({ id: BigInt(1), idImovel: 1, idLocador: BigInt(10), idLocatario: BigInt(20) }),
                findMany: jest.fn().mockResolvedValue([]),
            },
            $transaction: jest.fn(),
        };
        prisma.$transaction.mockImplementation((fn: any) => fn(prisma));

        service = new ContratosService(prisma);
    });

    it('rejeita locador que não é proprietário quando o imóvel tem posse cadastrada', async () => {
        prisma.imovel.findUnique.mockResolvedValue({
            id: 1,
            status: 'DISPONIVEL',
            propriedadeimovel: [{ idLocador: BigInt(99), percentualParticipacao: 100 }],
        });

        await expect(service.criar(dto)).rejects.toThrow(BadRequestException);
        expect(prisma.contratolocacao.create).not.toHaveBeenCalled();
    });

    it('aceita locador que é um dos proprietários', async () => {
        prisma.imovel.findUnique.mockResolvedValue({
            id: 1,
            status: 'DISPONIVEL',
            propriedadeimovel: [
                { idLocador: BigInt(10), percentualParticipacao: 50 },
                { idLocador: BigInt(99), percentualParticipacao: 50 },
            ],
        });

        await expect(service.criar(dto)).resolves.toBeDefined();
        expect(prisma.imovel.update).toHaveBeenCalledWith({ where: { id: 1 }, data: { status: 'ALUGADO' } });
    });

    it('mantém o comportamento antigo para imóvel sem proprietários cadastrados', async () => {
        prisma.imovel.findUnique.mockResolvedValue({ id: 1, status: 'DISPONIVEL', propriedadeimovel: [] });

        await expect(service.criar(dto)).resolves.toBeDefined();
    });

    it('listarTodos converte os filtros para o tipo do banco', async () => {
        await service.listarTodos({ idImovel: 1, idLocatario: 20 });

        expect(prisma.contratolocacao.findMany).toHaveBeenCalledWith(
            expect.objectContaining({ where: { idImovel: 1, idLocatario: BigInt(20) } }),
        );
    });

    it('listarTodos sem filtros não restringe a busca', async () => {
        await service.listarTodos();

        expect(prisma.contratolocacao.findMany).toHaveBeenCalledWith(
            expect.objectContaining({ where: {} }),
        );
    });
});
