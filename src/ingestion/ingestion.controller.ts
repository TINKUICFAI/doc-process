import { Controller, Post, Param, Get } from '@nestjs/common';
import { IngestionService } from './ingestion.service';

@Controller('ingestion')
export class IngestionController {
  constructor(private readonly ingestionService: IngestionService) {}

  @Post(':docId/trigger')
  trigger(@Param('docId') docId: string) {
    return this.ingestionService.triggerIngestion(docId);
  }

  @Get(':id/status')
  getStatus(@Param('id') id: string) {
    return this.ingestionService.getStatus(id);
  }
}
