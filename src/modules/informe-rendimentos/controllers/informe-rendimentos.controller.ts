import { BadRequestException, Controller, Get, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import type { Response } from 'express';
import { InformeRendimentosService } from '../services/informe-rendimentos.service';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';

@ApiTags('Informe de Rendimentos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('informe-rendimentos')
export class InformeRendimentosController {
    constructor(private readonly informeRendimentosService: InformeRendimentosService) {}

    //Lê e valida os 3 parâmetros obrigatórios, usados tanto na prévia (JSON) quanto no PDF.
    private lerFiltros(idImovel?: string, idLocador?: string, ano?: string) {
        const idImovelNum = Number(idImovel);
        const idLocadorNum = Number(idLocador);
        const anoNum = Number(ano);

        if (!idImovel || Number.isNaN(idImovelNum)) throw new BadRequestException('Informe um "idImovel" válido.');
        if (!idLocador || Number.isNaN(idLocadorNum)) throw new BadRequestException('Informe um "idLocador" válido.');
        if (!ano || Number.isNaN(anoNum) || anoNum < 2000 || anoNum > 2100) throw new BadRequestException('Informe um "ano" válido.');

        return { idImovelNum, idLocadorNum, anoNum };
    }

    @Get()
    @Roles('USER', 'ADMIN')
    @ApiOperation({ summary: 'Prévia (JSON) do Informe de Rendimentos de um locador, num imóvel, num ano' })
    @ApiQuery({ name: 'idImovel', required: true, type: Number })
    @ApiQuery({ name: 'idLocador', required: true, type: Number })
    @ApiQuery({ name: 'ano', required: true, type: Number, example: 2026 })
    async montarInforme(
        @Query('idImovel') idImovel: string,
        @Query('idLocador') idLocador: string,
        @Query('ano') ano: string,
    ) {
        const { idImovelNum, idLocadorNum, anoNum } = this.lerFiltros(idImovel, idLocador, ano);
        return await this.informeRendimentosService.montarInforme(idImovelNum, idLocadorNum, anoNum);
    }

    @Get('pdf')
    @Roles('USER', 'ADMIN')
    @ApiOperation({
        summary: 'Baixar o Informe de Rendimentos em PDF',
        description:
            'Nome/documento de locador, locatário e administradora são resolvidos pelo FRONT (vêm de outros microsserviços) e enviados aqui só para exibição/impressão — igual à Memória de Cálculo.',
    })
    @ApiQuery({ name: 'idImovel', required: true, type: Number })
    @ApiQuery({ name: 'idLocador', required: true, type: Number })
    @ApiQuery({ name: 'ano', required: true, type: Number, example: 2026 })
    @ApiQuery({ name: 'nomeLocador', required: true, type: String })
    @ApiQuery({ name: 'documentoLocador', required: false, type: String })
    @ApiQuery({ name: 'nomeLocatario', required: false, type: String })
    @ApiQuery({ name: 'documentoLocatario', required: false, type: String })
    @ApiQuery({ name: 'nomeAdministradora', required: false, type: String })
    @ApiQuery({ name: 'documentoAdministradora', required: false, type: String })
    async baixarPdf(
        @Query('idImovel') idImovel: string,
        @Query('idLocador') idLocador: string,
        @Query('ano') ano: string,
        @Query('nomeLocador') nomeLocador: string,
        @Query('documentoLocador') documentoLocador: string | undefined,
        @Query('nomeLocatario') nomeLocatario: string | undefined,
        @Query('documentoLocatario') documentoLocatario: string | undefined,
        @Query('nomeAdministradora') nomeAdministradora: string | undefined,
        @Query('documentoAdministradora') documentoAdministradora: string | undefined,
        @Res() res: Response,
    ) {
        const { idImovelNum, idLocadorNum, anoNum } = this.lerFiltros(idImovel, idLocador, ano);
        if (!nomeLocador) throw new BadRequestException('Informe o "nomeLocador".');

        const { buffer, nomeArquivo } = await this.informeRendimentosService.gerarPdf(idImovelNum, idLocadorNum, anoNum, {
            locador: { nome: nomeLocador, documento: documentoLocador },
            locatario: nomeLocatario ? { nome: nomeLocatario, documento: documentoLocatario } : null,
            administradora: nomeAdministradora ? { nome: nomeAdministradora, documento: documentoAdministradora } : null,
        });

        //Mesma estratégia de nome de arquivo com acento da Memória de Cálculo (RFC 5987): "filename"
        //plain vira um fallback ASCII, "filename*" carrega o nome real em UTF-8.
        const nomeArquivoAscii = nomeArquivo.normalize('NFD').replace(/[̀-ͯ]/g, '');
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${nomeArquivoAscii}"; filename*=UTF-8''${encodeURIComponent(nomeArquivo)}`,
        });
        res.send(buffer);
    }
}
