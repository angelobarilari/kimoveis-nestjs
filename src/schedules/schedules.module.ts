import { Module } from '@nestjs/common';
import { GlobalModule } from '../global/global.module';
import { SchedulesController } from './schedules.controller';
import { scheduleProviders } from './schedules.providers';
import { DatabaseModule } from '../database.module';
import { SchedulesService } from './schedules.service';
import { UsersModule } from '../users/users.module';
import { PropertiesModule } from '../properties/properties.module';
import { userProviders } from '../users/users.providers'
import { propertyProviders } from '../properties/properties.providers';
import { PropertiesService } from '../properties/properties.service';
import { CategoriesModule } from '../categories/categories.module';
import { categoryProviders } from '../categories/categories.providers';
import { addressProviders } from '../adresses/addresses.providers';
import { CategoriesService } from '../categories/categories.service';
import { AdressesModule } from '../adresses/addresses.module';
import { AdressesService } from '../adresses/addresses.service';

@Module({
    imports: [
        GlobalModule,
        DatabaseModule,
        UsersModule,
        PropertiesModule,
        CategoriesModule,
        AdressesModule
    ],
    controllers: [SchedulesController],
    providers: [
        SchedulesService,
        PropertiesService,
        CategoriesService,
        AdressesService,
        ...scheduleProviders,
        ...userProviders,
        ...propertyProviders,
        ...addressProviders,
        ...categoryProviders
    ],
})
export class SchedulesModule {}
