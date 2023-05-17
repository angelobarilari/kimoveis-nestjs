import {
  IsBoolean,
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { AddressDto } from '../../adresses/dtos/address.dto';
import { Type } from 'class-transformer';

export class PropertyDto {
  @IsUUID()
  readonly id: string;

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
