import { Controller, Post, Body, Get } from '@nestjs/common';
import { ClientService } from './client.service';
import { RegisterClientDto } from './dto/register-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) { }

  @Post('register')
  register(@Body() dto: RegisterClientDto) {
    return this.clientService.registerClient(dto);
  }

  @Get('all')
  findAllClients() {
    return this.clientService.findAll();
  }
}
