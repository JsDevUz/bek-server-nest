import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;
  @IsNotEmpty()
  @IsEmail({}, { message: 'email hato' })
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'min len 8' })
  readonly password: string;
}
