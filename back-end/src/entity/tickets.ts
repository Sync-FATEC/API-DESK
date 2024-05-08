import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { AppDataSource } from "../data-source";
import { Categorias } from "./categorias";
import { Equipamentos } from "./equipamento";
import { Salas } from "./salas";
import { Usuarios } from "./usuarios";

@Entity()
export class Tickets {
    @PrimaryGeneratedColumn()
    ticketsID: number;

    @Column({ type: 'datetime'})
    dataAbertura: Date;

    @Column({ type: 'datetime', nullable: true})
    dataFechamento: null | Date;

    @Column({ type: 'datetime'})
    dataSla: String;

    @Column({ length: 255 })
    titulo: string

    @Column({ length: 255 })
    descricao: string;

    @Column({ length: 1 })
    status: string;

    @Column({ length: 1 })
    tipoTecnico: string;

    @Column({ length: 50 })
    prioridade: string;

    @ManyToOne(() => Categorias)
    @JoinColumn({ name: 'categoriaID' })
    categoria: Categorias;

    @ManyToOne(() => Equipamentos)
    @JoinColumn({ name: 'equipamentosID' })
    equipamentos: Equipamentos;

    @ManyToOne(() => Salas)
    @JoinColumn({ name: 'salaID' })
    sala: Salas;

    @ManyToOne(() => Usuarios)
    @JoinColumn({ name: 'usuarioID' })
    usuario: Usuarios;

    @ManyToOne(() => Usuarios)
    @JoinColumn({ name: 'TecnicoID' })
    tecnico: Usuarios;

    constructor(dataAbertura: Date, dataSla: Date, titulo: string, descricao: string, status: string, tipoTecnico: string, prioridade: string, categoria: Categorias, equipamentos: Equipamentos, sala: Salas, usuario: Usuarios) {
        this.dataAbertura = dataAbertura;
        this.dataSla = dataSla;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.tipoTecnico = tipoTecnico;
        this.prioridade = prioridade;
        this.categoria = categoria;
        this.equipamentos = equipamentos;
        this.sala = sala;
        this.usuario = usuario;
        this.tecnico = null;
    };
};