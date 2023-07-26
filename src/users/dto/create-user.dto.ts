import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ description: "User email" })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: "User full name" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: "Defines if a user is an admin.",
    default: false,
  })
  @IsBoolean()
  admin: boolean;
}
