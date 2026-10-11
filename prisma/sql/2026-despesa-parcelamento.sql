-- Metadados de parcelamento na despesa (ex.: IPTU em 10x). Nulos para uma despesa avulsa comum.
ALTER TABLE `despesa` ADD COLUMN `grupoParcelamento` VARCHAR(36) NULL,
    ADD COLUMN `numeroParcela` INTEGER NULL,
    ADD COLUMN `totalParcelas` INTEGER NULL;

CREATE INDEX `idx_despesa_grupoParcelamento` ON `despesa`(`grupoParcelamento`);
