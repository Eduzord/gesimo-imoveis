import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    ArrayMaxSize,
    ArrayMinSize,
    IsArray,
    IsDate,
    IsNumber,
    IsOptional,
    IsString,
    Max,
    MaxLength,
    Min,
    ValidateNested,
} from 'class-validator';

export class FaixaIrrfDto {
    @ApiPropertyOptional({example: 2428.8, nullable: true, description: 'Limite superior da faixa (inclusivo). Deixe vazio na última faixa, que não tem teto. O limite inferior é calculado automaticamente.'})
    @IsOptional()
    @IsNumber({maxDecimalPlaces: 2})
    @Min(0.01)
    valorAte?: number | null;

    @ApiProperty({example: 7.5, description: 'Alíquota em percentual (7.5 = 7,5%)'})
    @IsNumber({maxDecimalPlaces: 2})
    @Min(0)
    @Max(100)
    aliquota: number;

    @ApiProperty({example: 182.16, description: 'Parcela a deduzir (R$)'})
    @IsNumber({maxDecimalPlaces: 2})
    @Min(0)
    parcelaADeduzir: number;
}

export class RedutorIrrfDto {
    @ApiProperty({description: 'Até este valor o imposto é totalmente zerado (R$)'})
    @IsNumber({maxDecimalPlaces: 2})
    @Min(0)
    limiteIsencao: number;

    @ApiProperty({description: 'Acima deste valor o redutor deixa de valer (R$)'})
    @IsNumber({maxDecimalPlaces: 2})
    @Min(0)
    limiteSuperior: number;

    @ApiProperty({description: 'Constante da fórmula de redução: redução = constante - coeficiente x rendimento tributável (bruto, antes das deduções)'})
    @IsNumber({maxDecimalPlaces: 2})
    @Min(0)
    constante: number;

    @ApiProperty({description: 'Coeficiente da fórmula de redução (até 6 casas decimais)'})
    @IsNumber({maxDecimalPlaces: 6})
    @Min(0)
    coeficiente: number;
}

export class CriarTabelaIrrfDto {
    @ApiProperty({example: '2025-05-01', description: 'Data a partir da qual esta versão da tabela vale. Vale até o dia anterior ao início da próxima versão.'})
    @Type(() => Date)
    @IsDate()
    vigenciaInicio: Date;

    @ApiPropertyOptional({example: 'Tabela mensal - Lei XXXX/AAAA'})
    @IsOptional()
    @IsString()
    @MaxLength(255)
    descricao?: string;

    @ApiProperty({example: 189.59, description: 'Dedução por dependente (R$)'})
    @IsNumber({maxDecimalPlaces: 2})
    @Min(0)
    deducaoDependente: number;

    @ApiProperty({type: [FaixaIrrfDto], description: 'Faixas em ordem crescente; a última não tem limite superior'})
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @ValidateNested({each: true})
    @Type(() => FaixaIrrfDto)
    faixas: FaixaIrrfDto[];

    @ApiPropertyOptional({type: RedutorIrrfDto, nullable: true, description: 'Redutor opcional (isenção até um teto e redução gradual acima dele)'})
    @IsOptional()
    @ValidateNested()
    @Type(() => RedutorIrrfDto)
    redutor?: RedutorIrrfDto | null;
}
