import { Controller, Post, Body } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { RechargeWalletDto } from './dto/recharge-wallet.dto';
import { CheckBalanceDto } from './dto/check-balance.dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('recharge')
  recharge(@Body() dto: RechargeWalletDto) {
    return this.walletService.rechargeWallet(dto);
  }

  @Post('balance')
  check(@Body() dto: CheckBalanceDto) {
    return this.walletService.checkBalance(dto);
  }
}
