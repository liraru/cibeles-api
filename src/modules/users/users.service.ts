import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { User } from 'src/modules/users/entities/user.entity';
import { UserQueryBuilderService } from 'src/modules/users/services/user-query-builder.service';

@Injectable()
export class UsersService {
  constructor(private readonly _userQB: UserQueryBuilderService) {}
  public getUsers(): Observable<User[]> {
    console.log(`getUsers`);
    return of([]);
  }

  public getUserById(userId: number): Observable<User> {
    console.log(`getUserById -> ${userId}`);
    return of();
  }

  public createUser(user: User) {
    console.log(`createUser -> ${user.name}`);
    console.log(user);
    this._userQB.createUser(user);
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
