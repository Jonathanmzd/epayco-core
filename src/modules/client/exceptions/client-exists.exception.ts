import { BadRequestException } from '@nestjs/common';

export class ClientExistsException extends BadRequestException {
  constructor(field: string) {
    super(`Client already exists with this ${field}`);
  }
}