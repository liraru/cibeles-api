import { Module } from '@nestjs/common';
import { WeightCycleQueryBuilderService } from 'src/modules/weight-control/weight-cycle/services/weight-cycle-query-builder/weight-cycle-query-builder.service';
import { WeightCycleService } from 'src/modules/weight-control/weight-cycle/services/weight-cycle/weight-cycle.service';
import { WeightCycleController } from 'src/modules/weight-control/weight-cycle/weight-cycle.controller';
import { WeightRecordQueryBuilderService } from 'src/modules/weight-control/weight-record/services/weight-record-query-builder/weight-record-query-builder.service';
import { WeightRecordService } from 'src/modules/weight-control/weight-record/services/weight-record/weight-record.service';
import { WeightRecordController } from 'src/modules/weight-control/weight-record/weight-record.controller';

@Module({
  providers: [
    WeightCycleService,
    WeightCycleQueryBuilderService,
    WeightRecordService,
    WeightRecordQueryBuilderService
  ],
  controllers: [WeightCycleController, WeightRecordController]
})
export class WeightControlModule {}
