import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ImoveisController } from './controllers/imoveis.controller';
import { ImoveisService } from './services/imoveis.service';

//Aqui eu isolei o domínio de imóveis nesse módulo para manter o acoplamento baixo
@Module({
    imports: [HttpModule],
    controllers: [ImoveisController],
    providers: [ImoveisService],
    exports: [ImoveisService], //o módulo de memória de cálculo lê o imóvel e seus proprietários
})

export class ImoveisModule {}