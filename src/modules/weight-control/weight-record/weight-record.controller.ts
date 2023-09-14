import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WeightRecord } from 'src/modules/weight-control/entities/weight-record.entity';
import { WeightRecordService } from 'src/modules/weight-control/weight-record/services/weight-record/weight-record.service';
import { InsertResult, UpdateResult } from 'typeorm';

@Controller('weight-record')
export class WeightRecordController {
  constructor(private readonly _weightRecordService: WeightRecordService) {}

  // ➡️ get all cycle's records
  @Get(`:id`)
  getCycleRecords(@Param(`id`) cycleId: number): Promise<WeightRecord[]> {
    return this._weightRecordService.getCycleRecords(cycleId);
  }

  // ➡️ create record
  @Post(`create`)
  create(@Body() record: WeightRecord): Promise<InsertResult> {
    return this._weightRecordService.create(record);
  }

  // ➡️ update record
  @Put(`update`)
  update(@Body() record): Promise<UpdateResult> {
    return this._weightRecordService.update(record);
  }

  // ➡️ delete record
  @Delete(`delete/:id`)
  delete(@Param() id: number) {
    this._weightRecordService.delete(id);
  }
}
