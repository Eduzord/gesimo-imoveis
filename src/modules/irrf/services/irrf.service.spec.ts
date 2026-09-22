import { BadRequestException, ConflictException, NotFoundException } from '@nestjs/common';
import { IrrfService } from './irrf.service';

//Valores FICTÍCIOS, só para exercitar a mecânica de vigência e de cadastro
const data = (iso: string) => new Date(`${iso}T00:00:00.000Z`);

const tabelaBanco = (id: number, inicio: string, aliquotaFaixa2 = 10) => ({
    id,
    vigenciaInicio: data(inicio),
    descricao: `Tabela ${id}`,
    deducaoDependente: 100,
    redutorLimiteIsencao: null,
    redutorLimiteSuperior: null,
    redutorConstante: null,
    redutorCoeficiente: null,
    criadoEm: new Date(),
    atualizadoEm: new Date(),
    faixairrf: [
        { id: id * 10 + 1, idTabela: id, ordem: 1, valorDe: 0, valorAte: 2000, aliquota: 0, parcelaADeduzir: 0 },
        { id: id * 10 + 2, idTabela: id, ordem: 2, valorDe: 2000.01, valorAte: null, aliquota: aliquotaFaixa2, parcelaADeduzir: 0 },
    ],
});

//Prisma em memória: implementa só as consultas que o service usa
function criarPrismaFalso(tabelas: ReturnType<typeof tabelaBanco>[]) {
    const porInicio = (a: any, b: any) => a.vigenciaInicio.getTime() - b.vigenciaInicio.getTime();

    const prisma: any = {
        tabelairrf: {
            findMany: jest.fn(async () => [...tabelas].sort(porInicio)),
            findUnique: jest.fn(async ({ where }: any) =>
                tabelas.find((t) => (where.id !== undefined ? t.id === where.id : t.vigenciaInicio.getTime() === where.vigenciaInicio.getTime())) ?? null,
            ),
            findFirst: jest.fn(async ({ where, orderBy }: any) => {
                const { lte, gt } = where.vigenciaInicio;
                const candidatas = tabelas.filter((t) => (lte ? t.vigenciaInicio <= lte : true) && (gt ? t.vigenciaInicio > gt : true));
                const ordenadas = candidatas.sort(porInicio);
                return (orderBy.vigenciaInicio === 'desc' ? ordenadas.reverse() : ordenadas)[0] ?? null;
            }),
            create: jest.fn(async () => ({ id: 99 })),
            update: jest.fn(),
            delete: jest.fn(),
        },
        faixairrf: { deleteMany: jest.fn() },
        $transaction: jest.fn(),
    };
    prisma.$transaction.mockImplementation((fn: any) => fn(prisma));
    return prisma;
}

const dtoValido: any = {
    vigenciaInicio: data('2027-01-01'),
    descricao: '  Nova tabela  ',
    deducaoDependente: 100,
    faixas: [
        { valorAte: 2000, aliquota: 0, parcelaADeduzir: 0 },
        { aliquota: 10, parcelaADeduzir: 0 },
    ],
};

describe('IrrfService - vigência', () => {
    let prisma: any;
    let service: IrrfService;

    beforeEach(() => {
        prisma = criarPrismaFalso([tabelaBanco(1, '2025-05-01', 10), tabelaBanco(2, '2026-01-01', 20)]);
        service = new IrrfService(prisma);
    });

    it('calcula com a tabela vigente na competência, não com a mais recente', async () => {
        const antiga = await service.calcular({ baseCalculo: 3000, dataCompetencia: data('2025-12-31') });
        const nova = await service.calcular({ baseCalculo: 3000, dataCompetencia: data('2026-06-15') });

        expect(antiga.idTabela).toBe(1);
        expect(antiga.valorIrrf).toBe(300); //10%
        expect(nova.idTabela).toBe(2);
        expect(nova.valorIrrf).toBe(600); //20%
    });

    it('no dia do início da vigência já vale a nova versão', async () => {
        const r = await service.calcular({ baseCalculo: 3000, dataCompetencia: data('2026-01-01') });

        expect(r.idTabela).toBe(2);
        expect(r.vigenciaInicio).toBe('2026-01-01');
        expect(r.dataCompetencia).toBe('2026-01-01');
    });

    it('recusa o cálculo, com mensagem clara, se não houver tabela na competência (sem cair na mais recente)', async () => {
        await expect(service.calcular({ baseCalculo: 3000, dataCompetencia: data('2025-04-30') })).rejects.toThrow(NotFoundException);
        await expect(service.calcular({ baseCalculo: 3000, dataCompetencia: data('2025-04-30') })).rejects.toThrow(
            'Não há tabela IRRF vigente para a competência 30/04/2025. Cadastre uma tabela em Tabelas IRRF.',
        );
    });

    it('sem nenhuma tabela cadastrada, também recusa', async () => {
        service = new IrrfService(criarPrismaFalso([]));

        await expect(service.buscarVigente(data('2026-01-01'))).rejects.toThrow(NotFoundException);
    });

    it('repassa dependentes ao cálculo e devolve os dados de auditoria', async () => {
        const r = await service.calcular({ baseCalculo: 3100, dataCompetencia: data('2026-02-01'), numeroDependentes: 1 });

        expect(r.baseCalculoLiquida).toBe(3000);
        expect(r.faixaAplicada.ordem).toBe(2);
        expect(r.idTabela).toBe(2);
    });

    it('recusa rendimento tributável menor que a base de cálculo (400)', async () => {
        await expect(
            service.calcular({ baseCalculo: 3000, rendimentoTributavel: 2999.99, dataCompetencia: data('2026-02-01') }),
        ).rejects.toThrow(BadRequestException);
    });

    it('aceita o rendimento tributável bruto e o devolve no resultado', async () => {
        const r = await service.calcular({ baseCalculo: 2500, rendimentoTributavel: 3000, dataCompetencia: data('2026-02-01') });

        expect(r.rendimentoTributavel).toBe(3000);
        expect(r.baseCalculo).toBe(2500);
    });

    it('deriva o fim da vigência e a situação de cada versão (mais recente primeiro)', async () => {
        const naVigenciaDaPrimeira = await service.listar(data('2025-09-01'));

        expect(naVigenciaDaPrimeira.map((t) => t.id)).toEqual([2, 1]);
        expect(naVigenciaDaPrimeira[0]).toMatchObject({ situacao: 'FUTURA', vigenciaFim: null });
        expect(naVigenciaDaPrimeira[1]).toMatchObject({ situacao: 'VIGENTE', vigenciaFim: '2025-12-31' });

        const depois = await service.listar(data('2026-02-01'));

        expect(depois[0]).toMatchObject({ situacao: 'VIGENTE', vigenciaFim: null });
        expect(depois[1]).toMatchObject({ situacao: 'ENCERRADA', vigenciaFim: '2025-12-31' });
    });

    it('buscarVigente devolve a versão da data pedida com faixas ordenadas e valores numéricos', async () => {
        const r = await service.buscarVigente(data('2025-06-01'), data('2025-06-01'));

        expect(r).toMatchObject({ id: 1, vigenciaInicio: '2025-05-01', vigenciaFim: '2025-12-31', situacao: 'VIGENTE', editavel: true });
        expect(r.faixas.map((f) => f.ordem)).toEqual([1, 2]);
        expect(r.faixas[1]).toMatchObject({ valorDe: 2000.01, valorAte: null, aliquota: 10 });
        expect(r.redutor).toBeNull();
    });
});

describe('IrrfService - cadastro', () => {
    let prisma: any;
    let service: IrrfService;

    beforeEach(() => {
        prisma = criarPrismaFalso([tabelaBanco(1, '2025-05-01'), tabelaBanco(99, '2027-01-01')]);
        service = new IrrfService(prisma);
    });

    it('rejeita faixas inválidas antes de tocar no banco', async () => {
        const dto = { ...dtoValido, vigenciaInicio: data('2028-01-01'), faixas: [{ valorAte: 2000, aliquota: 0, parcelaADeduzir: 0 }] };

        await expect(service.criar(dto)).rejects.toThrow(BadRequestException);
        expect(prisma.tabelairrf.create).not.toHaveBeenCalled();
    });

    it('rejeita vigência já existente (409)', async () => {
        await expect(service.criar({ ...dtoValido, vigenciaInicio: data('2025-05-01') })).rejects.toThrow(ConflictException);
        expect(prisma.tabelairrf.create).not.toHaveBeenCalled();
    });

    it('grava a versão com ordem e limite inferior derivados e descrição sem espaços sobrando', async () => {
        await service.criar({ ...dtoValido, vigenciaInicio: data('2028-01-01') });

        const { data: gravado } = prisma.tabelairrf.create.mock.calls[0][0];
        expect(gravado.descricao).toBe('Nova tabela');
        expect(gravado.redutorLimiteIsencao).toBeNull();
        expect(gravado.faixairrf.create).toEqual([
            { ordem: 1, valorDe: 0, valorAte: 2000, aliquota: 0, parcelaADeduzir: 0 },
            { ordem: 2, valorDe: 2000.01, valorAte: null, aliquota: 10, parcelaADeduzir: 0 },
        ]);
    });

    it('grava o redutor quando informado', async () => {
        const redutor = { limiteIsencao: 3500, limiteSuperior: 4500, constante: 900, coeficiente: 0.2 };
        await service.criar({ ...dtoValido, vigenciaInicio: data('2028-01-01'), redutor });

        const { data: gravado } = prisma.tabelairrf.create.mock.calls[0][0];
        expect(gravado).toMatchObject({ redutorLimiteIsencao: 3500, redutorLimiteSuperior: 4500, redutorConstante: 900, redutorCoeficiente: 0.2 });
    });

    it('converte a violação do índice único (corrida entre cadastros) em 409', async () => {
        prisma.tabelairrf.create.mockRejectedValue({ code: 'P2002' });

        await expect(service.criar({ ...dtoValido, vigenciaInicio: data('2028-01-01') })).rejects.toThrow(ConflictException);
    });
});

describe('IrrfService - atualizar e remover', () => {
    let prisma: any;
    let service: IrrfService;

    beforeEach(() => {
        prisma = criarPrismaFalso([tabelaBanco(1, '2025-05-01'), tabelaBanco(2, '2026-01-01')]);
        service = new IrrfService(prisma);
    });

    it('atualizar substitui as faixas numa transação', async () => {
        await service.atualizar(2, { ...dtoValido, vigenciaInicio: data('2026-01-01') });

        expect(prisma.$transaction).toHaveBeenCalled();
        expect(prisma.faixairrf.deleteMany).toHaveBeenCalledWith({ where: { idTabela: 2 } });
        expect(prisma.tabelairrf.update).toHaveBeenCalledWith(expect.objectContaining({ where: { id: 2 } }));
    });

    it('atualizar não deixa mover a vigência para a data de outra versão', async () => {
        await expect(service.atualizar(2, { ...dtoValido, vigenciaInicio: data('2025-05-01') })).rejects.toThrow(ConflictException);
        expect(prisma.faixairrf.deleteMany).not.toHaveBeenCalled();
    });

    it('atualizar e remover de tabela inexistente dão 404', async () => {
        await expect(service.atualizar(123, dtoValido)).rejects.toThrow(NotFoundException);
        await expect(service.remover(123)).rejects.toThrow(NotFoundException);
    });

    it('remover apaga a versão', async () => {
        await expect(service.remover(2)).resolves.toEqual({ message: 'Tabela IRRF removida com sucesso.' });
        expect(prisma.tabelairrf.delete).toHaveBeenCalledWith({ where: { id: 2 } });
    });

    it('tabela em uso não pode ser alterada nem removida (ponto de integração com o futuro recibo)', async () => {
        jest.spyOn(service, 'tabelaEstaEmUso').mockResolvedValue(true);

        await expect(service.atualizar(1, { ...dtoValido, vigenciaInicio: data('2025-05-01') })).rejects.toThrow('Cadastre uma nova versão');
        await expect(service.remover(1)).rejects.toThrow(BadRequestException);
        expect(prisma.tabelairrf.delete).not.toHaveBeenCalled();
        expect((await service.buscarPorId(1)).editavel).toBe(false);
    });
});
