import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HeathModule } from './heath/heath.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HeathModule,
  ],
})
export class AppModule {}
