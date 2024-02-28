import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: ENTITIES.WeightCycles })
export class WeightCycle {
  @PrimaryGeneratedColumn() uuid: number;
  @Column() startDate: string;
  @Column(`decimal`, { precision: 6, scale: 2 }) initialWeight: number;
  @Column(`decimal`, { precision: 6, scale: 2 }) targetWeight: number;
  @Column(`boolean`, { default: true }) isActive: boolean;
}
