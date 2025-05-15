import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { RegisterClientDto } from './dto/register-client.dto';
import { ClientExistsException } from './exceptions/client-exists.exception';
import { ClientsNotFoundException } from './exceptions/clients-not-found.exception';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepo: Repository<Client>,
  ) { }

  async registerClient(dto: RegisterClientDto) {
    const { document, email, phone } = dto;

    if (await this.clientRepo.findOne({ where: { document } })) {
      throw new ClientExistsException('document');
    }
    if (await this.clientRepo.findOne({ where: { email } })) {
      throw new ClientExistsException('email');
    }
    if (await this.clientRepo.findOne({ where: { phone } })) {
      throw new ClientExistsException('phone');
    }

    const newClient = this.clientRepo.create(dto);
    await this.clientRepo.save(newClient);

    return {
      success: true,
      message: 'Client registered successfully',
    };
  }

  async findAll() {
    const clients = await this.clientRepo.find({
      order: { id: 'ASC' },
    });

    if (clients.length === 0) {
      throw new ClientsNotFoundException();
    }

    return {
      success: true,
      data: clients,
    };
  }

}
