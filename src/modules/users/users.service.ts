import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { User } from 'src/modules/users/entities/user.entity';
import { UserQueryBuilderService } from 'src/modules/users/services/user-query-builder.service';
import { InsertResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(private readonly _userQB: UserQueryBuilderService) {}
  public getUsers(): Observable<User[]> {
    console.log(`getUsers`);
    return of([]);
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
