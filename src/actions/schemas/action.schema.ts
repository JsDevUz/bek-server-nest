import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export enum ActionTypes {
  ACTION = 'action',
  PAGE = 'page',
}
@Schema({ timestamps: true })
export class Action {
  @Prop()
  name: string;
  @Prop()
  permissions: [];
  @Prop()
  type: ActionTypes;
  @Prop()
  route: string;
}
export const ActionSchema = SchemaFactory.createForClass(Action);
