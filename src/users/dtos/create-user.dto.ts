import { 
    IsBoolean, 
    IsEmail,
    IsOptional,
    IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    readonly name: string;

    @IsString()
    @IsEmail()
    readonly email: string;

    @IsBoolean()
    readonly isActive: boolean;

    @IsBoolean()
    @IsOptional()
    readonly isAdm: boolean;

    @IsString()
    readonly password: string;
}