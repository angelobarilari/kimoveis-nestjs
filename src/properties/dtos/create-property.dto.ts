import { 
    IsBoolean, 
    IsDefined, 
    IsNotEmptyObject, 
    IsNumber, 
    IsOptional, 
    IsString, 
    ValidateNested} from "class-validator";
import { CreateAdressDto } from "../../adresses/dtos/create-adress.dto";
import { Type } from "class-transformer";

export class CreatePropertyDto {
    @IsBoolean()
    sold: boolean;

    @IsNumber()
    value: number;

    @IsNumber()
    size: number;

    @IsDefined()
    @IsNotEmptyObject()
    @ValidateNested({ each: true })
    @Type(() => CreateAdressDto)
    address: CreateAdressDto;

    @IsString()
    @IsOptional()
    categoryName: string;
}



