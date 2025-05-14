import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ConfirmPaymentDto {
  @ApiProperty({ example: 1, description: 'Session ID received during payment initiation' })
  @IsNotEmpty()
  sessionId: number;

  @ApiProperty({ example: '123456', description: '6-digit token sent to the user' })
  @IsNotEmpty()
  token: string;
}
