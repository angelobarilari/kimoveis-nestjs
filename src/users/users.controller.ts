import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Patch, 
    Post,
    Request, 
    UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAllusers(
        @Request() req: any
    ) {
        return this.usersService.getAllUsers()
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findUserById(
        @Param() params: any
    ) {
        return this.usersService.findUserById(params.id)
    }
    
    @UseGuards(JwtAuthGuard)
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

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    updateUser(
        @Param() params: any,
        @Body() body: UpdateUserDto
    ) {
        return this.usersService.updateUser(params.id, body)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteUser(
        @Param() params: any,
    ) {
        return this.usersService.deleteUser(params.id)
    }
}
