import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from './users.providers';

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
