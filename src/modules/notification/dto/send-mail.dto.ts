import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SendMailDto {
   @ApiProperty({ example: 'user@email.com', description: 'Recipient email address' })
   @IsEmail()
   to: string;

   @ApiProperty({ example: 'Welcome!', description: 'Email subject' })
   @IsNotEmpty()
   subject: string;

   @ApiProperty({ example: 'Hello, this is a test email.', description: 'Email body text' })
   @IsNotEmpty()
   text: string;
}