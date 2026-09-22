import { Body, Controller, Param, ParseIntPipe, Patch, Post, Get, Delete, Query, UploadedFile, UseGuards, UseInterceptors, BadRequestException, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { DespesasService } from '../services/despesas.service';
import { CriarDespesaDto } from '../dto/criar-despesa.dto';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Response } from 'express';

@ApiTags('Despesas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('despesas')
export class DespesasController {
    constructor(private readonly despesasService: DespesasService) { }

    @Get()
    @Roles('USER', 'ADMIN')
    @ApiOperation({ summary: 'Listar todas as despesas ou filtrar por contrato' })
    @ApiQuery({ name: 'idContrato', required: false, type: Number, description: 'ID do contrato para filtrar as despesas' })
    @ApiResponse({ status: 200, description: 'Lista de despesas retornada com sucesso.' })
    async listar(
        @Query('idContrato') idContrato?: string
    ) {
        const id = idContrato ? parseInt(idContrato, 10) : undefined;
        return await this.despesasService.listarDespesas(id);
    }

    @Get('imovel/:idImovel')
    @Roles('USER', 'ADMIN')
    @ApiOperation({ summary: 'Listar despesas de um imóvel (todos os contratos, inclusive encerrados)' })
    @ApiQuery({ name: 'emAberto', required: false, type: Boolean, description: 'Se true, traz só despesas EM_ABERTO (ou PAGA sem comprovante)' })
    async listarPorImovel(
        @Param('idImovel', ParseIntPipe) idImovel: number,
        @Query('emAberto') emAberto?: string,
    ) {
        return await this.despesasService.listarPorImovel(idImovel, emAberto === 'true');
    }

    @Post()
    @Roles('USER', 'ADMIN')
    @ApiOperation({ summary: 'Lançar uma despesa avulsa para um contrato' })
    @ApiResponse({ status: 201, description: 'Despesa lançada com sucesso sob o status EM_AMERTO' })
    @ApiResponse({ status: 404, description: 'O ID do contrato informado não existe' })
    async cadastrarDespesa(@Body() criarDespesaDto: CriarDespesaDto) {
        return await this.despesasService.criarAvulsa(criarDespesaDto);
    }

    @Patch(':id/pagamento')
    @Roles('USER', 'ADMIN')
    @UseInterceptors(FileInterceptor('file')) //interceptador para lidar com o upload do arquivo
    @ApiOperation({ summary: 'Realizar a baixa financeira anexando o comprovante' })
    @ApiConsumes('multipart/form-data') //habilita o upload e o campo de texto no swagger para teste
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                    description: 'Arquivo do comprovante'
                },
                dataPagamento: {
                    type: 'string',
                    format: 'date',
                    description: 'Data exata em que o pagamento foi efetuado'
                }
            },
            required: ['file', 'dataPagamento']
        }
    })
    @ApiResponse({ status: 200, description: 'Baixa financeira realizada com sucesso.' })
    async liquidarDespesa(
        @Param('id', ParseIntPipe) id: number,
        @UploadedFile() file: Express.Multer.File,
        @Body('dataPagamento') dataPagamentoStr: string
    ) {
        if (!dataPagamentoStr) {
            throw new BadRequestException('A data de pagamento é obrigatória.');
        }

        //Aqui vamos converter a string do formulário multipart para um objeto date real
        const dataPagamento = new Date(dataPagamentoStr);

        return await this.despesasService.liquidarDespesa(id, dataPagamento, file);
    }

    @Get(':id/comprovante')
    @Roles('USER', 'ADMIN')
    @ApiOperation({ summary: 'Baixar o comprovante anexado da despesa' })
    @ApiResponse({ status: 200, description: 'Download do comprovante iniciado.' })
    @ApiResponse({ status: 404, description: 'Comprovante não encontrado.' })
    async baixarComprovante(
        @Param('id', ParseIntPipe) id: number,
        @Res() res: Response //Interceptamos a resposta nativa para forçar o download
    ) {
        const buffer = await this.despesasService.baixarComprovante(id);

        //Configuramos o cabeçalho HTTP para forçar o navegador a fazer o download
        res.set({
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': `attachment; filename="comprovante-despesa-${id}.pdf"`,
        });

        res.send(buffer);
    }

    @Delete(':id')
    @Roles('USER', 'ADMIN')
    @ApiOperation({ summary: 'Cancelar e excluir uma despesa lançada erroneamente' })
    @ApiResponse({ status: 200, description: 'Despesa excluída com sucesso.' })
    @ApiResponse({ status: 400, description: 'Bloqueio: A despesa já está PAGA.' })
    async deletar(@Param('id', ParseIntPipe) id: number) {
        return await this.despesasService.deletarDespesa(id);
    }

    @Delete(':id/hard')
    @Roles('ADMIN')
    @ApiOperation({ summary: 'Excluir definitivamente uma despesa' })
    @ApiResponse({ status: 200, description: 'Despesa removida definitivamente com sucesso.' })
    async removerDefinitivo(@Param('id', ParseIntPipe) id: number) {
        return await this.despesasService.removerDefinitivo(id);
    }
}