import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SchedulesService } from './schedules.service';

@Controller('schedules')
export class SchedulesController {
    constructor(private readonly schedulesService: SchedulesService) {}

    @Get()
    listSchedules() {
        return this.schedulesService.listSchedules()
    }

    @Get(':id')
    findScheduleById(@Param() params: any) {
        return this.schedulesService.findScheduleById(params.id)
    }

    @Post(':userId/:propertyId')
    createSchedule(@Param() params: any, @Body() body: any) {
        return this.schedulesService.createSchedule(params.userId, params.propertyId, body)
    }

    @Patch(':id')
    updateSchedule(@Param() params: any, @Body() body: any) {
        return this.schedulesService.updateSchedule(params.id, body)
    }

    @Delete(':id')
    deleteSchedule(@Param() params: any) {
        return this.schedulesService.deleteSchedule(params.id)
    }

}
