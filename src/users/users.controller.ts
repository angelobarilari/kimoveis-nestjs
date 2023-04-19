import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Patch, 
    Post, 
    UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Get()
    findAllusers() {
        return this.usersService.getAllUsers()
    }

    @Get(':id')
    findUserById(
        @Param() params: any
    ) {
        return this.usersService.findUserById(params.id)
    }
    
    @Get(':email')
    findUserByEmail(
        @Param() params: any
    ) {
        return this.usersService.findUserByEmail(params.email)
    }

    @Post() 
    createUser(
        @Body() body: CreateUserDto
    ) { 
        return this.usersService.createUser(body)
    }

    @Patch(':id')
    updateUser(
        @Param() params: any,
        @Body() body: UpdateUserDto
    ) {
        return this.usersService.updateUser(params.id, body)
    }

    @Delete(':id')
    deleteUser(
        @Param() params: any,
    ) {
        return this.usersService.deleteUser(params.id)
    }
}
