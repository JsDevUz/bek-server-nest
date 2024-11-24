import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Action } from './schemas/action.schema';
import { Query } from 'express-serve-static-core';

@Injectable()
export class ActionService {
  constructor(
    @InjectModel(Action.name)
    private actionModel: mongoose.Model<Action>,
  ) {}
  async findAll(query: Query): Promise<Action[]> {
    const action = await this.actionModel.find();
    return action;
  }
  async create(action: Action): Promise<Action> {
    const res = await this.actionModel.create(action);
    return res;
  }
}
