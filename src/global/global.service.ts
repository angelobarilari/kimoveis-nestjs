import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class GlobalService {
    customException = (message: any, httpCode: any): Error => {
        throw new HttpException(message, httpCode)
    }
}
