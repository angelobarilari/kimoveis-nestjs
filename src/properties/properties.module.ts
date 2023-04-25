import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { DatabaseModule } from 'src/database.module';
import { propertyProviders } from './properties.providers';
import { CategoriesModule } from '../categories/categories.module';
import { categoryProviders } from '../categories/categories.providers';
import { GlobalModule } from '../global/global.module';
import { AdressesModule } from '../adresses/adresses.module';
import { adressProviders } from '../adresses/adresses.providers';
import { CategoriesService } from 'src/categories/categories.service';
import { AdressesService } from '../adresses/adresses.service';

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
    ...adressProviders,
    ...categoryProviders,
    ...propertyProviders
  ],
})
export class PropertiesModule {}
