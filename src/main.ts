import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as compression from 'compression';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(helmet());
  app.use(compression());

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT') || 8000;

  await app.listen(PORT);
  console.log(`🚀 Application is running on: ${await app.getUrl()}`);
}
bootstrap();
