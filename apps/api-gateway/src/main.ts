/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import Redis from './app/modules/redis/redis.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const options = new DocumentBuilder()
  .setTitle('Social-fi')
  .setDescription('API documentation for Social-fi')
  .setVersion('0.0.1')
  .addBearerAuth()
  .build()
  
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)
  const redisConnectFn = Redis.getClient()
  await redisConnectFn
  const port = process.env.PORT || 3000;
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
    );
    await app.listen(port);
}

bootstrap();
