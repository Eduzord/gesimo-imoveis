import { dataDeHoje, diaAnterior, lerDataIso, paraBr, paraDataUtc, paraIso } from './datas';

describe('datas de vigência', () => {
    it('formata em ISO e em pt-BR', () => {
        const data = new Date('2025-05-01T00:00:00.000Z');

        expect(paraIso(data)).toBe('2025-05-01');
        expect(paraBr(data)).toBe('01/05/2025');
    });

    it('dia anterior atravessa virada de mês e de ano', () => {
        expect(paraIso(diaAnterior(new Date('2026-01-01T00:00:00.000Z')))).toBe('2025-12-31');
        expect(paraIso(diaAnterior(new Date('2026-03-01T00:00:00.000Z')))).toBe('2026-02-28');
    });

    it('paraDataUtc descarta o horário', () => {
        expect(paraIso(paraDataUtc(new Date('2025-05-01T13:45:00.000Z')))).toBe('2025-05-01');
    });

    it('lerDataIso aceita só AAAA-MM-DD válido', () => {
        expect(lerDataIso('2026-03-10')).toEqual(new Date('2026-03-10T00:00:00.000Z'));
        expect(lerDataIso('10/03/2026')).toBeNull();
        expect(lerDataIso('2026-02-30')).toBeNull();
        expect(lerDataIso('abc')).toBeNull();
    });

    it('"hoje" usa o calendário de Brasília, não o UTC', () => {
        //01:00 UTC de 02/03 ainda é 22:00 de 01/03 em Brasília
        expect(paraIso(dataDeHoje(new Date('2026-03-02T01:00:00.000Z')))).toBe('2026-03-01');
        expect(paraIso(dataDeHoje(new Date('2026-03-02T12:00:00.000Z')))).toBe('2026-03-02');
    });
});
