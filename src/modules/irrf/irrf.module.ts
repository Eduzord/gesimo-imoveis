import { Module } from '@nestjs/common';
import { IrrfController } from './controllers/irrf.controller';
import { IrrfService } from './services/irrf.service';

//O PrismaService vem do DatabaseModule, que é global
@Module({
    controllers: [IrrfController],
    providers: [IrrfService],
    exports: [IrrfService], //o futuro módulo de recibos usa IrrfService.calcular
})
export class IrrfModule {}
