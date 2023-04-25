import { 
    IsBoolean, 
    IsDefined, 
    IsNotEmptyObject, 
    IsNumber, 
    IsOptional, 
    IsString, 
    ValidateNested} from "class-validator";
import { CreateAddressDto } from "../../adresses/dtos/create-address.dto";
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
    @Type(() => CreateAddressDto)
    address: CreateAddressDto;

    @IsString()
    @IsOptional()
    categoryName: string;
}



