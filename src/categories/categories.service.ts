import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { GlobalService } from '../global/global.service';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { Adress } from '../adresses/entities/adress.entity';

@Injectable()
export class CategoriesService {
    constructor(
        @Inject('CATEGORIES_REPOSITORY')
        private categoriesRepository: Repository<Category>,

        @Inject('ADRESSES_REPOSITORY')
        private adressesRepository: Repository<Adress>,

        private globalService: GlobalService
    ) {}

    async listCategories(): Promise<Category[]> {
        return await this.categoriesRepository.find()
    }

    async findCategoryById(id: string): Promise<Category> {
        return await this.categoriesRepository.findOneBy({ id })
    }

    async findCategoryByName(name: string): Promise<Category> {
        return await this.categoriesRepository.findOneBy({ name })
    }

    async categoryAlreadyExist(categoryName: string): Promise<boolean> {
        const category: Category = await this.categoriesRepository.findOneBy({
            name: categoryName
        })

        if (!category)
            return false
        
        return true
    }

    async createCategory(data: CreateCategoryDto): Promise<Category> {
        if (await this.categoryAlreadyExist(data.name))
            this.globalService.customException('Category already exists', 409)

        const newCategory: Category = this.categoriesRepository.create({ ...data })

        await this.categoriesRepository.save(newCategory)

        return newCategory
    }

    async updateCategory(id: string, data: UpdateCategoryDto): Promise<Category> {
        await this.categoriesRepository.update(id, data)

        return this.findCategoryById(id)
    }

    async deleteCategory(id: string) {
        await this.findCategoryById(id)

        await this.categoriesRepository.delete(id)
    }

    async listPropertiesByCategory () {}

}
