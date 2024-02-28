import { ENTITIES } from 'src/config/entity-tagging.constant';
import { WeightCycle } from 'src/modules/weight-control/entities/weight-cycle.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: ENTITIES.WeightRecords })
export class WeightRecord {
  @PrimaryGeneratedColumn() id?: number;
  @ManyToOne(() => WeightCycle, (WeightCycle) => WeightCycle.uuid) weightCycle: WeightCycle;
  @Column(`decimal`, { precision: 6, scale: 2 }) weight: number;
  @Column(`decimal`, { precision: 6, scale: 2 }) water: number;
  @Column(`decimal`, { precision: 6, scale: 2 }) fat: number;
  @Column(`decimal`, { precision: 6, scale: 2 }) waist: number;
  @Column(`decimal`, { precision: 6, scale: 2 }) chest: number;
  @Column(`decimal`, { precision: 6, scale: 2 }) hip: number;
  @Column(`decimal`, { precision: 6, scale: 2 }) thigh: number;
  @Column(`decimal`, { precision: 6, scale: 2 }) arm: number;
}
