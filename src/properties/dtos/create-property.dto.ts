import {
  IsBoolean,
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { AddressDto } from '../../adresses/dtos/address.dto';

export class CreatePropertyDto {
  @IsBoolean()
  readonly sold: boolean;

  @IsNumber()
  readonly value: number;

  @IsNumber()
  readonly size: number;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => AddressDto)
  readonly address: AddressDto;

  @IsString()
  @IsOptional()
  readonly categoryName: string;
}
