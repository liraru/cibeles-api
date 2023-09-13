import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { WeightCycle } from 'src/modules/weight-control/entities/weight-cycle.entity';
import { WeightCycleService } from 'src/modules/weight-control/weight-cycle/services/weight-cycle/weight-cycle.service';
import { InsertResult, UpdateResult } from 'typeorm';

@Controller('weight-cycle')
export class WeightCycleController {
  constructor(private readonly _weightCycleService: WeightCycleService) {}

  // ➡️ get all cycles
  @Get(``)
  getAll(): Promise<WeightCycle[]> {
    return this._weightCycleService.getAll();
  }

  // ➡️ get cycles by user
  @Get(`user/:id`)
  getAllByUser(@Param('id') userId: number): Promise<WeightCycle[]> {
    return this._weightCycleService.getAllByUser(userId);
  }

  // ➡️ get current user cycle
  @Get(`user-current`)
  getUserCurrent(userId: number): Promise<WeightCycle> {
    return this._weightCycleService.getCurrentUser(userId);
  }

  // ➡️ add cycle
  @Post(`create`)
  createCycle(cycle: WeightCycle): Promise<InsertResult> {
    return this._weightCycleService.create(cycle);
  }

  // ➡️ edit cycle
  @Put(`update`)
  updateCycle(cycle: WeightCycle): Promise<UpdateResult> {
    return this._weightCycleService.update(cycle);
  }

  // ➡️ activate/deactivate cycle
  @Put(`status`)
  changeStatus(isActive: boolean, userId: number): Promise<UpdateResult> {
    return this._weightCycleService.changeStatus(isActive, userId);
  }
}
