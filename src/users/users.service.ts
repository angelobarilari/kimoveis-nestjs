import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

const customException = (message: any, httpCode: any): Error => {
    throw new HttpException(message, httpCode)
}

@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: Repository<User>,
    ) {}
    
    async createUser(data: CreateUserDto): Promise<User> {
        const newUser: User = this.usersRepository.create({ ...data })

        await this.usersRepository.save(newUser)

        return newUser
    }

    async findUserById(id: string): Promise<any> {
        return await this.usersRepository.findOneBy({ id })
    }

    async getAllUsers(): Promise<User[]> {
        return await this.usersRepository.find()
    }
}
