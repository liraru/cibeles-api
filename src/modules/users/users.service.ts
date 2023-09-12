import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { UserQueryBuilderService } from 'src/modules/users/services/user-query-builder.service';
import { InsertResult, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(private readonly _userQB: UserQueryBuilderService) {}
  public getUsers(): Promise<User[]> {
    console.log(`getUsers`);
    return this._userQB.getUsers();
  }

  public getUserById(userId: number): Promise<User> {
    console.log(`getUserById -> ${userId}`);
    return this._userQB.getUserById(userId);
  }

  public createUser(user: User): Promise<InsertResult> {
    console.log(`createUser -> ${JSON.stringify(user)}`);
    return this._userQB.createUser(user);
  }

  public updateUser(user: User) {
    console.log(`updateUser -> ${JSON.stringify(user)}`);
    return this._userQB.updateUser(user);
  }

  public changeUserStatus(userId: number, isActive: boolean): Promise<UpdateResult> {
    console.log(`changeUserStatus -> id: ${userId}, status: ${isActive}`);
    return this._userQB.changeUserStatus(userId, isActive);
  }
}
