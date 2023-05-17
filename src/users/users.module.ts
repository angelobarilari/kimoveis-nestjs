import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from './users.providers';
import { GlobalModule } from '../global/global.module';

@Module({
  imports: [DatabaseModule, GlobalModule],
  controllers: [UsersController],
  providers: [UsersService, ...userProviders],
  exports: [UsersService],
})
export class UsersModule {}
