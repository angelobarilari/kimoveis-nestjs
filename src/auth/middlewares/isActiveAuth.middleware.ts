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
import { AuthGuard } from '../guards/auth.guard';
import { GlobalService } from 'src/global/global.service';

@Injectable()
export class activeMiddlewareAuth implements NestMiddleware {
    constructor(
        private authGuard: AuthGuard,
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
