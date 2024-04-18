import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Equipamento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    descricao: string;

    constructor(descricao: string) {
        this.descricao = descricao;
    }
}
