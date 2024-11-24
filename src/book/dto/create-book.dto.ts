import { IsEnum, IsNotEmpty, IsString, isString } from 'class-validator';
import { Category } from '../schemas/book.schema';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsString()
  readonly author: string;
  @IsNotEmpty()
  @IsEnum(Category, { message: 'not correct catgeory' })
  readonly category: Category;
}
