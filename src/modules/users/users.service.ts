import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { UserQueryBuilderService } from 'src/modules/users/services/user-query-builder.service';
import { InsertResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(private readonly _userQB: UserQueryBuilderService) {}
  public getUsers(): Promise<User[]> {
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
    console.log(`updateUser -> ${user.name}`);
    return;
  }

  public deleteUser(userId: number) {
    console.log(`deleteUser -> ${userId}`);
    return;
  }
}
