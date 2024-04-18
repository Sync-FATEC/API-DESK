import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Tickets } from './tickets';
import { Usuarios } from './usuarios';

@Entity()
export class Mensagens {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'longtext' })
    mensagem: string;

    @Column({ type: 'datetime' })
    data: Date;

    @ManyToOne(() => Tickets)
    ticket: Tickets;

    @ManyToOne(() => Usuarios)
    usuario: Usuarios;

    constructor(mensagem: string, data: Date, ticket: Tickets, usuario: Usuarios) {
        this.mensagem = mensagem;
        this.data = data;
        this.ticket = ticket;
        this.usuario = usuario;
    }
}
