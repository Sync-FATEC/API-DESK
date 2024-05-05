import 'reflect-metadata';
import { DataSource } from "typeorm";
import { Categorias } from "./entity/categorias"
import { Equipamentos } from './entity/equipamento';
import { Mensagens } from './entity/mensagens';
import { Salas } from './entity/salas';
import { Tickets } from './entity/tickets';
import { Usuarios } from './entity/usuarios';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "fatec",
    database: "api",
    synchronize: true,
    logging: false,
    entities: [Usuarios, Tickets, Salas, Mensagens, Equipamentos, Categorias],
    migrations: [],
    subscribers: []
});