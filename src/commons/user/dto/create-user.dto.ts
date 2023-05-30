import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  MinLength,
  IsArray,
  ValidateNested,
  ArrayMinSize,
  min,
} from 'class-validator';

export class CreateUserDto {

  @ApiProperty({
    default: 'tohir'
  })
  @IsNotEmpty()
  readonly login: string;

  @ApiProperty({
    default: 'johongirov'
  })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    default: 'edad@mail.ru minimum 4 harif bolishi kerak'
  })
  @IsNotEmpty()
  @MinLength(4)
  email: string;

  @ApiProperty({
    default: '+998974486009 +bilan  minimum 3 ta son bolishi kerak'
  })
  @IsNotEmpty()
  @MinLength(3)
  phone: string;

  @ApiProperty({
    default: 'password yoki kodi yoki qulf 2323***2332 minimum 4 harif bolishi kerak'
  })
  @IsNotEmpty()
  @MinLength(4)
  password: string;

}
