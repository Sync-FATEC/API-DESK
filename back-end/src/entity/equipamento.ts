import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Salas } from "./salas";
import { Categorias } from "./categorias";

@Entity()
export class Equipamentos {
    @PrimaryGeneratedColumn()
    equipamentosID: number;

    @Column({ length: 255 })
    equipamento: string;

    @Column()
    sla: number;

    @Column({ length: 50 })
    prioridade: string;

    @ManyToOne(() => Salas)
    @JoinColumn({ name: 'salaID' })
    sala: Salas;

    @ManyToOne(() => Categorias)
    @JoinColumn({ name: 'categoriasID'})
    categoria: Categorias;

    constructor(equipamento: string, sla: number, prioridade: string, sala: Salas, categoria: Categorias) {
        this.equipamento = equipamento;
        this.sla = sla;
        this.prioridade = prioridade;
        this.sala = sala;
        this.categoria = categoria;
    };
};