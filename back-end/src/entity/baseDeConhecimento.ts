import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categorias } from './categorias';

@Entity()
export class BaseDeConhecimento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    titulo: string;

    @Column({ type: 'longtext' })
    descricao: string;

    @ManyToOne(() => Categorias)
    categoria: Categorias;

    constructor(titulo: string, descricao: string, categoria: Categorias) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.categoria = categoria;
    }
}
