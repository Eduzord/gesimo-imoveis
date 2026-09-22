-- Tabelas do módulo IRRF (tabela progressiva versionada por vigência).
-- Este serviço não usa `prisma migrate`; aplique este script uma única vez no banco db_imoveis:
--   npx prisma db execute --file prisma/sql/2026-irrf-tabelas.sql
-- Gerado com: npx prisma migrate diff --from-config-datasource --to-schema prisma/schema.prisma --script
-- Nenhum valor fiscal é carregado aqui: o ADMIN cadastra as tabelas pela tela "Gerenciar IRRF".

-- CreateTable
CREATE TABLE `tabelairrf` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vigenciaInicio` DATE NOT NULL,
    `descricao` VARCHAR(255) NULL,
    `deducaoDependente` DECIMAL(10, 2) NOT NULL,
    `redutorLimiteIsencao` DECIMAL(10, 2) NULL,
    `redutorLimiteSuperior` DECIMAL(10, 2) NULL,
    `redutorConstante` DECIMAL(10, 2) NULL,
    `redutorCoeficiente` DECIMAL(10, 6) NULL,
    `criadoEm` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizadoEm` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `uq_tabelairrf_vigenciaInicio`(`vigenciaInicio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `faixairrf` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idTabela` INTEGER NOT NULL,
    `ordem` INTEGER NOT NULL,
    `valorDe` DECIMAL(10, 2) NOT NULL,
    `valorAte` DECIMAL(10, 2) NULL,
    `aliquota` DECIMAL(5, 2) NOT NULL,
    `parcelaADeduzir` DECIMAL(10, 2) NOT NULL,

    UNIQUE INDEX `uq_faixairrf_tabela_ordem`(`idTabela`, `ordem`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `faixairrf` ADD CONSTRAINT `faixairrf_idTabela_fkey` FOREIGN KEY (`idTabela`) REFERENCES `tabelairrf`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;
