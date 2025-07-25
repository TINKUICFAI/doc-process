import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';
import { Document } from './entities/document.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Document]), UsersModule], // ✅ Register both repositories
  controllers: [DocumentsController],
  providers: [DocumentsService],
})
export class DocumentsModule {}
