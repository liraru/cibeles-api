import { Injectable } from '@nestjs/common';
import { WeightRecord } from 'src/modules/weight-control/entities/weight-record.entity';
import { WeightRecordQueryBuilderService } from 'src/modules/weight-control/weight-record/services/weight-record-query-builder/weight-record-query-builder.service';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Injectable()
export class WeightRecordService {
  constructor(private readonly _qb: WeightRecordQueryBuilderService) {}

  // ➡️ get all cycle's records
  getCycleRecords(cycleId: number): Promise<WeightRecord[]> {
    return this._qb.getCycleRecords(cycleId);
  }

  // ➡️ get all cycle's records
  getRecord(id: number): Promise<WeightRecord> {
    return this._qb.getRecordById(id);
  }

  // ➡️ create record
  create(record: WeightRecord): Promise<InsertResult> {
    return this._qb.create(record);
  }

  // ➡️ update record
  update(record: WeightRecord): Promise<UpdateResult> {
    return this._qb.update(record);
  }

  // ➡️ delete record
  delete(id: number): Promise<DeleteResult> {
    return this._qb.delete(id);
  }
}
