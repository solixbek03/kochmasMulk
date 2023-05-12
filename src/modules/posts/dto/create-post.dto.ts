import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  MinLength,
  isNotEmpty,
} from 'class-validator';
import { postType, statuss } from '../entities/posts.entity';

export class CreatePostDto {

  

  
  @IsNotEmpty()
  postType: postType;

  @IsNotEmpty()
  region: string;

  @IsNotEmpty()
  district: string;

  @IsNotEmpty()
  location: number;

  @IsNotEmpty()
  gas: boolean;

  @IsNotEmpty()
  light: boolean

  @IsNotEmpty()
  hot_water: boolean;

  @IsNotEmpty()
  cold_water: boolean;

  @IsNotEmpty()
  airConditioner: boolean

  @IsNotEmpty()
  refrigerator: boolean;

  @IsNotEmpty()  
  status: statuss;

  @IsNotEmpty()
  cost: number

  @IsNotEmpty()
  area: string

  readonly allFloor: number

  readonly floorOfApartment: number

  readonly city: string

  readonly services: string
}