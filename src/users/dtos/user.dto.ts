import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class UserDto {
  @IsUUID()
  readonly id: string;

  @IsString()
  @MaxLength(150)
  readonly name: string;

  @IsString()
  @IsEmail()
  @MaxLength(150)
  readonly email: string;

  @IsBoolean()
  @IsOptional()
  readonly isActive: boolean;

  @IsBoolean()
  @IsOptional()
  readonly isAdm: boolean;

  @IsString()
  readonly password: string;
}
