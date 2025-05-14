import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { Session } from './entities/session.entity';
import { Client } from '../client/entities/client.entity';
import { NotificationModule } from '../notification/notification.module';

@Module({
  imports: [TypeOrmModule.forFeature([Session, Client]), NotificationModule,],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
