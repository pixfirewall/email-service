import { Controller, Get } from '@nestjs/common';
import { HeathService } from './heath.service';

@Controller('ping')
export class HeathController {
  constructor(private heathService: HeathService) {}

  @Get()
  heathCheck(): string {
    return this.heathService.ping();
  }
}
