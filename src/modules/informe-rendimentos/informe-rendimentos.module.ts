import { Module } from '@nestjs/common';
import { InformeRendimentosController } from './controllers/informe-rendimentos.controller';
import { InformeRendimentosService } from './services/informe-rendimentos.service';
import { ImoveisModule } from '../imoveis/imoveis.module';
import { ContratosModule } from '../contratos/contratos.module';
import { MemoriaCalculoModule } from '../memoria-calculo/memoria-calculo.module';

//Reaproveita o MemoriaCalculoService (as memórias já geradas são a fonte de dados do informe) em vez
//de duplicar consultas ao Prisma — nenhuma chamada de rede a outro microsserviço é feita aqui: nome e
//documento de locador/locatário/administradora vêm resolvidos do front, mesma decisão da memória.
@Module({
    imports: [ImoveisModule, ContratosModule, MemoriaCalculoModule],
    controllers: [InformeRendimentosController],
    providers: [InformeRendimentosService],
})
export class InformeRendimentosModule {}
