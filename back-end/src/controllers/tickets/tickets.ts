import { log } from "console"
import { DataSource } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Tickets } from "../../entity/tickets"
import { tiposTecRepositorio } from "../../entity/tiposTec"
import { categoriaRepositorio, equipamentoRepositorio, problemasRepositorio, ticketRepositorio, usuariosRepositorio } from "./repositorios"

const criarTickets = async (
    data_abertura: Date,
    sala: string,
    titulo: string,
    descricoes: string,
    sla: Date,
    status: number,
    prioridade: number,
    problemaID: number,
    categoriaID: number,
    tipoTecID: number,
    usuarioID: number,
    equipamentoID: number
) => {
    const problema = await problemasRepositorio.findOneBy({ id: problemaID})
    const categoria = await categoriaRepositorio.findOneBy({ id: categoriaID })
    const tipoTec = await tiposTecRepositorio.findOneBy({ id: tipoTecID })
    const usuario = await usuariosRepositorio.findOneBy({ id: usuarioID })
    const equipamento = await equipamentoRepositorio.findOneBy({ id: equipamentoID })

    const novoTicket = new Tickets(data_abertura, sala, titulo, descricoes, sla, status, prioridade, problema, categoria, tipoTec, usuario, equipamento)

    await ticketRepositorio.save(novoTicket)
    console.log('Ticket criado com sucesso');
    return novoTicket 
}

const mudarTecnico = async (ticketID: number, tipoTecID: number) => {
    const ticket = await ticketRepositorio.findOneBy({ id: ticketID })
    const tipoTec = await tiposTecRepositorio.findOneBy({ id: tipoTecID })

    ticket.tipotec = tipoTec

    await ticketRepositorio.save(ticket)
    console.log('Tecnico mudado com sucesso');
    return ticket
};

export const visualizarTicketsAbertos = async () => {
    try {
        const dataSource = await AppDataSource;
        const ticketRepository = dataSource.getRepository(Tickets);
        // Executa uma consulta para obter os tickets com status igual a 1 (aberto)
        const ticketsAbertos = await ticketRepository.find({
            where: {
                status: '1'
            }
        });
        
        console.log("Tickets Abertos:");
        console.table(ticketsAbertos);
    } catch (error) {
        console.error("Ocorreu um erro ao visualizar os tickets abertos:", error);
    };
};