import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

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
        @Body() body: any
    ) { 
        return this.usersService.createUser(body)
    }

    @Patch(':id')
    updateUser(
        @Param() params: any,
        @Body() body: any
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
