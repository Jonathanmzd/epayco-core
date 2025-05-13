import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class RegisterClientDto {
  @ApiProperty({ example: '1000000000', description: 'Client document', uniqueItems: true })
  @IsNotEmpty()
  document: string;

  @ApiProperty({ example: 'nombre cliente', description: 'Client name' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'emailcliente@gmail.com', description: 'Client email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '3172345678', description: 'Client phone' })
  @IsNotEmpty()
  phone: string;
}
