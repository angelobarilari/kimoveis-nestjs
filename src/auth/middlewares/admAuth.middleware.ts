import { Inject, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { User } from '../../users/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthGuard } from '../guards/auth.guard';
import { GlobalService } from 'src/global/global.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    constructor(
        private authGuard: AuthGuard,
        private globalService: GlobalService,

        @Inject('USERS_REPOSITORY')
        private usersRepository: Repository<User>,
    ) {}
    
    async use(req: Request, res: Response, next: NextFunction) {
        const token = this.authGuard.extractTokenFromHeader(req)
        
        if (!token)
            this.globalService.customException('Token does not exist', 401)
        
        const decodedData = this.authGuard.decodeJwt(token)

        const user = await this.usersRepository.findOneBy({
            id: decodedData.sub
        })

        if (!user.isAdm)
            this.globalService.customException('No adm auth', 403)

        next()
    }
}
