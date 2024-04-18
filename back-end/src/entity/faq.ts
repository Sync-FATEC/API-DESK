import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categorias } from './categorias';

@Entity()
export class FAQ {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    titulo: string;

    @Column('text')
    resposta: string;

    @ManyToOne(() => Categorias)
    categoria_id: Categorias;

    constructor(titulo: string, resposta: string, categoria: Categorias) {
        this.titulo = titulo;
        this.resposta = resposta;
        this.categoria_id = categoria;
    }
}
