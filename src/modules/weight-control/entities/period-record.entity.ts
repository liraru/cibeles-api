import { ENTITIES } from 'src/config/entity-tagging.constant';
import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: ENTITIES.PeriodRecords })
export class PeriodRecord {
  @PrimaryGeneratedColumn() id?: number;
  @Column() name: string;
  @ManyToOne(() => User, (user) => user.id) user: User;
  @Column() date: string;
  @Column() quantity: number;
}
