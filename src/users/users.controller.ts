import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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




}
