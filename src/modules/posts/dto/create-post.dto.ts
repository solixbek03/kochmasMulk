import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  MinLength,
  isNotEmpty,
} from 'class-validator';
import { postType, statuss } from '../entities/posts.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {

  

  @ApiProperty({
    default: 'hovli yoki dom yoki hotel'
  })
  @IsNotEmpty()
  postType: postType;

  @ApiProperty({
    default: 'toshkent viloyati'
  })
  @IsNotEmpty()
  region: string;

  @ApiProperty({
    default: 'yakkasaroy tumani'
  })
  @IsNotEmpty()
  district: string;

  @ApiProperty({
    default: 12.31413
  })
  @IsNotEmpty()
  location: number;

  @ApiProperty({
    default: 'true yoki false'
  })
  @IsNotEmpty()
  gas: boolean;

  @ApiProperty({
    default: 'true yoki false'
  })
  @IsNotEmpty()
  light: boolean

  @ApiProperty({
    default: 'true yoki false'
  })
  @IsNotEmpty()
  hot_water: boolean;

  @ApiProperty({
    default: 'true yoki false'
  })
  @IsNotEmpty()
  cold_water: boolean;

  @ApiProperty({
    default: 'true yoki false'
  })
  @IsNotEmpty()
  airConditioner: boolean

  @ApiProperty({
    default: 'true yoki false'
  })
  @IsNotEmpty()
  refrigerator: boolean;

  @ApiProperty({
    default: 'yaxshi yoki qoniqarli yoki qoniqarsiz'
  })
  @IsNotEmpty()  
  status: statuss;

  @ApiProperty({
    default: 1000000000000
  })
  @IsNotEmpty()
  cost: number

  @ApiProperty({
    default: 'hudud'
  })
  @IsNotEmpty()
  area: string

  @ApiProperty({
    default: '12 son kirgizish kerak bu dom uchun'
  })
  readonly allFloor: number

  @ApiProperty({
    default: '8 son kirgizish kerak bu dom uchun'
  })
  readonly floorOfApartment: number

  @ApiProperty({
    default: 'gazalkent shahar bu hotel uchun'
  })
  readonly city: string

  @ApiProperty({
    default: 'xizmatlar haqida masalan hona tozalash bu hotel uchun'
  })
  readonly services: string
}