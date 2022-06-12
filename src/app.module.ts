import { Module } from '@nestjs/common';
import { HeathModule } from './heath/heath.module';

@Module({
  imports: [HeathModule],
})
export class AppModule {}
