import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Address } from '../../adresses/entities/address.entity';
import { Category } from '../../categories/entities/category.entity';
import { Schedule } from '../../schedules/entities/schedule.entity';

@Entity('properties')
class Property {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column({
    default: false,
  })
  sold: boolean;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  value: number;

  @Column({
    type: 'integer',
  })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Schedule, (Schedule) => Schedule.property)
  schedules: Schedule[];

  @OneToOne(() => Address, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, {
    eager: true,
    nullable: true,
  })
  category: Category;
}

export { Property };
