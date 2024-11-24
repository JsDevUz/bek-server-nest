import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from '../enums/roles.enum';

@Schema({ timestamps: true })
export class User {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop({ unique: [true, 'duplicate'] })
  email: string;
  @Prop()
  password: string;
  @Prop({
    type: [{ type: String, enum: Role }],
    default: [Role.Seller],
  })
  role: Role[];
}
export const UserSchema = SchemaFactory.createForClass(User);
