-- Nome amigável do contrato (ex.: "Contrato Rua Buenos Aires, 113"), para identificá-lo em telas
-- como o dropdown de lançamento de despesas. Nulo nos contratos já existentes; contratos novos
-- sempre recebem um nome, sugerido pelo front na criação.
ALTER TABLE `contratolocacao` ADD COLUMN `nome` VARCHAR(150) NULL;
