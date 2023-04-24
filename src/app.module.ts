import { 
  MiddlewareConsumer, 
  Module, 
  NestModule, 
  RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './auth/middlewares/admAuth.middleware';
import { DatabaseModule } from './database.module';
import { userProviders } from './users/users.providers';
import { AuthGuard } from './auth/guards/auth.guard';
import { GlobalModule } from './global/global.module';

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
      .apply(LoggerMiddleware)
      .forRoutes({ 
        path: 'users', 
        method: RequestMethod.GET 
      })
  }
}
