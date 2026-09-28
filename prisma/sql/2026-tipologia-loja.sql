-- Adiciona "LOJA" ao enum de tipologia do imóvel.
ALTER TABLE `imovel` MODIFY `tipologia` ENUM('CASA', 'APARTAMENTO', 'TERRENO', 'SALA_COMERCIAL', 'GALPAO', 'LOJA') NOT NULL;
