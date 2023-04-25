import { PartialType } from "@nestjs/mapped-types";
import { CreateAddressDto } from "./create-adress.dto";

export class UpdateAddressDto extends PartialType(CreateAddressDto) {}