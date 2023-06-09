import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { admMiddleware } from './auth/middlewares/admAuth.middleware';
import { DatabaseModule } from './database.module';
import { userProviders } from './users/users.providers';
import { AuthGuard } from './auth/guards/auth.guard';
import { GlobalModule } from './global/global.module';
import { ownerOrAdmMiddleware } from './auth/middlewares/ownerOrAdmAuth.middleware';
import { activeMiddlewareAuth } from './auth/middlewares/isActiveAuth.middleware';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { CategoriesModule } from './categories/categories.module';
import { AdressesModule } from './adresses/addresses.module';
import { PropertiesModule } from './properties/properties.module';
import { CategoriesController } from './categories/categories.controller';
import { PropertiesController } from './properties/properties.controller';
import { AddressesController } from './adresses/addresses.controller';
import { SchedulesController } from './schedules/schedules.controller';
import { SchedulesService } from './schedules/schedules.service';
import { SchedulesModule } from './schedules/schedules.module';
import { scheduleProviders } from './schedules/schedules.providers';
import { propertyProviders } from './properties/properties.providers';
import { PropertiesService } from './properties/properties.service';
import { categoryProviders } from './categories/categories.providers';
import { addressProviders } from './adresses/addresses.providers';
import { CategoriesService } from './categories/categories.service';
import { AdressesService } from './adresses/addresses.service';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    DatabaseModule,
    GlobalModule,
    CategoriesModule,
    AdressesModule,
    PropertiesModule,
    SchedulesModule,
  ],
  controllers: [AppController, SchedulesController],
  providers: [
    AppService, 
    AuthGuard, 
    SchedulesService,
    PropertiesService,
    CategoriesService,
    AdressesService,
    ...userProviders, 
    ...scheduleProviders,
    ...propertyProviders,
    ...scheduleProviders,
    ...categoryProviders,
    ...addressProviders
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(activeMiddlewareAuth)
      .exclude({ path: 'users', method: RequestMethod.POST }, 'users/(.*)')
      .forRoutes(
        UsersController,
        AuthController,
        CategoriesController,
        PropertiesController,
        AddressesController,
      );

    consumer
      .apply(admMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.GET });

    consumer
      .apply(ownerOrAdmMiddleware)
      .forRoutes(
        { path: 'users/:id', method: RequestMethod.GET },
        { path: 'users/:id', method: RequestMethod.PATCH },
        { path: 'users/:id', method: RequestMethod.DELETE },
      );
  }
}
