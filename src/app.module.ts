import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HeathModule } from './heath/heath.module';
import { KafkaModule } from './kafka/kafka.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HeathModule,
    MailModule,
    KafkaModule,
  ],
})
export class AppModule {}
