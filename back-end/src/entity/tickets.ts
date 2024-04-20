import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { AppDataSource } from "../data-source";
import { Categorias } from "./categorias";
import { Equipamentos } from "./equipamento";
import { Salas } from "./salas";

@Entity()
export class Tickets {
    @PrimaryGeneratedColumn()
    ticketsID: number;

    @Column({ type: 'datetime'})
    dataAbertura: Date;

    @Column({ type: 'datetime'})
    dataFechamento: Date | null;

    @Column({ length: 255 })
    titulo: string

    @Column({ length: 255 })
    descricao: string;

    @Column({ enum: ['1', '2', '3', '4'] })
    status: string;

    @ManyToOne(() => Categorias)
    @JoinColumn({ name: 'categoriaID' })
    categoria: Categorias;

    @ManyToOne(() => Equipamentos)
    @JoinColumn({ name: 'equipamentosID' })
    equipamentos: Equipamentos;

    @ManyToOne(() => Salas)
    @JoinColumn({ name: 'salaID' })
    sala: Salas;

    constructor(dataAbertura: Date, titulo: string, descricao: string, status: string, categoria: Categorias, equipamentos: Equipamentos, sala: Salas) {
        this.dataAbertura = dataAbertura;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.categoria = categoria;
        this.equipamentos = equipamentos;
        this.sala = sala;
    };
};

export const ticketsRepositorio = AppDataSource.getRepository(Tickets);