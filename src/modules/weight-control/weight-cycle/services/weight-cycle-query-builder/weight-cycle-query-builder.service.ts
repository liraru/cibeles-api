import { Injectable } from '@nestjs/common';
import { WeightCycle } from 'src/modules/weight-control/entities/weight-cycle.entity';
import { DataSource, InsertResult, UpdateResult } from 'typeorm';

@Injectable()
export class WeightCycleQueryBuilderService {
  constructor(private readonly _datasource: DataSource) {}

  // ➡️ get all cycles
  getAll(): Promise<WeightCycle[]> {
    return this._datasource.getRepository(WeightCycle).createQueryBuilder().select().getMany();
  }

  // ➡️ get cycles by user
  getAllByUser(userId: number): Promise<WeightCycle[]> {
    return this._datasource
      .getRepository(WeightCycle)
      .createQueryBuilder()
      .select()
      .where(`user_id = :id`, { id: userId })
      .getMany();
  }

  // ➡️ get current user cycle
  getCurrentCycleByUser(userId: number): Promise<WeightCycle> {
    return this._datasource
      .getRepository(WeightCycle)
      .createQueryBuilder()
      .select()
      .where(`user_id = :id`, { id: userId })
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
      .where(`id = :id`, { id: cycle.id })
      .execute();
  }

  // ➡️ activate/deactivate cycle
  updateWeightCycleStatus(isActive: boolean, id: number): Promise<UpdateResult> {
    return this._datasource
      .getRepository(WeightCycle)
      .createQueryBuilder()
      .update(WeightCycle)
      .set({ isActive: isActive })
      .where(`id = :id`, { id: id })
      .execute();
  }
}
