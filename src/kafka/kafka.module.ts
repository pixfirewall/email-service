import { Module } from '@nestjs/common';
import { MailModule } from 'src/mail/mail.module';
import { KafkaController } from './kafka.controller';

@Module({
  imports: [MailModule],
  controllers: [KafkaController],
})
export class KafkaModule {}
