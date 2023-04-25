import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { categoryProviders } from './categories.providers';
import { GlobalModule } from '../global/global.module';
import { DatabaseModule } from '../database.module';
import { AdressesModule } from '../adresses/adresses.module';
import { adressProviders } from '../adresses/adresses.providers';

@Module({
  imports: [
    GlobalModule,
    DatabaseModule,
    AdressesModule
  ],
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    ...categoryProviders,
    ...adressProviders
  ]
})
export class CategoriesModule {}
