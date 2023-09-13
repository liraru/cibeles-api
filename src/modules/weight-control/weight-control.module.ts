import { Module } from '@nestjs/common';
import { WeightCycleController } from 'src/modules/weight-control/weight-cycle/weight-cycle.controller';
import { WeightRecordController } from 'src/modules/weight-control/weight-record/weight-record.controller';

@Module({
  controllers: [WeightCycleController, WeightRecordController]
})
export class WeightControlModule {}
