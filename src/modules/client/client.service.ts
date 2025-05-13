import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { RegisterClientDto } from './dto/register-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepo: Repository<Client>,
  ) {}

  async registerClient(dto: RegisterClientDto) {
    const existing = await this.clientRepo.findOne({
      where: { document: dto.document },
    });

    if (existing) {
      throw new BadRequestException('Client already exists with this document');
    }

    const newClient = this.clientRepo.create(dto);
    await this.clientRepo.save(newClient);

    return {
      success: true,
      message: 'Client registered successfully',
    };
  }
}
