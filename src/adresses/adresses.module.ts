import { Module } from '@nestjs/common';
import { AdressesController } from './adresses.controller';
import { AdressesService } from './adresses.service';
import { adressProviders } from './adresses.providers';
import { DatabaseModule } from '../database.module';
import { GlobalModule } from '../global/global.module';

@Module({
  imports: [
    GlobalModule,
    DatabaseModule
  ],
  controllers: [AdressesController],
  providers: [
    AdressesService,
    ...adressProviders
  ]
})
export class AdressesModule {}
