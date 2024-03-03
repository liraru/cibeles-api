import { Injectable } from '@nestjs/common';
import { WeightCycle } from 'src/modules/weight-control/entities/weight-cycle.entity';
import { DataSource, InsertResult, UpdateResult } from 'typeorm';

@Injectable()
export class WeightCycleQueryBuilderService {
  constructor(private readonly _datasource: DataSource) {}

  // ➡️ get cycle by id
  getById(cycleId: string): Promise<WeightCycle> {
    return this._datasource
      .getRepository(WeightCycle)
      .createQueryBuilder()
      .select()
      .where(`uuid = :id`, { id: cycleId })
      .getOne();
  }

  // ➡️ get cycles by user
  getAllByUser(userId: string): Promise<WeightCycle[]> {
    return this._datasource
      .getRepository(WeightCycle)
      .createQueryBuilder()
      .select()
      .where(`user_uuid = :id`, { id: userId })
      .getMany();
  }

  // ➡️ get current user cycle
  getCurrentCycleByUser(userId: string): Promise<WeightCycle> {
    return this._datasource
      .getRepository(WeightCycle)
      .createQueryBuilder()
      .select()
      .where(`user_uuid = :id`, { id: userId })
      .getOne();
  }

  // ➡️ add cycle
  createWeightCycle(cycle: WeightCycle): Promise<InsertResult> {
    return this._datasource
      .getRepository(WeightCycle)
      .createQueryBuilder()
      .insert()
      .into(WeightCycle)
      .values([cycle])
      .execute();
  }

  // ➡️ edit cycle
  updateWeightCycle(cycle: WeightCycle): Promise<UpdateResult> {
    return this._datasource
      .getRepository(WeightCycle)
      .createQueryBuilder()
      .update(WeightCycle)
      .set({
        startDate: cycle.startDate,
        initialWeight: cycle.initialWeight,
        targetWeight: cycle.targetWeight
      })
      .where(`uuid = :id`, { id: cycle.uuid })
      .execute();
  }

  // ➡️ activate/deactivate cycle
  updateWeightCycleStatus(isActive: boolean, id: number): Promise<UpdateResult> {
    return this._datasource
      .getRepository(WeightCycle)
      .createQueryBuilder()
      .update(WeightCycle)
      .set({ isActive: isActive })
      .where(`uuid = :id`, { id: id })
      .execute();
  }
}
