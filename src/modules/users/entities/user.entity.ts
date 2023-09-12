import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: ENTITIES.Users })
export class User {
  @PrimaryGeneratedColumn() id?: number;
  @Column() name: string;
  @Column() height: number;
  @Column() birthdate: string;
  @Column() gender: string;
  @Column('boolean', { default: true }) isActive: boolean;
}
