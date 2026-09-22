//Datas de vigência são datas de calendário (coluna DATE), sem horário. Tudo aqui trabalha em UTC
//à meia-noite para que a comparação não dependa do fuso do servidor.

const DIA_EM_MS = 24 * 60 * 60 * 1000;

export function paraDataUtc(data: Date): Date {
    return new Date(Date.UTC(data.getUTCFullYear(), data.getUTCMonth(), data.getUTCDate()));
}

//"2025-05-01"
export function paraIso(data: Date): string {
    return data.toISOString().slice(0, 10);
}

//"01/05/2025"
export function paraBr(data: Date): string {
    const [ano, mes, dia] = paraIso(data).split('-');
    return `${dia}/${mes}/${ano}`;
}

export function diaAnterior(data: Date): Date {
    return new Date(data.getTime() - DIA_EM_MS);
}

//Interpreta "AAAA-MM-DD" (query string). Devolve null se o formato ou a data forem inválidos.
export function lerDataIso(texto: string): Date | null {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) return null;

    const data = new Date(`${texto}T00:00:00.000Z`);
    return Number.isNaN(data.getTime()) || paraIso(data) !== texto ? null : data;
}

//"Hoje" no calendário brasileiro (o servidor pode estar em UTC e já ser o dia seguinte à noite)
export function dataDeHoje(agora: Date = new Date()): Date {
    const iso = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo' }).format(agora);
    return new Date(`${iso}T00:00:00.000Z`);
}
