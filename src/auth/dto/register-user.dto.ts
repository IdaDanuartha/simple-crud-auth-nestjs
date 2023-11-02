import { IsString, Length } from "class-validator";

export class RegisterDto {
  @IsString()
  @Length(5,15)
  username: string

  @IsString()
  @Length(6,20)
  password: string

  @IsString()
  @Length(5,50)
  name: string

  @IsString()
  @Length(5,20)
  email: string
}