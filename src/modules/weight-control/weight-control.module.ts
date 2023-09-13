import { Module } from '@nestjs/common';
import { WeightCycleQueryBuilderService } from 'src/modules/weight-control/weight-cycle/services/weight-cycle-query-builder/weight-cycle-query-builder.service';
import { WeightCycleService } from 'src/modules/weight-control/weight-cycle/services/weight-cycle/weight-cycle.service';
import { WeightCycleController } from 'src/modules/weight-control/weight-cycle/weight-cycle.controller';
import { WeightRecordController } from 'src/modules/weight-control/weight-record/weight-record.controller';

@Module({
  providers: [WeightCycleService, WeightCycleQueryBuilderService],
  controllers: [WeightCycleController, WeightRecordController]
})
export class WeightControlModule {}
