import { DataSource } from 'typeorm';
import { Property } from './entities/propety.entity';

export const propertyProviders = [
  {
    provide: 'PROPERTIES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Property),
    inject: ['DATA_SOURCE'],
  },
];
