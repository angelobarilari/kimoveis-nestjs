import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from './users.providers';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [
        UsersService,
        ...userProviders,
    ],
    exports: [UsersService]
})
export class UsersModule {}
