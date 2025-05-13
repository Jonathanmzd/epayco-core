import { Controller, Post, Body } from '@nestjs/common';
import { ClientService } from './client.service';
import { RegisterClientDto } from './dto/register-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('register')
  register(@Body() dto: RegisterClientDto) {
    return this.clientService.registerClient(dto);
  }
}
