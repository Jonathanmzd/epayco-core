import { NotFoundException } from '@nestjs/common';

export class ClientsNotFoundException extends NotFoundException {
  constructor() {
    super('No clients found');
  }
}