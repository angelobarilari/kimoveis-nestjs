import { IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsString()
  date: string;

  @IsString()
  hour: string;
}
