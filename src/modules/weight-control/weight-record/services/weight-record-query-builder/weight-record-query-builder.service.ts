import { Injectable } from '@nestjs/common';
import { WeightRecord } from 'src/modules/weight-control/entities/weight-record.entity';
import { DataSource, DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Injectable()
export class WeightRecordQueryBuilderService {
  constructor(private readonly _datasource: DataSource) {}

  // ➡️ get all cycle's records
  getCycleRecords(cycleId: number): Promise<WeightRecord[]> {
    return this._datasource
      .getRepository(WeightRecord)
      .createQueryBuilder()
      .select()
      .where(`weight_cycle_id = :id`, { id: cycleId })
      .getMany();
  }

  // ➡️ create record
  create(record: WeightRecord): Promise<InsertResult> {
    return this._datasource
      .getRepository(WeightRecord)
      .createQueryBuilder()
      .insert()
      .into(WeightRecord)
      .values([record])
      .execute();
  }

  // ➡️ update record
  update(record: WeightRecord): Promise<UpdateResult> {
    return this._datasource
      .getRepository(WeightRecord)
      .createQueryBuilder()
      .update(WeightRecord)
      .set({
        weightCycle: record.weightCycle,
        weight: record.weight,
        water: record.water,
        fat: record.fat,
        waist: record.waist,
        chest: record.chest,
        hip: record.hip,
        thigh: record.thigh,
        arm: record.arm
      })
      .where(`id = :id`, { id: record.id })
      .execute();
  }

  // ➡️ delete record
  delete(recordId: number): Promise<DeleteResult> {
    return this._datasource
      .getRepository(WeightRecord)
      .createQueryBuilder()
      .delete()
      .from(WeightRecord)
      .where(`id = :id`, { id: recordId })
      .execute();
  }
}
