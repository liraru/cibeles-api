import { ENTITIES } from 'src/config/entity-tagging.constant';
import { WeightCycle } from 'src/modules/weight-control/entities/weight-cycle.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: ENTITIES.WeightRecords })
export class WeightRecord {
  @PrimaryGeneratedColumn() id?: number;
  @ManyToOne(() => WeightCycle, (WeightCycle) => WeightCycle.id) weightCycle: WeightCycle;
  @Column(`decimal`) weight: number;
  @Column(`decimal`) water: number;
  @Column(`decimal`) fat: number;
  @Column(`decimal`) waist: number;
  @Column(`decimal`) chest: number;
  @Column(`decimal`) hip: number;
  @Column(`decimal`) thigh: number;
  @Column(`decimal`) arm: number;
}
