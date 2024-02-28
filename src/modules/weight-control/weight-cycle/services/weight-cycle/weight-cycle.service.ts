import { Injectable } from '@nestjs/common';
import { WeightCycle } from 'src/modules/weight-control/entities/weight-cycle.entity';
import { WeightCycleQueryBuilderService } from 'src/modules/weight-control/weight-cycle/services/weight-cycle-query-builder/weight-cycle-query-builder.service';
import { InsertResult, UpdateResult } from 'typeorm';

@Injectable()
export class WeightCycleService {
  constructor(private readonly _qb: WeightCycleQueryBuilderService) {}

  // ➡️ get cycles by user
  getById(cycleId: string): Promise<WeightCycle> {
    return this._qb.getById(cycleId);
  }

  // ➡️ get cycles by user
  getAllByUser(userId: string): Promise<WeightCycle[]> {
    return this._qb.getAllByUser(userId);
  }

  // ➡️ get current user cycle
  getCurrentUser(userId: string): Promise<WeightCycle> {
    return this._qb.getCurrentCycleByUser(userId);
  }

  // ➡️ add cycle
  create(cycle: WeightCycle): Promise<InsertResult> {
    return this._qb.createWeightCycle(cycle);
  }

  // ➡️ edit cycle
  update(cycle: WeightCycle): Promise<UpdateResult> {
    return this._qb.updateWeightCycle(cycle);
  }

  // ➡️ activate/deactivate cycle
  changeStatus(isActive: boolean, userId: number): Promise<UpdateResult> {
    return this._qb.updateWeightCycleStatus(isActive, userId);
  }
}
