import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  listCategories() {
    return this.categoriesService.listCategories();
  }

  @Get(':id')
  getCategoryById(@Param() params: any) {
    return this.categoriesService.findCategoryById(params.id);
  }

  @Get(':name')
  getCategoryByName(@Param() params: any) {
    return this.categoriesService.findCategoryByName(params.name);
  }

  @Post()
  createCategory(@Body() body: CreateCategoryDto) {
    return this.categoriesService.createCategory(body);
  }

  @Patch(':id')
  updateCategory(@Param() params: any, @Body() body: UpdateCategoryDto) {
    return this.categoriesService.updateCategory(params.id, body);
  }

  @Delete()
  deleteCategory(@Param() params: any) {
    return this.categoriesService.deleteCategory(params.id);
  }

  @Get()
  listPropertiesByCategory() {
    return this.categoriesService.listPropertiesByCategory();
  }
}
