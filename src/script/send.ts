import { Kafka, Partitioners } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'email',
  brokers: ['localhost:9092'],
});

async function sendMessage() {
  const producer = kafka.producer({
    createPartitioner: Partitioners.DefaultPartitioner,
  });

  await producer.connect();
  await producer.send({
    topic: 'email-topic',
    messages: [
      {
        value: JSON.stringify({
          to: 'email@example.com',
          name: 'amir',
          subject: 'this is a mail service from snappymob commapy',
          template: 'welcome',
        }),
      },
    ],
  });

  await producer.disconnect();
}

sendMessage().catch(console.error);
