import { Module } from '@nestjs/common';
import { DespesasController } from './controllers/despesas.controller';
import { DespesasService } from './services/despesas.service';
import { PrismaService } from '../../database/prisma.service';
import { DespesasCronService } from '../despesas/services/despesas-cron.service';

@Module({
    controllers: [DespesasController],
    providers: [DespesasService, PrismaService, DespesasCronService],
    exports: [DespesasService], //o módulo de memória de cálculo lança/consulta despesas por ele
})

export class DespesasModule {}