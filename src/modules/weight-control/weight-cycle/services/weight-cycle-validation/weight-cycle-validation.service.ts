import { Injectable } from '@nestjs/common';
import { UserValidationService } from 'src/modules/users/services/user-validation/user-validation.service';
import { WeightCycle } from 'src/modules/weight-control/entities/weight-cycle.entity';
import { REGEX } from 'src/utils/string.utils';

@Injectable()
export class WeightCycleValidationService {
  constructor(private readonly _userValidationService: UserValidationService) {}
  checkIntegrity(cycle: WeightCycle): string {
    let errorMsg = ``;

    if (!this._userValidationService.checkUserExists(cycle.id)) {
      errorMsg = `User not exists`;
    }

    if (!isNaN(cycle.initialWeight) || cycle.initialWeight < 45 || cycle.initialWeight > 150) {
      errorMsg = `Initial weight must be a number between 45 and 150.`;
    }

    if (!isNaN(cycle.targetWeight) || cycle.targetWeight < 45 || cycle.targetWeight > 90) {
      errorMsg = `Target weight must be a number between 45 and 90`;
    }

    if (typeof cycle.startDate !== `string` || !REGEX.YYYYMMDD.test(cycle.startDate)) {
      errorMsg = `Start date must be a string formatted YYYY-MM-DD.`;
    }

    return errorMsg;
  }
}
