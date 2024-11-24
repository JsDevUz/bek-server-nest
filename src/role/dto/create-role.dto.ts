import { IsEnum, IsNotEmpty, IsString, isString } from 'class-validator';
import { ActionTypes } from '../schemas/role.schema';
import { Action } from 'src/actions/schemas/action.schema';
import { Document } from 'mongoose';

export class CreateRoleDto {
  @IsNotEmpty()
  readonly actions: Action;
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  readonly code: string;
}
