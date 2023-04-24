import { 
    IsOptional, 
    IsString } from "class-validator";

export class CreateAdressDto {
    @IsString()
    readonly distric: string;

    @IsString()
    readonly zipCode: string;

    @IsString()
    @IsOptional()
    readonly number: string;

    @IsString()
    readonly city: string;

    @IsString()
    readonly state: string;
}

