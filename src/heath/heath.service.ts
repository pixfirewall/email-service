import { Injectable } from '@nestjs/common';

@Injectable()
export class HeathService {
  ping() {
    return 'pong';
  }
}
