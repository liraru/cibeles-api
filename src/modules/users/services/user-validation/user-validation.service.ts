import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class UserValidationService {
  private _isString(value: any): boolean {
    return typeof value === `string`;
  }

  checkIntegrity(user: User): string {
    let errorMsg = '';
    if (!this._isString(user.name) || user.name.length < 3) {
      errorMsg = `Name must be a string and longer than 3 characters.`;
    }

    if (!this._isString(user.birthdate) || user.birthdate.length !== 10) {
      errorMsg = `Birthdate must be 10 characters long.`;
    }

    if (!this._isString(user.gender) || user.gender.length !== 1) {}

    return errorMsg;
  }
}
