import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../client/entities/client.entity';
import { RechargeWalletDto } from './dto/recharge-wallet.dto';
import { CheckBalanceDto } from './dto/check-balance.dto';
import { ClientNotFoundException } from './exceptions/client-not-found.exception';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepo: Repository<Client>,
  ) {}

  async rechargeWallet(dto: RechargeWalletDto) {
    const client = await this.clientRepo.findOne({
      where: {
        document: dto.document,
        phone: dto.phone,
      },
    });

    if (!client) {
      throw new ClientNotFoundException();
    }

    client.balance += dto.amount;
    await this.clientRepo.save(client);

    return {
      success: true,
      message: 'Wallet recharged successfully',
      newBalance: client.balance,
    };
  }

  async checkBalance(dto: CheckBalanceDto) {
    const client = await this.clientRepo.findOne({
      where: {
        document: dto.document,
        phone: dto.phone,
      },
    });

    if (!client) {
      throw new ClientNotFoundException();
    }

    return {
      success: true,
      balance: client.balance,
    };
  }
}
