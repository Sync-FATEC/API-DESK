import 'reflect-metadata';
import { DataSource } from "typeorm";
import { Categorias } from "./entity/categorias"
import { Equipamentos } from './entity/equipamento';
import { Mensagens } from './entity/mensagens';
import { Salas } from './entity/salas';
import { Tickets } from './entity/tickets';
import { Usuarios } from './entity/usuarios';
import { Anotacoes } from './entity/anotacoes';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Nc321654987",
    database: "api",
    synchronize: true,
    logging: false,
    entities: [Usuarios, Tickets, Salas, Mensagens, Equipamentos, Categorias, Anotacoes],
    migrations: [],
    subscribers: []
});