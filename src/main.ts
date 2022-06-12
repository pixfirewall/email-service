import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { microserviceConfig } from './config/microserviceConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(microserviceConfig);
  await app.startAllMicroservices();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
