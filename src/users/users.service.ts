import { 
    Inject, 
    Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { GlobalService } from '../global/global.service';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: Repository<User>,
        private globalService: GlobalService
    ) {}

    async getAllUsers(): Promise<User[]> {
        return await this.usersRepository.find()
    }

    async findUserById(id: string): Promise<User> {
        const user: User = await this.usersRepository.findOneBy({ id })

        if (!user)
            this.globalService.customException('User not found', 404)

        return user
    }

    async findUserByEmail(email: string): Promise<User> {
        const user: User = await this.usersRepository.findOneBy({ email })
        
        if (!user)
            this.globalService.customException('User not found', 404)

        return user
    }

    async userAlreadyExist(email: string): Promise<boolean> {
        const user: User = await this.usersRepository.findOneBy({ email })

        if (!user)
            return false
        
        return true
    }
    
    async createUser(data: CreateUserDto): Promise<User> {
        if (await this.userAlreadyExist(data.email))
            this.globalService.customException('Email already is in use', 409)

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
