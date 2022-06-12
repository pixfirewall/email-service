import { Module } from '@nestjs/common';
import { HeathService } from './heath.service';
import { HeathController } from './heath.controller';

@Module({
  providers: [HeathService],
  controllers: [HeathController],
})
export class HeathModule {}
