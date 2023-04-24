import { DataSource } from 'typeorm';
import { Category } from './entities/category.entity';

export const categoryProviders = [
  {
    provide: 'CATEGORIES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Category),
    inject: ['DATA_SOURCE'],
  },
];