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
      .where(`weight_cycle_uuid = :id`, { id: cycleId })
      .getMany();
  }

  // ➡️ get record by uuid
  getRecordById(id: number): Promise<WeightRecord> {
    return this._datasource
      .getRepository(WeightRecord)
      .createQueryBuilder()
      .select()
      .where(`uuid = :id`, { id: id })
      .getOne();
  }

  // ➡️ create record
  create(record: WeightRecord): Promise<InsertResult> {
    console.table(record);
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
    console.table(record);
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
      .where(`uuid = :id`, { id: record.uuid })
      .execute();
  }

  // ➡️ delete record
  delete(recordId: number): Promise<DeleteResult> {
    return this._datasource
      .getRepository(WeightRecord)
      .createQueryBuilder()
      .delete()
      .from(WeightRecord)
      .where(`uuid = :id`, { id: recordId })
      .execute();
  }
}
