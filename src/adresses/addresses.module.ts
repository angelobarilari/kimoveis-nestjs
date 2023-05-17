import { Module } from '@nestjs/common';
import { AddressesController } from './addresses.controller';
import { AdressesService } from './addresses.service';
import { addressProviders } from './addresses.providers';
import { DatabaseModule } from '../database.module';
import { GlobalModule } from '../global/global.module';

@Module({
  imports: [GlobalModule, DatabaseModule],
  controllers: [AddressesController],
  providers: [AdressesService, ...addressProviders],
})
export class AdressesModule {}
