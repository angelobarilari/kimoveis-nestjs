import { Inject, Injectable } from '@nestjs/common';
import { Category } from '../categories/entities/category.entity';
import { Repository } from 'typeorm';
import { Address } from '../adresses/entities/address.entity';
import { GlobalService } from '../global/global.service';
import { CreatePropertyDto } from './dtos/create-property.dto';
import { UpdatePropertyDto } from './dtos/update-property.dto';
import { Property } from './entities/propety.entity';
import { CategoriesService } from '../categories/categories.service';
import { AdressesService } from '../adresses/addresses.service';

@Injectable()
export class PropertiesService {
  constructor(
    @Inject('CATEGORIES_REPOSITORY')
    private categoriesRepository: Repository<Category>,

    @Inject('ADRESSES_REPOSITORY')
    private adressesRepository: Repository<Address>,

    @Inject('PROPERTIES_REPOSITORY')
    private propertiesRepository: Repository<Property>,

    private globalService: GlobalService,

    private categoriesService: CategoriesService,

    private addressesService: AdressesService,
  ) {}

  async listProperties(): Promise<Property[]> {
    return await this.propertiesRepository.find();
  }

  async findPropertyById(id: string): Promise<Property> {
    const property: Property = await this.propertiesRepository.findOneBy({
      id,
    });

    if (!property)
      this.globalService.customException('Property not found', 404);

    return property;
  }

  async createProperty(data: CreatePropertyDto): Promise<Property> {
    const category = await this.categoriesService.findCategoryByName(
      data.categoryName,
    );

    const address = await this.addressesService.createAddress(data.address);

    const newProperty: Property = this.propertiesRepository.create({
      ...data,
      address,
      category,
    });

    await this.propertiesRepository.save(newProperty);

    return newProperty;
  }

  async updateProperty(id: string, data: UpdatePropertyDto): Promise<Property> {
    await this.propertiesRepository.update(id, data);

    return await this.findPropertyById(id);
  }

  async deleteProperty(id: string): Promise<void> {
    await this.findPropertyById(id);

    this.propertiesRepository.delete(id);
  }
}
