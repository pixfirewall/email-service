import { KafkaOptions, Transport } from '@nestjs/microservices';

export const microserviceConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'email',
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'email-consumer',
      allowAutoTopicCreation: true,
    },
  },
};
