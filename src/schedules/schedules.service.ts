import { Inject, Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { Schedule } from './entities/schedule.entity';
import { CreateScheduleDto } from './dtos/create-schedule.dto';
import { UpdateScheduleDto } from './dtos/update-schedule.dto';
import { GlobalService } from '../global/global.service';
import { Property } from '../properties/entities/propety.entity';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { PropertiesService } from '../properties/properties.service';

@Injectable()
export class SchedulesService {
    constructor(
        @Inject('SCHEDULES_REPOSITORY')
        private schedulesRepository: Repository<Schedule>,

        private propertiesService: PropertiesService,

        private usersService: UsersService,

        private globalService: GlobalService,
    ) {}

    async listSchedules(): Promise<any> {}

    async findScheduleById(id: string): Promise<Schedule> {
        const schedule: Schedule = await this.schedulesRepository.findOneBy({id})

        if (!schedule)
            this.globalService.customException('Schedule not found', 404)

        return schedule
    }

    async createSchedule(userId: string, propertyId: string, data: CreateScheduleDto): Promise<any> {
        const { date, hour } = data
        const formatedDate: Date = new Date(`${date}, ${hour}`)

        if (formatedDate.getDay() === 0 ||
            formatedDate.getDay() === 6) 
                this.globalService.customException('Invalid day', 400)
        
    
        if (formatedDate.getHours() >= 18 ||
            formatedDate.getHours() < 8) 
                this.globalService.customException('Invalid hour', 400)

        const property: Property = await this.propertiesService.findPropertyById(propertyId)

        const schedules: Schedule[] = await this.schedulesRepository.find()

        schedules.forEach(schedule => {
            const scheduleDate: Date = new Date(`${schedule.date}, ${schedule.hour}`)
            


            // if (scheduleDate === formatedDate)
            //     this.globalService.customException('Unavailable date and time', 409)
            
        
        })
        
        const user: User = await this.usersService.findUserById(userId)



    }

    async updateSchedule(id: string, data: UpdateScheduleDto): Promise<any> {}

    async deleteSchedule(id: string): Promise<any> {}
}
