import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Turno } from './turno';
import { TiposTec } from './tiposTec';

@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255, nullable: false })
    nome: string;

    @Column({ length: 11, unique: true, nullable: false })
    cpf: string;

    @Column({ length: 255, unique: true, nullable: false })
    email: string;

    @Column({ length: 255, nullable: false })
    senha: string;

    @ManyToOne(() => Turno)
    turno: Turno;

    @ManyToOne(() => TiposTec)
    tipo_tec: TiposTec;

    constructor(nome: string, cpf: string, email: string, senha: string, turno: Turno, tipo_tec: TiposTec) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.turno = turno;
        this.tipo_tec = tipo_tec;
    }
}
