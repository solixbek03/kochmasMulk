import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  MinLength,
  IsArray,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly login: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @MinLength(4)
  email: string;

  @IsNotEmpty()
  @MinLength(3)
  phone: string;

  @IsNotEmpty()
  @MinLength(4)
  password: string;

}
