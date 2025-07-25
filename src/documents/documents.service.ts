import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from './entities/document.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document) private docRepo: Repository<Document>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async create(data: { title: string; filePath: string; userId: string }) {
    const user = await this.userRepo.findOne({ where: { id: data.userId } });
    if (!user) {
      throw new Error('User not found'); // ✅ handle null case
    }

    const doc = this.docRepo.create({
      title: data.title,
      filePath: data.filePath,
      uploadedBy: user, // ✅ user is now always a User
    });

    return this.docRepo.save(doc);
  }

  findAll() {
    return this.docRepo.find({ relations: ['uploadedBy'] });
  }

  findOne(id: string) {
    return this.docRepo.findOne({ where: { id }, relations: ['uploadedBy'] });
  }

  async update(id: string, body: Partial<Document>) {
    await this.docRepo.update(id, body);
    return this.findOne(id);
  }

  remove(id: string) {
    return this.docRepo.delete(id);
  }
}
