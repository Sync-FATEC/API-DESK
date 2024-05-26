import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tickets } from "./tickets";
import { Usuarios } from "./usuarios";

@Entity()
export class Anotacoes {
    @PrimaryGeneratedColumn()
    anotacoesID: number;

    @Column({ type: 'datetime'})
    dataAnotacao: Date;

    @Column({ length: 255 })
    anotacao: string;

    @ManyToOne(() => Tickets)
    @JoinColumn({ name: 'ticketsID' })
    tickets: Tickets;

    @ManyToOne(() => Usuarios)
    @JoinColumn({ name: 'usuarioID' })
    usuario: Usuarios;

    constructor(dataAnotacao: Date, anotacao: string, tickets: Tickets, usuario: Usuarios) {
        this.dataAnotacao = dataAnotacao;
        this.anotacao = anotacao;
        this.tickets = tickets;
        this.usuario = usuario;
    }
}