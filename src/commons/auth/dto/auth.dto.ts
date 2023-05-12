import { IsNotEmpty, MinLength } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  readonly login: string;

  @IsNotEmpty()
  readonly password: string;
}
