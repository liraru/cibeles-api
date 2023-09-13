import { Controller } from '@nestjs/common';
import { WeightCycleService } from 'src/modules/weight-control/weight-cycle/services/weight-cycle/weight-cycle.service';

@Controller('weight-cycle')
export class WeightCycleController {
  constructor(private readonly _weightCycleService: WeightCycleService) {}

  /*
  ➡️ get all cycles
  @Get('')
  getAllCycles(@Query() query): Promise<WeightCycle[]> {

  }

  ➡️ get cycles by user
  ➡️ get current user cycle
  ➡️ add cycle
  ➡️ edit cycle
  ➡️ activate/deactivate cycle
  */
}
