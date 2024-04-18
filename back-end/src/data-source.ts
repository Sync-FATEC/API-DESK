import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuarios } from "./entity/usuarios"
import { BaseDeConhecimento } from "./entity/baseDeConhecimento"
import { Categorias } from "./entity/categorias"
import { Equipamento } from "./entity/equipamento"
import { FAQ } from "./entity/faq"
import { Mensagens } from "./entity/mensagens"
import { Problemas } from "./entity/problemas"
import { Tecnicos } from "./entity/tecnicos"
import { Templates } from "./entity/template"
import { Tickets } from "./entity/tickets"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "API",
    synchronize: true,
    logging: false,
    entities: [Usuarios, BaseDeConhecimento, Categorias, Equipamento, FAQ, Mensagens, Problemas, Tecnicos, Templates, Tickets],
    migrations: [],
    subscribers: [],
})
