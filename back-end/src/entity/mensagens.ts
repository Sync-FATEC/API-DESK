import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { AppDataSource } from "../data-source";
import { Categorias } from "./categorias";

@Entity()
export class Mensagens {
    @PrimaryGeneratedColumn()
    mensagemID: number;

    @Column({ length: 1})
    tipoMensagem: string;

    @Column({ length: 255 })
    titulo: string;

    @Column({ length: 255, nullable: true})
    mensagem: string | null;

    @ManyToOne(() => Categorias)
    @JoinColumn({ name: 'categoriaID'})
    categoria: Categorias

    constructor(tipoMensagem: string, titulo: string, mensagem: string | null, categoria: Categorias) {
        this.tipoMensagem = tipoMensagem;
        this.titulo = titulo;
        this.mensagem = mensagem;
        this.categoria = categoria;
    };
};