import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from './entities/session.entity';
import { Client } from '../client/entities/client.entity';
import { InitiatePaymentDto } from './dto/initiate-payment.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';
import { InvalidSessionException } from './exceptions/invalid-session.exception';
import { generateToken } from '../../common/utils/token-generator';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class PaymentService {
   constructor(
      @InjectRepository(Session)
      private readonly sessionRepo: Repository<Session>,
      @InjectRepository(Client)
      private readonly clientRepo: Repository<Client>,
      private readonly notificationService: NotificationService,
   ) { }

   async initiatePayment(dto: InitiatePaymentDto) {
      const client = await this.clientRepo.findOne({
         where: { document: dto.document, phone: dto.phone },
      });

      if (!client || client.balance < dto.amount) {
         throw new InvalidSessionException();
      }

      const token = generateToken();

      const session = this.sessionRepo.create({
         document: dto.document,
         amount: dto.amount,
         token,
      });

      const savedSession = await this.sessionRepo.save(session);

      // Simulating email sending
      console.log(`Token sent to email: ${client.email} -> ${token}`);
      await this.notificationService.sendMail({
         to: client.email,
         subject: 'Your payment confirmation code',
         text: `Your confirmation token is: ${token}`,
      });

      return {
         success: true,
         message: 'Token sent to registered email',
         sessionId: savedSession.id,
      };
   }

   async confirmPayment(dto: ConfirmPaymentDto) {
      const session = await this.sessionRepo.findOne({
         where: { id: dto.sessionId, token: dto.token, confirmed: false },
      });

      if (!session) {
         throw new InvalidSessionException();
      }

      const client = await this.clientRepo.findOne({
         where: { document: session.document },
      });

      if (!client || client.balance < session.amount) {
         throw new InvalidSessionException();
      }

      client.balance -= session.amount;
      session.confirmed = true;

      await this.clientRepo.save(client);
      await this.sessionRepo.save(session);

      return {
         success: true,
         message: 'Payment confirmed and balance updated',
         remainingBalance: client.balance,
      };
   }
}
