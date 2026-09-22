-- Memória de Cálculo (rateio de aluguel entre proprietários) e histórico de reajustes de contrato.
-- Este serviço não usa `prisma migrate`; aplique este script uma única vez no banco db_imoveis:
--   npx prisma db execute --file prisma/sql/2026-memoria-calculo-reajuste.sql
-- Gerado com: npx prisma migrate diff --from-config-datasource --to-schema prisma/schema.prisma --script

-- AlterTable
ALTER TABLE `despesa` MODIFY `tipo` ENUM('ALUGUEL', 'CONDOMINIO', 'IPTU', 'TAXA_BOMBEIRO', 'SEGURO_INCENDIO', 'MANUTENCAO', 'OUTRA') NOT NULL;

-- CreateTable
CREATE TABLE `reajustecontrato` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `idContrato` BIGINT NOT NULL,
    `dataReajuste` DATE NOT NULL,
    `indice` ENUM('IGPM', 'IPCA', 'INCC', 'OUTRO') NOT NULL,
    `percentual` DECIMAL(7, 4) NOT NULL,
    `valorAnterior` DECIMAL(10, 2) NOT NULL,
    `valorNovo` DECIMAL(10, 2) NOT NULL,
    `observacao` VARCHAR(255) NULL,
    `criadoEm` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    INDEX `idx_reajustecontrato_idContrato`(`idContrato`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `memoriacalculo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idContrato` BIGINT NOT NULL,
    `idImovel` INTEGER NOT NULL,
    `competencia` DATE NOT NULL,
    `valorAluguelBase` DECIMAL(10, 2) NOT NULL,
    `idContaBancaria` INTEGER NULL,
    `contaDescricao` VARCHAR(100) NULL,
    `contaBanco` VARCHAR(100) NULL,
    `contaAgencia` VARCHAR(20) NULL,
    `contaNumero` VARCHAR(30) NULL,
    `contaTipoChavePix` VARCHAR(20) NULL,
    `contaChavePix` VARCHAR(140) NULL,
    `contaTitular` VARCHAR(150) NULL,
    `contaDocumentoTitular` VARCHAR(20) NULL,
    `reajusteIndice` ENUM('IGPM', 'IPCA', 'INCC', 'OUTRO') NULL,
    `reajustePercentual` DECIMAL(7, 4) NULL,
    `reajusteValorAnterior` DECIMAL(10, 2) NULL,
    `totalAPagar` DECIMAL(10, 2) NOT NULL,
    `geradoPorUsuarioId` INTEGER NOT NULL,
    `criadoEm` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    INDEX `idx_memoriacalculo_idImovel`(`idImovel`),
    UNIQUE INDEX `uq_memoriacalculo_contrato_competencia`(`idContrato`, `competencia`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `memoriacalculoitem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idMemoriaCalculo` INTEGER NOT NULL,
    `idLocador` BIGINT NOT NULL,
    `nomeLocador` VARCHAR(150) NOT NULL,
    `documentoLocador` VARCHAR(20) NULL,
    `percentualParticipacao` DECIMAL(5, 2) NOT NULL,
    `valorAluguel` DECIMAL(10, 2) NOT NULL,
    `valorReembolsos` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `valorDescontos` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `baseCalculoIrrf` DECIMAL(10, 2) NOT NULL,
    `valorIrrf` DECIMAL(10, 2) NOT NULL,
    `valorAPagar` DECIMAL(10, 2) NOT NULL,
    `detalhesExtras` JSON NULL,
    INDEX `idx_memoriacalculoitem_idMemoriaCalculo`(`idMemoriaCalculo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `reajustecontrato` ADD CONSTRAINT `reajustecontrato_idContrato_fkey` FOREIGN KEY (`idContrato`) REFERENCES `contratolocacao`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `memoriacalculo` ADD CONSTRAINT `memoriacalculo_idContrato_fkey` FOREIGN KEY (`idContrato`) REFERENCES `contratolocacao`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `memoriacalculo` ADD CONSTRAINT `memoriacalculo_idImovel_fkey` FOREIGN KEY (`idImovel`) REFERENCES `imovel`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `memoriacalculoitem` ADD CONSTRAINT `memoriacalculoitem_idMemoriaCalculo_fkey` FOREIGN KEY (`idMemoriaCalculo`) REFERENCES `memoriacalculo`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;
