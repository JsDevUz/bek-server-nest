import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Role } from './schemas/role.schema';
import { Query } from 'express-serve-static-core';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role.name)
    private roleModel: mongoose.Model<Role>,
  ) {}
  async findAll(query: Query): Promise<Role[]> {
    const roles = await this.roleModel.find().populate('actions');
    return roles;
  }
  async create(role: Role): Promise<Role> {
    const res = await this.roleModel.create(role);
    return res;
  }
}
