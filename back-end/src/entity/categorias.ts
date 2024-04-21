import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
