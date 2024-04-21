import { AppDataSource } from "../data-source"
import { Tickets } from "../entity/tickets"
import { categoriaRepositorio } from "./categoria";
import { equipamentosRepositorio } from "./equipamentos";
import { salasRepositorio } from "./sala";
import { usuariosRepositorio } from "./usuarios";

export const ticketsRepositorio = AppDataSource.getRepository(Tickets)

export const criarTicket = async (dataAbertura: Date, titulo: string, descricao: string, status: string, categoriaID: number, equipamentosID: number, numeroSala: number, usuarioID: number) => { 
    try {
        const categoria = await categoriaRepositorio.findOneBy({ categoriaID: categoriaID });
        const equipamento = await equipamentosRepositorio.findOneBy({ equipamentosID: equipamentosID });
        const sala = await salasRepositorio.findOneBy({ numeroSala: numeroSala });
        const usuario = await usuariosRepositorio.findOneBy({ usuarioID: usuarioID });

        const novoTicket = new Tickets(dataAbertura, titulo, descricao, status, categoria, equipamento, sala, usuario);
        await ticketsRepositorio.save(novoTicket);
        console.log('Ticket criado com sucesso');
        return novoTicket;
    } catch (error) {
        console.error('Erro na criação do ticket', error);
    }
}

export const excluirTicket = async (ticketID: number) => {
    try {
        const ticket = await ticketsRepositorio.findOneBy({ ticketsID: ticketID });
        if (ticket) {
            await ticketsRepositorio.remove(ticket);
            console.log('Ticket excluido com sucesso');
            return 1;
        } else {
            console.log('Ticket inexistente');
            return 0;
        }
    } catch (error) {
        console.error('Erro na exclusão do ticket', error);
    }
}

export const alterarStatusTicket = async (ticketID: number, status: string) => {
    try {
        const ticket = await ticketsRepositorio.findOneBy({ ticketsID: ticketID });
        if (ticket) {
            ticket.status = status;
            await ticketsRepositorio.save(ticket);
            console.log('Status do ticket alterado com sucesso');
            return ticket;
        } else {
            console.log('Ticket inexistente');
            return null;
        }
    } catch (error) {
        console.error('Erro na alteração do status do ticket', error);
    }
}

export const listarTickets = async (usuarioID: number) => {
    try {
        const usuario = await usuariosRepositorio.findOneBy({ usuarioID: usuarioID });
        if (usuario) {
            if (usuario.tipoUsuario === 'U') {
                const tickets = await ticketsRepositorio.find({ where: { usuario: usuario } });
                console.log('Tickets listados com sucesso');
                return tickets;
            } 
            else if (usuario.tipoUsuario === 'A') {
                const tickets = await ticketsRepositorio.find();
                console.log('Tickets listados com sucesso');
                return tickets;
            }
        }
    } catch (error) {
        console.error('Erro na listagem dos tickets', error);
    }
}