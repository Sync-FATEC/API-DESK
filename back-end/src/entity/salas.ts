import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AppDataSource } from "../data-source";

@Entity()
export class Salas {
    @PrimaryGeneratedColumn()
    salaID: number;

    @Column()
    numeroSala: number;

    @Column({ length: 255 })
    identificacao: string;

    constructor(numeroSala: number, identificacao: string) {
        this.numeroSala = numeroSala;
        this.identificacao = identificacao;
    };
};