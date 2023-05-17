import { IsString, IsUUID } from 'class-validator';

export class CategoryDto {
  @IsUUID()
  readonly id: string;

  @IsString()
  readonly name: string;
}
