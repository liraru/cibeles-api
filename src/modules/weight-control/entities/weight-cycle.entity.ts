import { ENTITIES } from 'src/config/entity-tagging.constant';
import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: ENTITIES.WeightCycles })
export class WeightCycle {
  @PrimaryGeneratedColumn() id?: number;
  @ManyToOne(() => User, (user) => user.id) user: User;
  @Column() startDate: string;
  @Column(`decimal`, { precision: 6, scale: 2 }) initialWeight: number;
  @Column(`decimal`, { precision: 6, scale: 2 }) targetWeight: number;
  @Column(`boolean`, { default: true }) isActive: boolean;
}
