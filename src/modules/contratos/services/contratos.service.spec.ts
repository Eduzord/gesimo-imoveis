import { BadRequestException, NotFoundException } from '@nestjs/common';
import { ContratosService } from './contratos.service';
import { IndiceReajuste } from '../dto/aplicar-reajuste.dto';

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
                findUnique: jest.fn(),
                update: jest.fn(),
            },
            reajustecontrato: {
                create: jest.fn(),
                findMany: jest.fn().mockResolvedValue([]),
            },
            $transaction: jest.fn(),
        };
        //aplicarReajuste usa a forma "array" do $transaction (promises já criadas); os demais usam a forma "callback"
        prisma.$transaction.mockImplementation((arg: any) =>
            typeof arg === 'function' ? arg(prisma) : Promise.all(arg),
        );

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

describe('ContratosService - reajuste', () => {
    let service: ContratosService;
    let prisma: any;

    const contratoAtivo = {
        id: BigInt(5),
        idImovel: 1,
        idLocador: BigInt(10),
        idLocatario: BigInt(20),
        status: 'ATIVO',
        valorAluguel: 12000,
        dataReajuste: new Date('2026-07-01T00:00:00.000Z'),
    };

    beforeEach(() => {
        prisma = {
            contratolocacao: {
                findUnique: jest.fn().mockResolvedValue(contratoAtivo),
                update: jest.fn().mockImplementation(({ data }: any) => ({ ...contratoAtivo, ...data })),
            },
            reajustecontrato: {
                create: jest.fn().mockImplementation(({ data }: any) => ({ id: BigInt(1), ...data })),
                findMany: jest.fn().mockResolvedValue([]),
            },
            $transaction: jest.fn(),
        };
        prisma.$transaction.mockImplementation((arg: any) =>
            typeof arg === 'function' ? arg(prisma) : Promise.all(arg),
        );

        service = new ContratosService(prisma);
    });

    it('rejeita reajuste em contrato que não está ATIVO', async () => {
        prisma.contratolocacao.findUnique.mockResolvedValue({ ...contratoAtivo, status: 'ENCERRADO' });

        await expect(
            service.aplicarReajuste(5, { indice: IndiceReajuste.IGPM, percentual: 3.18 } as any),
        ).rejects.toThrow(BadRequestException);
    });

    it('404 quando o contrato não existe', async () => {
        prisma.contratolocacao.findUnique.mockResolvedValue(null);

        await expect(
            service.aplicarReajuste(999, { indice: IndiceReajuste.IGPM, percentual: 3.18 } as any),
        ).rejects.toThrow(NotFoundException);
    });

    it('rejeita quando nem percentual nem valorNovo são informados', async () => {
        await expect(service.aplicarReajuste(5, { indice: IndiceReajuste.IGPM } as any)).rejects.toThrow(
            BadRequestException,
        );
    });

    it('calcula o novo valor a partir do percentual', async () => {
        const resultado = await service.aplicarReajuste(5, { indice: IndiceReajuste.IGPM, percentual: 3.18 } as any);

        expect(resultado.reajuste.valorAnterior).toBe(12000);
        expect(resultado.reajuste.valorNovo).toBe(12381.6); // 12000 * 1.0318
        expect(resultado.reajuste.percentual).toBe(3.18);
        expect(resultado.contrato.valorAluguel).toBe(12381.6);
    });

    it('calcula o percentual equivalente a partir do valorNovo', async () => {
        const resultado = await service.aplicarReajuste(5, { indice: IndiceReajuste.IPCA, valorNovo: 12381.32 } as any);

        expect(resultado.reajuste.percentual).toBeCloseTo(3.1777, 3);
    });

    it('avança a próxima data de reajuste em exatamente 1 ano', async () => {
        await service.aplicarReajuste(5, { indice: IndiceReajuste.IGPM, percentual: 5 } as any);

        expect(prisma.contratolocacao.update).toHaveBeenCalledWith(
            expect.objectContaining({
                data: expect.objectContaining({ dataReajuste: new Date('2027-07-01T00:00:00.000Z') }),
            }),
        );
    });

    it('rejeita valorNovo menor ou igual a zero', async () => {
        await expect(
            service.aplicarReajuste(5, { indice: IndiceReajuste.IGPM, percentual: -100 } as any),
        ).rejects.toThrow(BadRequestException);
    });

    it('listarReajustes devolve o histórico ordenado do mais recente ao mais antigo', async () => {
        await service.listarReajustes(5);

        expect(prisma.reajustecontrato.findMany).toHaveBeenCalledWith({
            where: { idContrato: BigInt(5) },
            orderBy: { dataReajuste: 'desc' },
        });
    });
});
