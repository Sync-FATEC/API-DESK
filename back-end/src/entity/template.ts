import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categorias } from './categorias';

@Entity()
export class Templates {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'longtext' })
    mensagem: string;

    @ManyToOne(() => Categorias)
    categoria: Categorias;

    constructor(mensagem: string, categoria: Categorias) {
        this.mensagem = mensagem;
        this.categoria = categoria;
    }
}
