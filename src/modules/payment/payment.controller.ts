import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { InitiatePaymentDto } from './dto/initiate-payment.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('initiate')
  initiate(@Body() dto: InitiatePaymentDto) {
    return this.paymentService.initiatePayment(dto);
  }

  @Post('confirm')
  confirm(@Body() dto: ConfirmPaymentDto) {
    return this.paymentService.confirmPayment(dto);
  }
}
