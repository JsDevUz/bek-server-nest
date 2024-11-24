import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Action } from 'src/actions/schemas/action.schema';
export enum ActionTypes {
  ACTION = 'action',
  PAGE = 'page',
}
@Schema({ timestamps: true })
export class Role {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Action' }])
  actions: Action;
  @Prop()
  name: string;
  @Prop()
  code: string;
}
export const RoleSchema = SchemaFactory.createForClass(Role);
