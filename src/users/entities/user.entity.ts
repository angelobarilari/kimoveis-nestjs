import { Entity, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    PrimaryGeneratedColumn,
    OneToMany } from "typeorm";
// import { SchedulesUserProperties } from "./schedules_users_properties";
import { Exclude } from 'class-transformer'

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ 
        length: 150 
    })
    name: string;

    @Column({ 
        length: 150, 
        unique: true 
    })
    email: string;

    @Column({
        default: false
    })
    isAdm: boolean;

    @Column({ 
        default: true 
    })
    isActive: boolean

    @Column()
    @Exclude()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    // @OneToMany(() => SchedulesUserProperties, SchedulesUserProperties => SchedulesUserProperties.user)
    // schedule: SchedulesUserProperties[]
}

export { User } 