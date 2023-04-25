import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn } from "typeorm";

@Entity('adresses')
class Address {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ 
        length: 100 
    })
    district: string;

    @Column({
        length: 9
    })
    zipCode: string;

    @Column({
        nullable: true
    })
    number?: string;

    @Column()
    city: string;

    @Column({
        length: 2
    })
    state: string;
}

export { Address }
