import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class IngestionService {
  constructor(private readonly http: HttpService) {}

  async triggerIngestion(docId: string) {
    // const res = await this.http.axiosRef.post('http://python-backend/ingest', {
    //   docId,
    // });
    // return res.data;

    return {
      message: 'Ingestion triggered successfully',
      docId,
      status: 'processing',
    };
  }

  async getStatus(id: string) {
    return { id, status: 'processing' };
  }
}
