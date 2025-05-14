import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class InitiatePaymentDto {
  @ApiProperty({ example: '1000000000', description: 'Client document' })
  @IsNotEmpty()
  document: string;

  @ApiProperty({ example: '3172345678', description: 'Client phone number' })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 100, description: 'Amount to pay' })
  @IsNumber()
  amount: number;
}
