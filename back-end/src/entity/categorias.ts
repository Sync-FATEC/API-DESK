import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AppDataSource } from '../data-source';

@Entity()
export class Categorias {
    @PrimaryGeneratedColumn()
    categoriaID: number;

    @Column({ length: 255 })
    categoria: string;

    constructor(categoria: string) {
        this.categoria = categoria;
    }
}

export const categoriasRepositorio = AppDataSource.getRepository(Categorias);