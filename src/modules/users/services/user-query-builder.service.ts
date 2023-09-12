import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { DataSource, InsertResult } from 'typeorm';

@Injectable()
export class UserQueryBuilderService {
  constructor(private readonly _datasource: DataSource) {}

  getUsers(): Promise<User[]> {
    return this._datasource
      .getRepository(User)
      .createQueryBuilder()
      .select(`id, name, height, birthdate, gender`)
      .getRawMany();
  }

  createUser(user: User): Promise<InsertResult> {
    return this._datasource
      .getRepository(User)
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([user])
      .execute();
  }

  getUserById(userId: number): Promise<User> {
    return this._datasource
      .getRepository(User)
      .createQueryBuilder(`u`)
      .select(`u.id, u.name, u.height, u.birthdate, u.gender`)
      .where(`u.id = ${userId}`)
      .getRawOne();
  }
}
