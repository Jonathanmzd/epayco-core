import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { SendMailDto } from './dto/send-mail.dto';
import { mailConfig } from './config/mail.config';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);
  private transporter = nodemailer.createTransport(mailConfig);

  async sendMail(dto: SendMailDto) {
    try {
      const info = await this.transporter.sendMail({
        from: '"Wallet System" <no-reply@wallet.com>',
        to: dto.to,
        subject: dto.subject,
        text: dto.text,
      });

      this.logger.log(`Email sent: ${info.messageId}`);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      this.logger.warn(`Email send failed. Falling back to console.log`);
      console.log(`Token sent to email: ${dto.to} -> ${dto.text}`);
      return { success: false, fallback: true };
    }
  }
}
