import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Problemas } from './problemas';
import { Categorias } from './categorias';
import { TiposTec } from './tiposTec';
import { Usuarios } from './usuarios';
import { Equipamento } from './equipamento';

@Entity()
export class Tickets {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'datetime' })
    data_abertura: Date;

    @Column({ type: 'datetime', nullable: true })
    data_fechamento: Date;

    @Column({ length: 255 })
    sala: string;

    @Column({ length: 255 })
    titulo: string;

    @Column({ type: 'longtext' })
    descricoes: string;

    @Column({ type: 'timestamp' })
    sla: Date;

    @Column({ type: 'int' })
    status: number;

    @Column({ type: 'int' })
    prioridade: number;

    @ManyToOne(() => Problemas)
    problema: Problemas;

    @ManyToOne(() => Categorias)
    categoria: Categorias;

    @ManyToOne(() => TiposTec)
    tipotec: TiposTec;

    @ManyToOne(() => Usuarios)
    usuario: Usuarios;

    @ManyToOne(() => Equipamento)
    equipamento: Equipamento;

    constructor(
        data_abertura: Date,
        sala: string,
        titulo: string,
        descricoes: string,
        sla: Date,
        status: number,
        prioridade: number,
        problema: Problemas,
        categoria: Categorias,
        tipotec: TiposTec,
        usuario: Usuarios,
        equipamento: Equipamento,
    ) {
        this.data_abertura = data_abertura;
        this.sala = sala;
        this.titulo = titulo;
        this.descricoes = descricoes;
        this.sla = sla;
        this.status = status;
        this.prioridade = prioridade;
        this.problema = problema;
        this.categoria = categoria;
        this.tipotec = tipotec;
        this.usuario = usuario;
        this.equipamento = equipamento;
    }
}
