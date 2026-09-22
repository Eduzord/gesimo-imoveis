import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IrrfService } from '../services/irrf.service';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';
import { CriarTabelaIrrfDto } from '../dto/criar-tabela-irrf.dto';
import { AtualizarTabelaIrrfDto } from '../dto/atualizar-tabela-irrf.dto';
import { CalcularIrrfDto } from '../dto/calcular-irrf.dto';
import { lerDataIso } from '../calculo/datas';

@ApiTags('IRRF')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('irrf')
export class IrrfController {
    constructor(private readonly irrfService: IrrfService) {}

    @Get('tabelas')
    @Roles('USER', 'ADMIN')
    @ApiOperation({summary: 'Listar as versões da tabela IRRF', description: 'Da mais recente para a mais antiga, com faixas, situação (VIGENTE/FUTURA/ENCERRADA) e fim de vigência derivado.'})
    async listarTabelas() {
        return await this.irrfService.listar();
    }

    //Declarada antes de 'tabelas/:id' para que 'vigente' não seja interpretado como ID
    @Get('tabelas/vigente')
    @Roles('USER', 'ADMIN')
    @ApiOperation({summary: 'Buscar a tabela vigente', description: 'Sem o parâmetro "data", usa o dia de hoje.'})
    @ApiQuery({name: 'data', required: false, example: '2026-03-10', description: 'AAAA-MM-DD'})
    @ApiResponse({status: 404, description: 'Não há tabela vigente na data informada'})
    async buscarVigente(@Query('data') data?: string) {
        if (data === undefined || data === '') {
            return await this.irrfService.buscarVigente();
        }

        const dataLida = lerDataIso(data);
        if (!dataLida) {
            throw new BadRequestException('Data inválida. Use o formato AAAA-MM-DD.');
        }

        return await this.irrfService.buscarVigente(dataLida);
    }

    @Get('tabelas/:id')
    @Roles('USER', 'ADMIN')
    @ApiOperation({summary: 'Buscar uma versão da tabela IRRF por ID'})
    async buscarTabela(@Param('id', ParseIntPipe) id: number) {
        return await this.irrfService.buscarPorId(id);
    }

    @Post('tabelas')
    @Roles('ADMIN')
    @ApiOperation({summary: 'Cadastrar uma nova versão da tabela IRRF', description: 'A versão anterior passa a valer até o dia anterior ao início desta. O usuário informa só o limite "Até" de cada faixa.'})
    @ApiBody({type: CriarTabelaIrrfDto})
    @ApiResponse({status: 201, description: 'Tabela cadastrada'})
    @ApiResponse({status: 400, description: 'Faixas inválidas'})
    @ApiResponse({status: 409, description: 'Já existe uma tabela com essa data de início'})
    async criarTabela(@Body() criarTabelaIrrfDto: CriarTabelaIrrfDto) {
        return await this.irrfService.criar(criarTabelaIrrfDto);
    }

    @Patch('tabelas/:id')
    @Roles('ADMIN')
    @ApiOperation({summary: 'Substituir os dados e as faixas de uma versão da tabela IRRF'})
    @ApiBody({type: AtualizarTabelaIrrfDto})
    async atualizarTabela(
        @Param('id', ParseIntPipe) id: number,
        @Body() atualizarTabelaIrrfDto: AtualizarTabelaIrrfDto,
    ) {
        return await this.irrfService.atualizar(id, atualizarTabelaIrrfDto);
    }

    @Delete('tabelas/:id')
    @Roles('ADMIN')
    @ApiOperation({summary: 'Excluir uma versão da tabela IRRF'})
    async removerTabela(@Param('id', ParseIntPipe) id: number) {
        return await this.irrfService.remover(id);
    }

    @Post('calcular')
    @Roles('USER', 'ADMIN')
    @ApiOperation({
        summary: 'Calcular o IRRF de uma base de cálculo',
        description: 'Usa a tabela vigente na DATA DE COMPETÊNCIA informada. Devolve também a faixa e o id da tabela usados, para gravar no recibo (auditoria). Não decide se a retenção se aplica ao caso.',
    })
    @ApiBody({type: CalcularIrrfDto})
    @ApiResponse({status: 404, description: 'Não há tabela vigente para a competência informada'})
    async calcular(@Body() calcularIrrfDto: CalcularIrrfDto) {
        return await this.irrfService.calcular(calcularIrrfDto);
    }
}
