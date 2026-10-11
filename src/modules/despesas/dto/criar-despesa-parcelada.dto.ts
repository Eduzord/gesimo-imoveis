import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, Max, MaxLength, Min } from 'class-validator';
import { tipo_despesa_enum } from '../../../generated/prisma';

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

    @ApiProperty({ example: 1800.0, description: 'Valor TOTAL a ser dividido entre as parcelas' })
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    valorTotal: number;

    @ApiProperty({
        enum: tipo_despesa_enum,
        example: 'IPTU',
        description: 'Tipo de despesa conforme mapeamento do sistema',
    })
    @IsEnum(tipo_despesa_enum)
    @IsNotEmpty()
    tipo: tipo_despesa_enum;

    @ApiProperty({ example: 10, minimum: 2, maximum: 60, description: 'Em quantas parcelas o valor total será dividido' })
    @IsInt()
    @Min(2, { message: 'Um parcelamento precisa de pelo menos 2 parcelas. Para uma única parcela, lance uma despesa avulsa.' })
    @Max(60, { message: 'Não é possível parcelar em mais de 60 vezes.' })
    numeroParcelas: number;

    @ApiProperty({ example: '2026-01-10', description: 'Data de vencimento da 1ª parcela; as demais vencem um mês após a anterior' })
    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    dataPrimeiraParcela: Date;
}
