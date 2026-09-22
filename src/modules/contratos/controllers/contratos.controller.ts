import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ContratosService } from '../services/contratos.service';
import { CriarContratoDto } from '../dto/criar-contrato.dto';
import { AtualizarContratoDto } from '../dto/atualizar-contrato.dto';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';

@ApiTags('Contratos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('contratos')

export class ContratosController{
    constructor(private readonly contratosService: ContratosService) {}

    @Post()
    @Roles('USER', 'ADMIN')
    @ApiOperation({summary: 'Criar um novo contrato de locação'})
    @ApiResponse({status: 201, description: 'Contrato criado e imóvel atualizado para ALUGADO'})
    @ApiResponse({status: 400, description: 'O imóvel selecionado não está disponível para locação'})
    @ApiResponse({status: 404, description: 'O ID do imóvel não existe no catálogo'})
    async criarContrato(@Body() criarContratoDto: CriarContratoDto) {
        return await this.contratosService.criar(criarContratoDto);
    }

    @Get()
    @Roles('USER', 'ADMIN')
    @ApiOperation({summary: 'Listar os contratos da imobiliária', description: 'Aceita filtros opcionais por imóvel, locatário e locador.'})
    @ApiQuery({name: 'idImovel', required: false, type: Number})
    @ApiQuery({name: 'idLocatario', required: false, type: Number})
    @ApiQuery({name: 'idLocador', required: false, type: Number})
    async listarContratos(
        @Query('idImovel', new ParseIntPipe({optional: true})) idImovel?: number,
        @Query('idLocatario', new ParseIntPipe({optional: true})) idLocatario?: number,
        @Query('idLocador', new ParseIntPipe({optional: true})) idLocador?: number,
    ){
        return await this.contratosService.listarTodos({idImovel, idLocatario, idLocador});
    }

    @Get(':id')
    @Roles('USER', 'ADMIN')
    @ApiOperation({summary: 'Buscar detalhes de um contrato por ID'})
    async buscarUmContrato(@Param('id', ParseIntPipe) id: number){
        return await this.contratosService.buscarPorId(id)
    }

    @Patch(':id/arquivo')
    @Roles('USER', 'ADMIN')
    @UseInterceptors(FileInterceptor('file')) //Esse comando diz para o NestJS procurar um arquivo no campo 'file'
    @ApiOperation({summary: 'Fazer upload do PDF digitalizado do contrato'})
    @ApiConsumes('multipart/form-data') //Altera o swagger para mostrar um botão de upload de arquivo
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                    description: 'Arquivo PDF digitalizado'
                },
            },
        },
    })
    @ApiResponse({status: 200, description: 'Arquivo salvo com sucesso no banco de dados'})
    async uploadContrato(
        @Param('id', ParseIntPipe) id: number,
        @UploadedFile() file: Express.Multer.File
    ) {
        return await this.contratosService.uploadDocumento(id, file);
    }

    @Patch(':id/dados')
    @Roles('USER', 'ADMIN')
    @ApiOperation({summary: 'Atualizar dados financeiros, data ou inquilinos de um contrato ativo'})
    @ApiResponse({status: 200, description: 'Dados do contrato atualizados com sucesso.'})
    async atualizarDadosContrato(
        @Param('id', ParseIntPipe) id: number,
        @Body() atualizarContratoDto: AtualizarContratoDto
    ) {
        return await this.contratosService.atualizarDados(id, atualizarContratoDto)
    }

    @Patch(':id/rescisao')
    @Roles('USER', 'ADMIN')
    @ApiOperation({summary: 'Rescindir/Encerrar um contrato de locação ativo'})
    @ApiResponse({status: 200, description: 'Contrato encerrado e imóvel liberado com o status DISPONIVEL'})
    async rescindirContrato(@Param('id', ParseIntPipe) id:number){
        return await this.contratosService.rescindir(id);
    }

    @Delete(':id/hard')
    @Roles('ADMIN')
    @ApiOperation({summary: 'Excluir definitivamente um contrato do sistema'})
    async removerContratoDefinitivo(@Param('id', ParseIntPipe) id: number){
        return await this.contratosService.removerDefinitivo(id);
    }
}