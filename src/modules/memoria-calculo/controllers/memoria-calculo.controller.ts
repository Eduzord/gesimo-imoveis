import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import type { Response } from 'express';
import { MemoriaCalculoService } from '../services/memoria-calculo.service';
import { CriarMemoriaCalculoDto } from '../dto/criar-memoria-calculo.dto';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';
import { UsuarioLogado } from '../../../common/decorators/usuario-logado.decorator';
import type { UsuarioAutenticado } from '../../../common/interfaces/usuario-autenticado.interface';

@ApiTags('Memória de Cálculo')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('memoria-calculo')
export class MemoriaCalculoController {
    constructor(private readonly memoriaCalculoService: MemoriaCalculoService) {}

    //Declarada antes de ':id' para 'imovel' não ser interpretado como um ID
    @Get('imovel/:idImovel/preparacao')
    @Roles('USER', 'ADMIN')
    @ApiOperation({
        summary: 'Dados para montar a tela de geração da memória de cálculo',
        description: 'Contrato ativo, proprietários (percentual), despesas em aberto do imóvel e a memória já gerada para o mês, se houver.',
    })
    @ApiQuery({name: 'competencia', required: true, example: '2026-07-01'})
    async montarPreparacao(
        @Param('idImovel', ParseIntPipe) idImovel: number,
        @Query('competencia') competencia: string,
    ) {
        return await this.memoriaCalculoService.montarPreparacao(idImovel, new Date(competencia));
    }

    @Get('imovel/:idImovel/historico')
    @Roles('USER', 'ADMIN')
    @ApiOperation({summary: 'Listar as memórias de cálculo já geradas para um imóvel', description: 'Da competência mais recente para a mais antiga.'})
    async listarPorImovel(@Param('idImovel', ParseIntPipe) idImovel: number) {
        return await this.memoriaCalculoService.listarPorImovel(idImovel);
    }

    @Post()
    @Roles('USER', 'ADMIN')
    @ApiOperation({
        summary: 'Gerar (ou reutilizar) a memória de cálculo de um mês',
        description: 'Se já existir uma memória para este contrato+mês e "regerar" não for true, devolve a existente sem recalcular.',
    })
    @ApiResponse({status: 201, description: 'Memória gerada (ou já existente devolvida)'})
    @ApiResponse({status: 400, description: 'Sem contrato ativo, proprietário sem dados, ou despesa/ajuste inválido'})
    async gerar(@Body() dto: CriarMemoriaCalculoDto, @UsuarioLogado() usuario: UsuarioAutenticado) {
        return await this.memoriaCalculoService.gerar(dto, usuario.id);
    }

    @Get(':id')
    @Roles('USER', 'ADMIN')
    @ApiOperation({summary: 'Buscar uma memória de cálculo já gerada'})
    async buscarPorId(@Param('id', ParseIntPipe) id: number) {
        return await this.memoriaCalculoService.buscarPorId(id);
    }

    @Get(':id/excel')
    @Roles('USER', 'ADMIN')
    @ApiOperation({summary: 'Baixar a memória de cálculo em Excel (.xlsx)'})
    async baixarExcel(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const { buffer, nomeArquivo } = await this.memoriaCalculoService.gerarExcel(id);

        //"nomeArquivo" tem acentos e espaço (ex.: "Memória Cálculo Julho 2026.xlsx"): o "filename" plain
        //vira um fallback só-ASCII, e "filename*" (RFC 5987) carrega o nome real em UTF-8.
        const nomeArquivoAscii = nomeArquivo.normalize('NFD').replace(/[̀-ͯ]/g, '');
        res.set({
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition': `attachment; filename="${nomeArquivoAscii}"; filename*=UTF-8''${encodeURIComponent(nomeArquivo)}`,
        });
        res.send(buffer);
    }
}
