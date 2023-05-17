import { Property } from '../../properties/entities/propety.entity';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('schedules')
class Schedule {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'time' })
  hour: string;

  @ManyToOne(() => Property, { eager: true, nullable: false })
  property: Property;

  @ManyToOne(() => User, { eager: true, nullable: false })
  user: User;
}

export { Schedule };
