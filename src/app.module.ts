import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './modules/health/health.module';
import { AuthModule } from './common/auth/auth.module';
import { ImoveisModule } from './modules/imoveis/imoveis.module';
import { ContratosModule } from './modules/contratos/contratos.module';
import { DespesasModule } from './modules/despesas/despesas.module';
import { IrrfModule } from './modules/irrf/irrf.module';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
  //Importei o DatabaseModule (que contém o Prisma) e o HealthModule.
  //Como o DatabaseModule é @Global(), o HealthService já consegue usar o Prisma automaticamente.
  //O motor do robô é ligado aqui, e o robô vai ficar rodando em background, mesmo que não haja requisições.
  imports: [DatabaseModule, HealthModule, AuthModule, ImoveisModule, ContratosModule, DespesasModule, IrrfModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}