import { User } from '../../users/entities/user.entity';
import { Property } from '../../properties/entities/propety.entity';
import { PropertyDto } from '../../properties/dtos/property.dto';
import {
  IsDefined,
  IsNotEmptyObject,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { UserDto } from '../../users/dtos/user.dto';

export class ScheduleDto {
  @IsUUID()
  readonly id: string;

  @IsString()
  readonly date: string;

  @IsString()
  readonly hour: string;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => PropertyDto)
  readonly property: Property;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => UserDto)
  readonly user: User;
}
