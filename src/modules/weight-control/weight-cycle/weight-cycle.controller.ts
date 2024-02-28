import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { WeightCycle } from 'src/modules/weight-control/entities/weight-cycle.entity';
import { WeightCycleService } from 'src/modules/weight-control/weight-cycle/services/weight-cycle/weight-cycle.service';
import { InsertResult, UpdateResult } from 'typeorm';

@Controller('weight-cycle')
export class WeightCycleController {
  constructor(private readonly _weightCycleService: WeightCycleService) {}

  @Get(`:id`)
  getById(@Param(`id`) cycleId: string): Promise<WeightCycle> {
    return this._weightCycleService.getById(cycleId);
  }

  // ➡️ get cycles by user
  @Get(`user/:id`)
  getAllByUser(@Param('id') userId: string): Promise<WeightCycle[]> {
    return this._weightCycleService.getAllByUser(userId);
  }

  // ➡️ add cycle
  @Post(``)
  createCycle(@Body() cycle: WeightCycle): Promise<InsertResult> {
    return this._weightCycleService.create(cycle);
  }

  // ➡️ edit cycle
  @Put(`:id`)
  updateCycle(@Param('id') uuid: string, @Body() cycle: WeightCycle): Promise<UpdateResult> {
    cycle.uuid = uuid;
    return this._weightCycleService.update(cycle);
  }

  // ➡️ activate/deactivate cycle
  @Put(`status`)
  changeStatus(@Body() data: { isActive: boolean; cycleId: number }): Promise<UpdateResult> {
    return this._weightCycleService.changeStatus(data.isActive, data.cycleId);
  }
}
