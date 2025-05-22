import { NestFactory } from '@nestjs/core';
import { BillingModule } from './billing.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(BillingModule);
  const rmq = app.get<RmqService>(RmqService);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
