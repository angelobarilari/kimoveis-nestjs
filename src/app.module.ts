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

@Module({
  imports: [
    UsersModule, 
    AuthModule, 
    DatabaseModule, 
    GlobalModule],
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
      .apply(admMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.GET }),
    
    consumer
      .apply(ownerOrAdmMiddleware)
      .forRoutes({ path: 'users/:id', method: RequestMethod.GET })
  }
}
