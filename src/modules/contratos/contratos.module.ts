import { Module } from '@nestjs/common';
import { ContratosController } from './controllers/contratos.controller';
import { ContratosService } from './services/contratos.service';
import { PrismaService } from '../../database/prisma.service';
import { Prisma } from 'src/generated/prisma';

@Module({
    controllers: [ContratosController],
    providers: [ContratosService, PrismaService],
    exports: [ContratosService], //o módulo de memória de cálculo lê o contrato ativo do imóvel
})

export class ContratosModule{}