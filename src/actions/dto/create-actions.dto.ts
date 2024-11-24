import { IsEnum, IsNotEmpty, IsString, isString } from 'class-validator';
import { ActionTypes } from '../schemas/action.schema';
import { Document } from 'mongoose';

export class CreateActionDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly route: string;
  @IsNotEmpty()
  readonly permissions: [];
  @IsNotEmpty()
  readonly type: ActionTypes;
}
