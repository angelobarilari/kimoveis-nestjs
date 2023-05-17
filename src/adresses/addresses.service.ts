import { Inject, Injectable } from '@nestjs/common';
import { GlobalService } from '../global/global.service';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';
import { CreateAddressDto } from './dtos/create-address.dto';

@Injectable()
export class AdressesService {
  constructor(
    @Inject('ADRESSES_REPOSITORY')
    private adressesRepository: Repository<Address>,

    private globalService: GlobalService,
  ) {}

  async createAddress(data: CreateAddressDto): Promise<Address> {
    const { city, district, number, state, zipCode } = data;

    const addressAlreadyExist = await this.adressesRepository.findOneOrFail({
      where: {
        city,
        district,
        number,
        state,
        zipCode,
      },
    });

    if (addressAlreadyExist)
      this.globalService.customException('Address already registered', 409);

    const newAddress: Address = this.adressesRepository.create(data);

    await this.adressesRepository.save(newAddress);

    return newAddress;
  }
}
