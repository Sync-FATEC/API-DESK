import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { AppDataSource } from "../data-source";
import { Categorias } from "./categorias";

@Entity()
export class Mensagens {
    @PrimaryGeneratedColumn()
    mensagemID: number;

    @Column({ enum: ['1', '2', '3']})
    tipoMensagem: string;

    @Column({ length: 255 })
    titulo: string;

    @Column({ length: 255 })
    mensagem: string;

    @ManyToOne(() => Categorias)
    @JoinColumn({ name: 'categoriaID'})
    categoria: Categorias

    constructor(tipoMensagem: string, titulo: string, mensagem: string, categoria: Categorias) {
        this.tipoMensagem = tipoMensagem;
        this.titulo = titulo;
        this.mensagem = mensagem;
        this.categoria = categoria;
    };
};

export const mensagensRepositorio = AppDataSource.getRepository(Mensagens);