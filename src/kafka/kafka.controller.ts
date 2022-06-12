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

  @Client(microserviceConfig)
  client: ClientKafka;

  async onModuleInit() {
    await this.client.connect();
  }

  @EventPattern('email-topic')
  async killDragon(@Payload() message: KafkaMessagePayload) {
    this.logger.log('kafka receive a message => ', message.value);
  }
}
