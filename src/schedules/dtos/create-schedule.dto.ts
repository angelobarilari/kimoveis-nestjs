import { User } from '../../users/entities/user.entity';
import { Property } from '../../properties/entities/propety.entity';
import { PropertyDto } from '../../properties/dtos/property.dto';
import {
  IsDefined,
  IsNotEmptyObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateScheduleDto {
  @IsString()
  date: string;

  @IsString()
  hour: string;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => PropertyDto)
  property: Property;

  user: User;
}
