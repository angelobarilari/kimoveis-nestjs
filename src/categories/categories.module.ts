import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { categoryProviders } from './categories.providers';
import { GlobalModule } from 'src/global/global.module';
import { DatabaseModule } from 'src/database.module';

@Module({
  imports: [
    GlobalModule,
    DatabaseModule
  ],
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    ...categoryProviders
  ]
})
export class CategoriesModule {}
