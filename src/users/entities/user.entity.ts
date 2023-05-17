import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Schedule } from '../../schedules/entities/schedule.entity';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column({
    length: 150,
  })
  name: string;

  @Column({
    length: 150,
    unique: true,
  })
  email: string;

  @Column({
    default: false,
  })
  isAdm: boolean;

  @Column({
    default: true,
  })
  isActive: boolean;

  @Column()
  @Exclude()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Schedule, (Schedule) => Schedule.user)
  schedule: Schedule[];
}

export { User };
