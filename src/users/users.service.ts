import { HttpException, Inject, Injectable, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

const customException = (message: any, httpCode: any): Error => {
    throw new HttpException(message, httpCode)
}

@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: Repository<User>,
    ) {}

    async getAllUsers(): Promise<User[]> {
        return await this.usersRepository.find()
    }

    async findUserById(id: string): Promise<User> {
        const user: User = await this.usersRepository.findOneBy({ id })

        if (!user)
            customException('User not found', 404)

        return user
    }

    async findUserByEmail(email: string): Promise<User> {
        const user: User = await this.usersRepository.findOneBy({ email })

        if (!user)
            customException('User not found', 404)

        return user
    }
    
    async createUser(data: CreateUserDto): Promise<User> {
        if (await this.findUserByEmail(data.email))
            customException('Email is already in use', 409)

        const newUser: User = this.usersRepository.create({ ...data })
        
        await this.usersRepository.save(newUser)

        return newUser
    }

    async updateUser(id: string, data: UpdateUserDto): Promise<User> {
        await this.usersRepository.update(id, data)
        
        return this.findUserById(id)
    }

    async deleteUser(id: string): Promise<void> {
        await this.findUserById(id)

        this.usersRepository.delete(id)
    }

}
