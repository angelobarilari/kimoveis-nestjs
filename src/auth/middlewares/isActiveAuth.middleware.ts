import { 
    Inject, 
    Injectable, 
    NestMiddleware } from '@nestjs/common';
import { 
    Request, 
    Response, 
    NextFunction } from 'express';
import { User } from '../../users/entities/user.entity';
import { Repository } from 'typeorm';
import { GlobalService } from '../../global/global.service';

@Injectable()
export class activeMiddlewareAuth implements NestMiddleware {
    constructor(
        private globalService: GlobalService,

        @Inject('USERS_REPOSITORY')
        private usersRepository: Repository<User>,
    ) {}
    
    async use(req: Request, res: Response, next: NextFunction) {
        const user: User = await this.usersRepository.findOneBy({ 
            email: req.body.username
        })

        if (!user.isActive)
            this.globalService.customException('Inactive user', 404)

        next()
    }
}
