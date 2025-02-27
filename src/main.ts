import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import * as dotenv from 'dotenv';

const port = process.env.PORT || 3001;

async function bootstrap() {
  dotenv.config();
  
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: 'https://main--clepher-dashboard.netlify.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };
  app.enableCors(corsOptions);

  await app.listen(port, "0.0.0.0");
}
bootstrap();
