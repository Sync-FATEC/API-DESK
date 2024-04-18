import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AppDataSource } from '../data-source';

@Entity()
export class TiposTec {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ enum: ['n1', 'n2', 'n3', 'admin'], nullable: false })
    tipo_tec: string;

    constructor(tipo_tec: string) {
        this.tipo_tec = tipo_tec;
    }
}

export const tiposTecRepositorio = AppDataSource.getRepository(TiposTec)