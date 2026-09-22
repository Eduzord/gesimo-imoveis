import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNumber, IsOptional, IsPositive, IsString, MaxLength, ValidateIf } from 'class-validator';

export enum IndiceReajuste {
    IGPM = 'IGPM',
    IPCA = 'IPCA',
    INCC = 'INCC',
    OUTRO = 'OUTRO',
}

//Informe UM dos dois: "percentual" (o sistema calcula o novo valor) ou "valorNovo" (o sistema calcula
//o percentual equivalente, para o histórico ficar completo). Nunca os dois nem nenhum dos dois.
export class AplicarReajusteDto {
    @ApiProperty({enum: IndiceReajuste, example: 'IGPM', description: 'Índice usado no reajuste, só para registro (o sistema não consulta nenhuma tabela de índice)'})
    @IsEnum(IndiceReajuste)
    indice: IndiceReajuste;

    @ApiPropertyOptional({example: 3.18, description: 'Variação percentual do índice (7.5 = 7,5%). Informe isto OU valorNovo.'})
    @ValidateIf((dto) => dto.valorNovo === undefined)
    @IsNumber({maxDecimalPlaces: 4})
    percentual?: number;

    @ApiPropertyOptional({example: 12381.32, description: 'Novo valor do aluguel já calculado (R$). Informe isto OU percentual.'})
    @ValidateIf((dto) => dto.percentual === undefined)
    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive()
    valorNovo?: number;

    @ApiPropertyOptional({example: '2026-07-01', description: 'Data em que o reajuste passa a valer. Padrão: a data de reajuste prevista no contrato, ou hoje.'})
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    dataReajuste?: Date;

    @ApiPropertyOptional({maxLength: 255})
    @IsOptional()
    @IsString()
    @MaxLength(255)
    observacao?: string;
}
