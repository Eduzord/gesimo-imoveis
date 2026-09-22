require('dotenv/config');
const { PrismaClient } = require('../dist/generated/prisma');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  // ---------------------------------------------------------
  // Endereços
  // ---------------------------------------------------------
  const enderecoCasa = await prisma.endereco.create({
    data: {
      rua: 'Rua das Palmeiras',
      numero: '120',
      bairro: 'Centro',
      cidade: 'Curitiba',
      estado: 'PR',
      cep: '80010-000',
    },
  });

  const enderecoApto = await prisma.endereco.create({
    data: {
      rua: 'Av. Sete de Setembro',
      numero: '4500',
      bairro: 'Batel',
      cidade: 'Curitiba',
      estado: 'PR',
      cep: '80240-000',
    },
  });

  const enderecoSala = await prisma.endereco.create({
    data: {
      rua: 'Rua XV de Novembro',
      numero: '900',
      bairro: 'Centro',
      cidade: 'Curitiba',
      estado: 'PR',
      cep: '80020-310',
    },
  });

  const enderecoTerreno = await prisma.endereco.create({
    data: {
      rua: 'Estrada Rural, KM 5',
      numero: 's/n',
      bairro: 'Zona Rural',
      cidade: 'Almirante Tamandaré',
      estado: 'PR',
      cep: '83501-000',
    },
  });

  const enderecoGalpao = await prisma.endereco.create({
    data: {
      rua: 'Rua Industrial',
      numero: '200',
      bairro: 'Cidade Industrial',
      cidade: 'Curitiba',
      estado: 'PR',
      cep: '81170-000',
    },
  });

  // ---------------------------------------------------------
  // Imóveis (com 1 e com 2 proprietários)
  // ---------------------------------------------------------
  const casa = await prisma.imovel.create({
    data: {
      idEndereco: enderecoCasa.id,
      inscricaoIPTU: 'IPTU-0001',
      metragem: '120',
      classificacao: 'RESIDENCIAL',
      tipologia: 'CASA',
      status: 'DISPONIVEL',
      propriedadeimovel: {
        create: [{ idLocador: 1n, percentualParticipacao: 100 }],
      },
    },
  });

  const apartamento = await prisma.imovel.create({
    data: {
      idEndereco: enderecoApto.id,
      inscricaoIPTU: 'IPTU-0002',
      metragem: '85',
      classificacao: 'RESIDENCIAL',
      tipologia: 'APARTAMENTO',
      status: 'ALUGADO',
      propriedadeimovel: {
        // dois proprietários dividindo o mesmo imóvel
        create: [
          { idLocador: 2n, percentualParticipacao: 60 },
          { idLocador: 3n, percentualParticipacao: 40 },
        ],
      },
    },
  });

  const salaComercial = await prisma.imovel.create({
    data: {
      idEndereco: enderecoSala.id,
      inscricaoIPTU: 'IPTU-0003',
      metragem: '45',
      classificacao: 'COMERCIAL',
      tipologia: 'SALA_COMERCIAL',
      status: 'DISPONIVEL',
      propriedadeimovel: {
        create: [{ idLocador: 2n, percentualParticipacao: 100 }],
      },
    },
  });

  await prisma.imovel.create({
    data: {
      idEndereco: enderecoTerreno.id,
      inscricaoIPTU: 'IPTU-0004',
      metragem: '5000',
      classificacao: 'RURAL',
      tipologia: 'TERRENO',
      status: 'INATIVO',
      propriedadeimovel: {
        create: [{ idLocador: 4n, percentualParticipacao: 100 }],
      },
    },
  });

  await prisma.imovel.create({
    data: {
      idEndereco: enderecoGalpao.id,
      inscricaoIPTU: 'IPTU-0005',
      metragem: '800',
      classificacao: 'INDUSTRIAL',
      tipologia: 'GALPAO',
      status: 'VENDIDO',
      propriedadeimovel: {
        create: [{ idLocador: 2n, percentualParticipacao: 100 }],
      },
    },
  });

  // ---------------------------------------------------------
  // Contratos de locação
  // ---------------------------------------------------------
  const contratoAtivo = await prisma.contratolocacao.create({
    data: {
      idImovel: apartamento.id,
      idLocador: 2n,
      idLocatario: 1n,
      dataInicio: new Date('2025-01-01'),
      valorAluguel: 2500.0,
      status: 'ATIVO',
      comissao: 250.0,
    },
  });

  const contratoEncerrado = await prisma.contratolocacao.create({
    data: {
      idImovel: casa.id,
      idLocador: 1n,
      idLocatario: 3n,
      dataInicio: new Date('2023-06-01'),
      dataFim: new Date('2024-06-01'),
      valorAluguel: 1800.0,
      status: 'ENCERRADO',
      comissao: 180.0,
    },
  });

  // ---------------------------------------------------------
  // Despesas (pagas e em aberto)
  // ---------------------------------------------------------
  await prisma.despesa.create({
    data: {
      idContratoLocacao: contratoAtivo.id,
      descricao: 'Aluguel referente a Março/2026',
      valor: 2500.0,
      tipo: 'ALUGUEL',
      dataVencimento: new Date('2026-03-10'),
      dataPagamento: new Date('2026-03-08'),
      status: 'PAGA',
    },
  });

  await prisma.despesa.create({
    data: {
      idContratoLocacao: contratoAtivo.id,
      descricao: 'Condomínio referente a Março/2026',
      valor: 450.0,
      tipo: 'CONDOMINIO',
      dataVencimento: new Date('2026-03-10'),
      status: 'EM_ABERTO',
    },
  });

  await prisma.despesa.create({
    data: {
      idContratoLocacao: contratoAtivo.id,
      descricao: 'IPTU 2026 - Parcela 3',
      valor: 320.0,
      tipo: 'IPTU',
      dataVencimento: new Date('2026-04-10'),
      status: 'EM_ABERTO',
    },
  });

  await prisma.despesa.create({
    data: {
      idContratoLocacao: contratoEncerrado.id,
      descricao: 'Aluguel referente a Maio/2024',
      valor: 1800.0,
      tipo: 'ALUGUEL',
      dataVencimento: new Date('2024-05-10'),
      dataPagamento: new Date('2024-05-09'),
      status: 'PAGA',
    },
  });

  console.log('Seed concluído: microsservico-imoveis');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
