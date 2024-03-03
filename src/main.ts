import { NestFactory } from '@nestjs/core';
import { PORT } from 'src/config/common.constant';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(PORT);
}

bootstrap();
