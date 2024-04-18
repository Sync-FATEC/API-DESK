import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Turno {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    turno: number;

    constructor(turno: number) {
        this.turno = turno;
    }
}
