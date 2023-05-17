import {
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AddressDto {
  @IsUUID()
  readonly id: string;

  @IsString()
  @MaxLength(100)
  readonly district: string;

  @IsString()
  @MaxLength(9)
  readonly zipCode: string;

  @IsString()
  @IsOptional()
  readonly number: string;

  @IsString()
  readonly city: string;

  @IsString()
  @MinLength(2)
  @MaxLength(2)
  readonly state: string;
}
