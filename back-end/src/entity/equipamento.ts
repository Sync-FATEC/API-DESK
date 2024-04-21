import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Salas } from "./salas";
import { Categorias } from "./categorias";

@Entity()
export class Equipamentos {
    @PrimaryGeneratedColumn()
    equipamentosID: number;

    @Column({ length: 255 })
    tipoEquipamento: string;

    @Column({ length: 255 })
    equipamento: string;

    @Column({ type: 'timestamp' })
    sla: Date;

    @Column()
    prioridade: number;

    @ManyToOne(() => Salas)
    @JoinColumn({ name: 'salaID' })
    sala: Salas;

    @ManyToOne(() => Categorias)
    @JoinColumn({ name: 'categoriasID'})
    categoria: Categorias;

    constructor(tipoEquipamento: string, equipamento: string, sla: Date, prioridade: number, sala: Salas, categoria: Categorias) {
        this.tipoEquipamento = tipoEquipamento;
        this.equipamento = equipamento;
        this.sla = sla;
        this.prioridade = prioridade;
        this.sala = sala;
        this.categoria = categoria;
    };
};