import { Controller, Get, Param } from '@nestjs/common';
import { WeightCycle } from 'src/modules/weight-control/entities/weight-cycle.entity';
import { WeightCycleService } from 'src/modules/weight-control/weight-cycle/services/weight-cycle/weight-cycle.service';

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
  // ➡️ add cycle
  // ➡️ edit cycle
  // ➡️ activate/deactivate cycle 
}
