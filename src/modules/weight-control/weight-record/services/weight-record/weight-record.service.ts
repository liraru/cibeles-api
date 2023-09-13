import { Injectable } from '@nestjs/common';
import { WeightRecordQueryBuilderService } from 'src/modules/weight-control/weight-record/services/weight-record-query-builder/weight-record-query-builder.service';

@Injectable()
export class WeightRecordService {
  constructor(private readonly _weightRecordQB: WeightRecordQueryBuilderService) {}
  // ➡️ get all cycle's records
  // ➡️ create record
  // ➡️ update record
  // ➡️ delete record
}
