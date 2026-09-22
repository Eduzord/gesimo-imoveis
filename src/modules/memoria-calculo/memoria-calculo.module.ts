import { Module } from '@nestjs/common';
import { MemoriaCalculoController } from './controllers/memoria-calculo.controller';
import { MemoriaCalculoService } from './services/memoria-calculo.service';
import { ImoveisModule } from '../imoveis/imoveis.module';
import { ContratosModule } from '../contratos/contratos.module';
import { DespesasModule } from '../despesas/despesas.module';
import { IrrfModule } from '../irrf/irrf.module';

//PrismaService vem do DatabaseModule (global). Reaproveita os services de imóveis/contratos/despesas/IRRF
//já existentes em vez de duplicar as consultas — nenhuma chamada de rede a outro microsserviço é feita
//aqui: nome do locador e conta bancária vêm resolvidos do front, igual ao que a tela do imóvel já faz.
@Module({
    imports: [ImoveisModule, ContratosModule, DespesasModule, IrrfModule],
    controllers: [MemoriaCalculoController],
    providers: [MemoriaCalculoService],
})
export class MemoriaCalculoModule {}
