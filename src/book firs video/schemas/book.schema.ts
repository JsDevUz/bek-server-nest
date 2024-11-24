import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export enum Category {
  ADVANTURE = 'advanture',
  CRIME = 'crime',
}
@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: String;
  @Prop()
  description: String;
  @Prop()
  author: String;
  @Prop()
  category: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);
