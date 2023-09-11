import { Module } from '@nestjs/common';
import { WeightCycleController } from 'src/modules/weight-control/controllers/weight-cycle/weight-cycle.controller';
import { WeightRecordController } from 'src/modules/weight-control/controllers/weight-record/weight-record.controller';

@Module({
  controllers: [WeightCycleController, WeightRecordController]
})
export class WeightControlModule {}
