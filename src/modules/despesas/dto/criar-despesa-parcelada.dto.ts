import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    ArrayMaxSize,
    ArrayMinSize,
    IsArray,
    IsDate,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsString,
    MaxLength,
    ValidateNested,
} from 'class-validator';
import { tipo_despesa_enum } from '../../../generated/prisma';

// Uma parcela do lançamento: o front já sugere valor e vencimento (dividindo o total em partes
// iguais), mas o usuário pode ajustar qualquer uma antes de confirmar — por isso o que chega aqui é
// sempre a lista JÁ DEFINIDA de parcelas, nunca "valor total + quantidade" para o backend dividir.
export class ParcelaLancamentoDto {
    @ApiProperty({ example: 180.0, description: 'Valor desta parcela' })
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    valor: number;

    @ApiProperty({ example: '2026-01-10', description: 'Data de vencimento desta parcela' })
    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    dataVencimento: Date;
}

// Lança várias parcelas de uma vez (ex.: IPTU em 10x): cada parcela nasce como uma despesa EM_ABERTO
// independente, com seu próprio vencimento, pronta para ser paga e incluída na Memória de Cálculo do
// mês em que vencer — exatamente como qualquer outra despesa avulsa.
export class CriarDespesaParceladaDto {
    @ApiProperty({ example: 1, description: 'ID do contrato de locação vinculado' })
    @IsNumber()
    @IsNotEmpty()
    idContratoLocacao: number;

    @ApiProperty({ example: 'IPTU 2026', description: 'Descrição-base do lançamento (o número de cada parcela é adicionado automaticamente, ex.: "IPTU 2026 (3/10)")' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    descricao: string;

    @ApiProperty({
        enum: tipo_despesa_enum,
        example: 'IPTU',
        description: 'Tipo de despesa conforme mapeamento do sistema',
    })
    @IsEnum(tipo_despesa_enum)
    @IsNotEmpty()
    tipo: tipo_despesa_enum;

    @ApiProperty({
        type: [ParcelaLancamentoDto],
        minItems: 2,
        maxItems: 60,
        description: 'Uma entrada por parcela, na ordem em que vencem (a numeração "1/N", "2/N"... segue essa ordem)',
    })
    @IsArray()
    @ArrayMinSize(2, { message: 'Um parcelamento precisa de pelo menos 2 parcelas. Para uma única parcela, lance uma despesa avulsa.' })
    @ArrayMaxSize(60, { message: 'Não é possível parcelar em mais de 60 vezes.' })
    @ValidateNested({ each: true })
    @Type(() => ParcelaLancamentoDto)
    parcelas: ParcelaLancamentoDto[];
}
