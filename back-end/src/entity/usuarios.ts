import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AppDataSource } from '../data-source';

@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    usuarioID: number;

    @Column({ length: 255 })
    nome: string;

    @Column({ length: 11, unique: true })
    cpf: string;

    @Column({ length: 255, unique: true })
    email: string;

    @Column({ length: 255 })
    senha: string;

    @Column({ enum: ['1', '2', '3', '4', '5'] })
    tipoUsuario: string;

    @Column({ enum: ['1', '2', '3'], nullable: true })
    turno: string | null;

    constructor(nome: string, cpf: string, email: string, senha: string, tipoUsuario: string, turno: string | null) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.tipoUsuario = tipoUsuario;
        this.turno = turno;
    }
}

export const usuariosRepositorio = AppDataSource.getRepository(Usuarios);