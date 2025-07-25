import { registerAs } from '@nestjs/config';

export default registerAs('express', () => ({
  env: process.env.APP_ENV || 'development',
  version: process.env.APP_VERSION || '1.0.0',
  name: process.env.APP_NAME || 'Rag Assignment',
  description: 'NestJS Backend',
  url: process.env.APP_URL || 'http://localhost:9003/',
  port: parseInt(process.env.APP_PORT || '9003', 10),
  enableCors: true,
}));
