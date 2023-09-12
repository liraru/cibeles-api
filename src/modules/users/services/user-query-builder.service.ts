import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { DataSource, InsertResult, UpdateResult } from 'typeorm';

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

  getUserById(userId: number): Promise<User> {
    return this._datasource
      .getRepository(User)
      .createQueryBuilder(`u`)
      .select(`u.id, u.name, u.height, u.birthdate, u.gender`)
      .where(`u.id = ${userId}`)
      .getRawOne();
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

  updateUser(user: User): Promise<UpdateResult> {
    return this._datasource
      .getRepository(User)
      .createQueryBuilder()
      .update(User)
      .set({
        name: user.name,
        height: user.height,
        birthdate: user.birthdate,
        gender: user.gender
      })
      .where('id = :id', { id: user.id })
      .execute();
  }

  changeUserStatus(userId: number, isActive: boolean): Promise<UpdateResult> {
    return this._datasource
      .getRepository(User)
      .createQueryBuilder()
      .update(User)
      .set({ isActive: isActive })
      .where('id = :id', { id: userId })
      .execute();
  }
}
