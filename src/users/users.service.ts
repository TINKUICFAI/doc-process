import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRole } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: string) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async updateRole(id: string, role: UserRole) {
    const user = await this.findOne(id);
    user.role = role;
    return this.userRepo.save(user);
  }

  async softDelete(id: string) {
    const user = await this.findOne(id);
    user.isDeleted = true;
    user.isActive = false;
    return this.userRepo.save(user);
  }
}
