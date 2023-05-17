import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dtos/create-property.dto';
import { UpdatePropertyDto } from './dtos/update-property.dto';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  listProperties() {
    return this.propertiesService.listProperties();
  }

  @Get(':id')
  getPropertyById(@Param() params: any) {
    return this.propertiesService.findPropertyById(params.id);
  }

  @Post()
  createProperty(@Body() body: CreatePropertyDto) {
    return this.propertiesService.createProperty(body);
  }

  @Patch(':id')
  updateProperty(@Param() params: any, @Body() body: UpdatePropertyDto) {
    return this.propertiesService.updateProperty(params.id, body);
  }

  @Delete(':id')
  deleteProperty(@Param() params: any) {
    return this.propertiesService.deleteProperty(params.id);
  }
}
