import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserValidationService } from 'src/modules/users/services/user-validation/user-validation.service';
import { WeightCycle } from 'src/modules/weight-control/entities/weight-cycle.entity';
import { WeightCycleQueryBuilderService } from 'src/modules/weight-control/weight-cycle/services/weight-cycle-query-builder/weight-cycle-query-builder.service';
import { WeightCycleValidationService } from 'src/modules/weight-control/weight-cycle/services/weight-cycle-validation/weight-cycle-validation.service';
import { InsertResult, UpdateResult } from 'typeorm';

@Injectable()
export class WeightCycleService {
  constructor(
    private readonly _qb: WeightCycleQueryBuilderService,
    private readonly _validationService: WeightCycleValidationService,
    private readonly _userValidationService: UserValidationService
  ) {}

  // ➡️ get all cycles
  getAll(): Promise<WeightCycle[]> {
    return this._qb.getAll();
  }

  // ➡️ get cycles by user
  getAllByUser(userId: number): Promise<WeightCycle[]> {
    const errorMsg = this._userValidationService.checkUserExists(userId);
    if (errorMsg) {
      throw new HttpException({ status: HttpStatus.BAD_REQUEST, error: errorMsg }, HttpStatus.BAD_REQUEST);
    }
    return this._qb.getAllByUser(userId);
  }

  // ➡️ get current user cycle
  getCurrentUser(userId: number): Promise<WeightCycle> {
    // this._userValidationService.checkUserExists(userId).then((exists: boolean) => {
      return this._qb.getCurrentCycleByUser(userId);
    // })
  }

  // ➡️ add cycle
  create(cycle: WeightCycle): Promise<InsertResult> {
    return this._qb.createWeightCycle(cycle);
  }

  // ➡️ edit cycle
  update(cycle: WeightCycle): Promise<UpdateResult> {
    return this._qb.updateWeightCycle(cycle);
  }

  // ➡️ activate/deactivate cycle
  changeStatus(isActive: boolean, userId: number): Promise<UpdateResult> {
    return this._qb.updateWeightCycleStatus(isActive, userId);
  }
}
