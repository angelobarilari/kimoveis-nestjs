import { 
  MiddlewareConsumer, 
  Module, 
  NestModule, 
  RequestMethod } from '@nestjs/common';
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
import { AdressesModule } from './adresses/adresses.module';

@Module({
  imports: [
    UsersModule, 
    AuthModule, 
    DatabaseModule, 
    GlobalModule, 
    CategoriesModule, 
    AdressesModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AuthGuard,
    ...userProviders,
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(activeMiddlewareAuth)
      .exclude(
        { path: 'users', method: RequestMethod.POST },
        'users/(.*)',
      )
      .forRoutes(UsersController, AuthController)

    consumer
      .apply(admMiddleware)
      .forRoutes(
        { path: 'users', method: RequestMethod.GET }
      )
    
    consumer
      .apply(ownerOrAdmMiddleware)
      .forRoutes(
        { path: 'users/:id', method: RequestMethod.GET },
        { path: 'users/:id', method: RequestMethod.PATCH },
        { path: 'users/:id', method: RequestMethod.DELETE },
      )
  }
}
