import { NotFoundException } from '@nestjs/common';

export class ClientNotFoundException extends NotFoundException {
  constructor() {
    super('Client with provided document and phone not found.');
  }
}