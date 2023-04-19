import { PartialType } from "@nestjs/mapped-types";
import { CreateAdmDto, CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {}
export class UpdateAdmDto extends PartialType(CreateAdmDto) {}