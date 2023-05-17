import { Property } from '../../properties/entities/propety.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column({
    length: 100,
    unique: true,
  })
  name: string;

  @OneToMany(() => Property, (Property) => Property.category)
  properties: Property;
}
