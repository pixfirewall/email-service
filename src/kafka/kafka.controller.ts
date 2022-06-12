import { MailService } from 'src/mail/mail.service';
import { KafkaMessagePayload } from './kafka.interface';
import { Controller, Logger, OnModuleInit } from '@nestjs/common';
import { microserviceConfig } from 'src/config/microserviceConfig';
import {
  Client,
  ClientKafka,
  EventPattern,
  Payload,
} from '@nestjs/microservices';

@Controller('kafka')
export class KafkaController implements OnModuleInit {
  private readonly logger = new Logger(KafkaController.name);

  constructor(private mailService: MailService) {}

  @Client(microserviceConfig)
  client: ClientKafka;

  async onModuleInit() {
    await this.client.connect();
  }

  @EventPattern('email-topic')
  async killDragon(@Payload() message: KafkaMessagePayload) {
    this.logger.log('kafka receive a message => ', message.value);
    const result = await this.mailService.sendUserConfirmation(message.value);
    this.logger.log('Email is sent and result is => ', result);
  }
}
