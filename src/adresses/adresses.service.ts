import { Inject, Injectable } from '@nestjs/common';
import { GlobalService } from '../global/global.service';
import { Repository } from 'typeorm';
import { Adress } from './entities/adress.entity';

@Injectable()
export class AdressesService {
    constructor(
        @Inject('ADRESSES_REPOSITORY')
        private adressesRepository: Repository<Adress>,
        
        private globalService: GlobalService
    ) {}

    

}
