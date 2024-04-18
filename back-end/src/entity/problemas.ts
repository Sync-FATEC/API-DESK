import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Problemas {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    problema: string;

    constructor(problema: string) {
        this.problema = problema;
    }
}
