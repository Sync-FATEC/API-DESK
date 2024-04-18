import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Categorias } from './categorias';

@Entity()
export class Equipamento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    descricao: string;

    @ManyToOne( () => Categorias)
    categoria_id: Categorias


    constructor(descricao: string) {
        this.descricao = descricao;
    }
}
