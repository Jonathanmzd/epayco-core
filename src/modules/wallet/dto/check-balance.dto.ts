import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CheckBalanceDto {
  @ApiProperty({ default: '1000000000' })
  @IsNotEmpty()
  document: string;

  @ApiProperty({ default: '3172345678' })
  @IsNotEmpty()
  phone: string;
}