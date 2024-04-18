import { AppDataSource } from "../../data-source"
import { BaseDeConhecimento } from "../../entity/baseDeConhecimento"
import { Categorias } from "../../entity/categorias"
import { Equipamento } from "../../entity/equipamento"
import { FAQ } from "../../entity/faq"
import { Mensagens } from "../../entity/mensagens"
import { Problemas } from "../../entity/problemas"
import { Templates } from "../../entity/template"
import { Tickets } from "../../entity/tickets"
import { Usuarios } from "../../entity/usuarios"

export const ticketRepositorio = AppDataSource.getRepository(Tickets)
export const problemasRepositorio = AppDataSource.getRepository(Problemas)
export const categoriaRepositorio = AppDataSource.getRepository(Categorias)
export const baseDeConhecimentoRepositorio = AppDataSource.getRepository(BaseDeConhecimento)
export const equipamentoRepositorio = AppDataSource.getRepository(Equipamento)
export const faqRepositorio = AppDataSource.getRepository(FAQ)
export const mensagensRepositorio = AppDataSource.getRepository(Mensagens)
export const templatesRepositorio = AppDataSource.getRepository(Templates)
export const usuariosRepositorio = AppDataSource.getRepository(Usuarios)
