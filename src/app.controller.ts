import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  healthCheck() {
    return {
      status: 'ok',
      message: 'NestJS backend is running',
      timestamp: new Date().toISOString(),
    };
  }
}
