import { NestFactory } from '@nestjs/core';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { LoggerService } from './common/logger/logger.service';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';

interface ExpressConfig {
  env: string;
  version: string;
  name: string;
  description: string;
  url: string;
  port: number;
  enableCors: boolean;
}

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Ensure strong typing
  const configService = app.get<ConfigService>(ConfigService);
  const appConfig = configService.get<ExpressConfig>('express');

  if (!appConfig) {
    throw new Error('App config (express) not found');
  }

  app.setGlobalPrefix('v1');

  app.useLogger(new LoggerService());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      exceptionFactory: (errors): BadRequestException => {
        const firstError = errors[0];
        const constraints = firstError?.constraints;
        const firstMessage = constraints ? Object.values(constraints)[0] : 'Validation failed';
        return new BadRequestException(firstMessage);
      },
    }),
  );

  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());

  if (appConfig.enableCors) {
    app.enableCors();
  }

  const port: number = appConfig.port ?? 3000;
  await app.listen(port, '0.0.0.0');

  const appUrl = await app.getUrl();
  console.log(`✅ App running at: ${appUrl}`);
}

void bootstrap();
