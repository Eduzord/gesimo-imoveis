import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class CalcularIrrfDto {
    @ApiProperty({example: 3500, description: 'Base de cálculo: valor tributável já com as deduções permitidas aplicadas pelo chamador (R$). Os dependentes são deduzidos pelo cálculo.'})
    @IsNumber({maxDecimalPlaces: 2})
    @Min(0)
    baseCalculo: number;

    @ApiPropertyOptional({example: 4000, description: 'Rendimento tributável BRUTO, antes das deduções (R$). Decide se o redutor se aplica e o valor da redução. Se omitido, usa a própria baseCalculo (como se não houvesse outras deduções). Não pode ser menor que a baseCalculo.'})
    @IsOptional()
    @IsNumber({maxDecimalPlaces: 2})
    @Min(0)
    rendimentoTributavel?: number;

    @ApiProperty({example: '2026-03-10', description: 'Data de competência/pagamento. Define QUAL versão da tabela é usada; não é a data de hoje.'})
    @Type(() => Date)
    @IsDate()
    dataCompetencia: Date;

    @ApiPropertyOptional({example: 1, description: 'Número de dependentes (padrão 0)'})
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(50)
    numeroDependentes?: number;
}
