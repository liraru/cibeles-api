import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: ENTITIES.Diets })
export class PeriodRecord {
  @PrimaryGeneratedColumn() id?: number;
  @Column() filename: string;
  @Column() date: string;
  @Column() origin: string;
}
