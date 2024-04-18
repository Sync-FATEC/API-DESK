import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Categorias {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    categoria: string;

    @Column({ type: 'timestamp' })
    sla: Date;

    constructor(categoria: string, sla: Date) {
        this.categoria = categoria;
        this.sla = sla;
    }
}
