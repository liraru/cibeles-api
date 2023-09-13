import { Controller } from '@nestjs/common';
import { WeightRecordService } from 'src/modules/weight-control/weight-record/services/weight-record/weight-record.service';

@Controller('weight-record')
export class WeightRecordController {
  constructor(private readonly _weightRecordService: WeightRecordService) {}

  // ➡️ get all cycle's records

  // ➡️ create record

  // ➡️ update record

  // ➡️ delete record
}
