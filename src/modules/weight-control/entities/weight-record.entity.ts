import { ENTITIES } from 'src/config/entity-tagging.constant';
import { WeightCycle } from 'src/modules/weight-control/entities/weight-cycle.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: ENTITIES.WeightRecords })
export class WeightRecord {
  @PrimaryGeneratedColumn() id?: number;
  @ManyToOne(() => WeightCycle, (WeightCycle) => WeightCycle.id) weightCycle: WeightCycle;
  @Column() weight: number;
  @Column() water: number;
  @Column() fat: number;
  @Column() waist: number;
  @Column() chest: number;
  @Column() hip: number;
  @Column() thigh: number;
  @Column() arm: number;
}
