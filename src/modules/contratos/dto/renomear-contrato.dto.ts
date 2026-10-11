import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

// Renomear é uma ação própria (não passa por AtualizarContratoDto/atualizarDados) justamente para
// ficar disponível mesmo em contratos ENCERRADOS ou CANCELADOS — é só um rótulo de identificação,
// não um termo financeiro do contrato, então não faz sentido herdar a trava "só contrato ATIVO".
export class RenomearContratoDto {
    @ApiProperty({ example: 'Contrato Rua Buenos Aires, 113' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(150)
    nome: string;
}
