import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { UserQueryBuilderService } from 'src/modules/users/services/user-query-builder/user-query-builder.service';
import { UserValidationService } from 'src/modules/users/services/user-validation/user-validation.service';
import { RequestErrorManagerService } from 'src/services/request-error-manager/request-error-manager.service';
import { StringUtils } from 'src/utils/string.utils';
import { InsertResult, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    private readonly _userQB: UserQueryBuilderService,
    private readonly _userValidationService: UserValidationService,
    private readonly _requestErrorManagerService: RequestErrorManagerService
  ) {}

  private _throwErrorBadUser(errorMsg: string) {
    throw new HttpException({ status: HttpStatus.BAD_REQUEST, error: errorMsg }, HttpStatus.BAD_REQUEST);
  }

  private _log(method: string, param?: any) {
    console.log(`${method} ${param ? ' :: ' + JSON.stringify(param) : ''}`);
  }

  getUsers(): Promise<User[]> {
    this._log(`getUsers`);
    return this._userQB.getUsers();
  }

  getUserById(userId: number): Promise<User> {
    this._log(`getUserById`, userId);
    return this._userQB.getUserById(userId);
  }

  createUser(user: User): Promise<InsertResult> {
    user = StringUtils.trimPlainObject(user);
    const errorMsg = this._userValidationService.checkIntegrity(user);
    this._log(`createUser`, user);
    if (errorMsg.length > 0) {
      this._throwErrorBadUser(errorMsg);
    }
    return this._userQB.createUser(user);
  }

  updateUser(user: User) {
    user = StringUtils.trimPlainObject(user);
    const errorMsg = this._userValidationService.checkIntegrity(user);
    console.log(`updateUser`, user);
    if (errorMsg.length > 0) {
      this._throwErrorBadUser(errorMsg);
    }
    return this._userQB.updateUser(user);
  }

  changeUserStatus(userId: number, isActive: boolean): Promise<UpdateResult> {
    console.log(`changeUserStatus -> id: ${userId}, status: ${isActive}`);
    if (isNaN(userId)) {
      this._requestErrorManagerService.invalidId();
    }
    return this._userQB.changeUserStatus(userId, isActive);
  }
}
