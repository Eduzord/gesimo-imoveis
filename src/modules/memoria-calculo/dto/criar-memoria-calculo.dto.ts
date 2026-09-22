import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    ArrayMinSize,
    IsArray,
    IsBoolean,
    IsDate,
    IsEnum,
    IsIn,
    IsInt,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
    Max,
    MaxLength,
    Min,
    ValidateIf,
    ValidateNested,
} from 'class-validator';
import { tipo_despesa_enum } from '../../../generated/prisma';
import { IndiceReajuste } from '../../contratos/dto/aplicar-reajuste.dto';

//O front já resolve nome/documento do locador (mesma chamada que a tela do imóvel já faz hoje);
//aqui só validamos e usamos como texto de exibição — o percentual de participação, fonte de verdade
//de quanto cada um recebe, vem sempre de propriedadeimovel, nunca do que o cliente informar.
export class ProprietarioMemoriaDto {
    @ApiProperty({example: 12, description: 'ID do locador (precisa ser um dos proprietários cadastrados do imóvel)'})
    @IsInt()
    @IsPositive()
    idLocador: number;

    @ApiProperty({example: 'Maria Cidália Gonçalves Meireles'})
    @IsString()
    @MaxLength(150)
    nome: string;

    @ApiPropertyOptional({example: '052.952.527-52', description: 'CPF ou CNPJ, só para exibição no documento'})
    @IsOptional()
    @IsString()
    @MaxLength(20)
    documento?: string;

    @ApiPropertyOptional({example: 0, description: 'Número de dependentes deste locador para fins de IRRF (padrão 0)'})
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(50)
    numeroDependentes?: number;
}

//Uma despesa extra a incluir nesta memória: ou referencia uma despesa EM_ABERTO já cadastrada
//("EXISTENTE"), ou pede para lançar uma despesa nova na hora ("NOVA", vira um registro real na
//tabela de despesas, com status EM_ABERTO, igual a qualquer outra).
export class DespesaExtraMemoriaDto {
    @ApiProperty({enum: ['EXISTENTE', 'NOVA']})
    @IsIn(['EXISTENTE', 'NOVA'])
    origem: 'EXISTENTE' | 'NOVA';

    @ApiPropertyOptional({example: 42, description: 'ID da despesa já cadastrada (quando origem = EXISTENTE)'})
    @ValidateIf((dto) => dto.origem === 'EXISTENTE')
    @IsInt()
    @IsPositive()
    idDespesa?: number;

    @ApiPropertyOptional({enum: tipo_despesa_enum})
    @ValidateIf((dto) => dto.origem === 'NOVA')
    @IsEnum(tipo_despesa_enum)
    tipo?: tipo_despesa_enum;

    @ApiPropertyOptional({maxLength: 255})
    @ValidateIf((dto) => dto.origem === 'NOVA')
    @IsString()
    @MaxLength(255)
    descricao?: string;

    @ApiPropertyOptional({example: 250})
    @ValidateIf((dto) => dto.origem === 'NOVA')
    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive()
    valor?: number;

    @ApiPropertyOptional({example: '2026-07-10'})
    @ValidateIf((dto) => dto.origem === 'NOVA')
    @Type(() => Date)
    @IsDate()
    dataVencimento?: Date;

    @ApiProperty({enum: ['RATEIO', 'LOCADOR_ESPECIFICO'], description: 'RATEIO divide entre todos os proprietários pelo percentual de posse; LOCADOR_ESPECIFICO reembolsa o valor cheio a um só proprietário (ex.: quem pagou o IPTU adiantado)'})
    @IsIn(['RATEIO', 'LOCADOR_ESPECIFICO'])
    aplicacao: 'RATEIO' | 'LOCADOR_ESPECIFICO';

    @ApiPropertyOptional({example: 12, description: 'Obrigatório quando aplicacao = LOCADOR_ESPECIFICO'})
    @ValidateIf((dto) => dto.aplicacao === 'LOCADOR_ESPECIFICO')
    @IsInt()
    @IsPositive()
    idLocadorEspecifico?: number;
}

//Ajuste pontual só para esta memória (não vira despesa, não fica em nenhuma outra tela): um acréscimo
//ou desconto manual no valor a pagar de UM proprietário específico (ex.: adiantamento já recebido).
export class AjusteManualMemoriaDto {
    @ApiProperty({example: 12})
    @IsInt()
    @IsPositive()
    idLocador: number;

    @ApiProperty({enum: ['ACRESCIMO', 'DESCONTO']})
    @IsIn(['ACRESCIMO', 'DESCONTO'])
    tipo: 'ACRESCIMO' | 'DESCONTO';

    @ApiProperty({maxLength: 255, example: 'Adiantamento já recebido em junho'})
    @IsString()
    @MaxLength(255)
    descricao: string;

    @ApiProperty({example: 200})
    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive()
    valor: number;
}

//A conta de depósito é escolhida no catálogo de contas bancárias (outro microsserviço); o front
//resolve os campos de exibição e manda aqui, para ficarem fotografados no documento gerado.
export class ContaBancariaMemoriaDto {
    @ApiPropertyOptional({example: 3, description: 'ID da conta cadastrada, só para referência/auditoria'})
    @IsOptional()
    @IsInt()
    id?: number;

    @ApiPropertyOptional({maxLength: 100})
    @IsOptional()
    @IsString()
    @MaxLength(100)
    descricao?: string;

    @ApiProperty({maxLength: 100, example: 'SANTANDER'})
    @IsString()
    @MaxLength(100)
    banco: string;

    @ApiProperty({maxLength: 20, example: '3458'})
    @IsString()
    @MaxLength(20)
    agencia: string;

    @ApiProperty({maxLength: 30, example: '13.003.981-9'})
    @IsString()
    @MaxLength(30)
    numero: string;

    @ApiPropertyOptional({maxLength: 20, example: 'CNPJ'})
    @IsOptional()
    @IsString()
    @MaxLength(20)
    tipoChavePix?: string;

    @ApiPropertyOptional({maxLength: 140, example: '65.036.038/0001-60'})
    @IsOptional()
    @IsString()
    @MaxLength(140)
    chavePix?: string;

    @ApiProperty({maxLength: 150, example: 'ESTILO ADMINISTRAÇÃO DE IMÓVEIS LTDA.'})
    @IsString()
    @MaxLength(150)
    titular: string;

    @ApiPropertyOptional({maxLength: 20, example: '65.036.038/0001-60'})
    @IsOptional()
    @IsString()
    @MaxLength(20)
    documentoTitular?: string;
}

//Só um retrato do reajuste para aparecer no documento (ex.: "Reajuste em 01-Julho-2026: 3,18%"). Não
//aplica nada: aplicar de fato é PATCH /contratos/:id/reajuste, uma ação própria e auditável.
export class ReajusteMemoriaDto {
    @ApiProperty({enum: IndiceReajuste})
    @IsEnum(IndiceReajuste)
    indice: IndiceReajuste;

    @ApiProperty({example: 3.18})
    @IsNumber({maxDecimalPlaces: 4})
    percentual: number;

    @ApiProperty({example: 12000})
    @IsNumber({maxDecimalPlaces: 2})
    valorAnterior: number;
}

export class CriarMemoriaCalculoDto {
    @ApiProperty({example: 7})
    @IsInt()
    @IsPositive()
    idImovel: number;

    @ApiProperty({example: '2026-07-01', description: 'Mês de competência (qualquer dia do mês serve; só o mês/ano são usados)'})
    @Type(() => Date)
    @IsDate()
    competencia: Date;

    @ApiProperty({type: [ProprietarioMemoriaDto], description: 'Um item por proprietário do imóvel (nome/documento resolvidos pelo front)'})
    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({each: true})
    @Type(() => ProprietarioMemoriaDto)
    proprietarios: ProprietarioMemoriaDto[];

    @ApiPropertyOptional({type: [DespesaExtraMemoriaDto]})
    @IsOptional()
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => DespesaExtraMemoriaDto)
    despesasExtras?: DespesaExtraMemoriaDto[];

    @ApiPropertyOptional({type: [AjusteManualMemoriaDto]})
    @IsOptional()
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => AjusteManualMemoriaDto)
    ajustesManuais?: AjusteManualMemoriaDto[];

    @ApiPropertyOptional({type: ContaBancariaMemoriaDto})
    @IsOptional()
    @ValidateNested()
    @Type(() => ContaBancariaMemoriaDto)
    contaBancaria?: ContaBancariaMemoriaDto;

    @ApiPropertyOptional({type: ReajusteMemoriaDto})
    @IsOptional()
    @ValidateNested()
    @Type(() => ReajusteMemoriaDto)
    reajuste?: ReajusteMemoriaDto;

    @ApiPropertyOptional({default: false, description: 'Se já existir uma memória para este contrato+mês, true substitui a anterior; false (padrão) devolve a já existente sem recalcular'})
    @IsOptional()
    @IsBoolean()
    regerar?: boolean;
}
