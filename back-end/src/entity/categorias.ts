import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Categorias {
    @PrimaryGeneratedColumn()
    categoriaID: number;

    @Column({ length: 255 })
    categoria: string;

    @Column({ length: 1 })
    tipoTecnico: string;

    constructor(categoria: string, tipoTecnico: string) {
        this.categoria = categoria;
        this.tipoTecnico = tipoTecnico;
    }
}
