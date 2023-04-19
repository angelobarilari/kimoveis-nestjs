// import { IsBoolean, IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    // @IsString()
    readonly name: string;

    // @IsString()
    // @IsEmail()
    readonly email: string;

    // @IsBoolean()
    readonly isActive: boolean;

    // @IsString()
    readonly password: string;
}

export class CreateAdmDto extends CreateUserDto {
    // @IsBoolean()
    readonly isAdm: boolean;
}
