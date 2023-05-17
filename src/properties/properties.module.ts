import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { DatabaseModule } from '../database.module';
import { propertyProviders } from './properties.providers';
import { CategoriesModule } from '../categories/categories.module';
import { categoryProviders } from '../categories/categories.providers';
import { GlobalModule } from '../global/global.module';
import { AdressesModule } from '../adresses/addresses.module';
import { addressProviders } from '../adresses/addresses.providers';
import { CategoriesService } from '../categories/categories.service';
import { AdressesService } from '../adresses/addresses.service';

@Module({
  imports: [
    GlobalModule, 
    DatabaseModule, 
    CategoriesModule, 
    AdressesModule
  ],
  controllers: [PropertiesController],
  providers: [
    AdressesService,
    CategoriesService,
    PropertiesService,
    ...addressProviders,
    ...categoryProviders,
    ...propertyProviders,
  ],
})
export class PropertiesModule {}
