import { 
    Column,
    Entity, 
    PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
export class Category {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({
        length: 100,
        unique: true
    })
    name: string;
}

