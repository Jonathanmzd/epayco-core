import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RechargeWalletDto {
  @ApiProperty({ default: '1000000000' })
  @IsNotEmpty()
  document: string;

  @ApiProperty({ default: '3172345678' })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ default: 10000 })
  @IsNumber()
  amount: number;
}