import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { DataSource, InsertResult } from 'typeorm';

@Injectable()
export class UserQueryBuilderService {
  constructor(private readonly _datasource: DataSource) {}

  createUser(user: User): Promise<InsertResult> {
    return this._datasource
      .getRepository(User)
      .createQueryBuilder()
      .insert().into(User)
      .values([user])
      .execute();
  }
}
