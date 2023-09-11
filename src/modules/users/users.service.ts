import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { IUser } from 'src/modules/users/interfaces/user.interface';

@Injectable()
export class UsersService {
  public getUsers(): Observable<IUser[]> {
    return of([]);
  }

  public getUserById(userId: number): Observable<IUser> {
    return of();
  }

  public createUser(user: IUser) {
    return;
  }

  public updateUser(user: IUser) {
    return;
  }

  public deleteUser(userId: number) {
    return;
  }
}
