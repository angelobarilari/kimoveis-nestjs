import { DataSource } from 'typeorm';
import { Adress } from './entities/adress.entity';

export const adressProviders = [
  {
    provide: 'ADRESSES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Adress),
    inject: ['DATA_SOURCE'],
  },
];