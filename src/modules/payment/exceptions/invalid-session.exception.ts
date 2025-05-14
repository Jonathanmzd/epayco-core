import { BadRequestException } from '@nestjs/common';

export class InvalidSessionException extends BadRequestException {
  constructor() {
    super('Invalid session ID or token.');
  }
}
