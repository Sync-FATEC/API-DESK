import { AppDataSource } from "../data-source"
import { Tickets } from "../entity/tickets"
import { categoriaRepositorio } from "./categoria";
import { equipamentosRepositorio } from "./equipamentos";
import { salasRepositorio } from "./sala";
import { usuariosRepositorio } from "./usuarios";

export const ticketsRepositorio = AppDataSource.getRepository(Tickets)

export const criarTicket = async (titulo: string, descricao: string, status: string, categoriaID: number, equipamentosID: number, numeroSala: number, usuarioID: number) => { 
    try {
        const categoria = await categoriaRepositorio.findOneBy({ categoriaID: categoriaID });
        const equipamento = await equipamentosRepositorio.findOneBy({ equipamentosID: equipamentosID });
        const sala = await salasRepositorio.findOneBy({ numeroSala: numeroSala });
        const usuario = await usuariosRepositorio.findOneBy({ usuarioID: usuarioID });
        const dataAbertura = new Date();
        const dataSla = new Date(dataAbertura.getTime() + equipamento.sla * 60 * 60 * 1000);

        if (!categoria || !equipamento || !sala || !usuario) {
            console.log('Categoria, equipamento, sala ou usuário inexistente');
            return 'Categoria, equipamento, sala ou usuário inexistente';
        }

        const novoTicket = new Tickets(dataAbertura, dataSla, titulo, descricao, status, categoria.tipoTecnico, equipamento.prioridade, categoria, equipamento, sala, usuario);
        await ticketsRepositorio.save(novoTicket);
        console.log('Ticket criado com sucesso');
        return novoTicket;
    } catch (error) {
        console.error('Erro na criação do ticket', error);
        return 'Erro na criação do ticket'
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
            return 'Ticket inexistente';
        }
    } catch (error) {
        console.error('Erro na exclusão do ticket', error);
        return 'Erro na exclusão do ticket';
    }
}

export const alterarStatusTicket = async (ticketID: number, status: string, tecnicoID: number) => {
    try {
        const ticket = await ticketsRepositorio.findOneBy({ ticketsID: ticketID });
        const tecnico = await usuariosRepositorio.findOneBy({ usuarioID: tecnicoID });
        if (ticket.status === '4') {
            console.log('Ticket finalizado, não é possível alterar o status');
            return 'Ticket finalizado, não é possível alterar o status';
        }
        if (ticket && tecnico) {
            ticket.status = status;
            if (status === '1') {
                ticket.tecnico = null;
                console.log('Técnico removido do ticket');
            } else if (status === '4') {
                ticket.dataFechamento = new Date();
                ticket.tecnico = null;
                console.log('Ticket finalizado com sucesso');
            } else {
                ticket.tecnico = tecnico;
            }
            await ticketsRepositorio.save(ticket);
            console.log('Status do ticket alterado com sucesso');
            return ticket;
        } else {
            console.log('Ticket inexistente ou tecnico inexistente');
            return 'ticket inexistente ou tecnico inexistente';
        }
    } catch (error) {
        console.error('Erro na alteração do status do ticket', error);
        return 'Erro na alteração do status do ticket';
    }
}

export const listarTickets = async (usuarioID: number) => {
    try {
        const usuario = await usuariosRepositorio.findOneBy({ usuarioID: usuarioID });
        if (usuario) {

            if (usuario.tipoUsuario === 'U') {
                const tickets = await ticketsRepositorio.find({ where: { usuario: usuario }, relations: ['categoria', 'equipamentos', 'sala', 'usuario', 'tecnico']});
                console.log('Tickets listados com sucesso U');
                return tickets;
            } 
            else if (usuario.tipoUsuario === 'A') {
                const tickets = await ticketsRepositorio.find({relations: ['categoria', 'equipamentos', 'sala', 'usuario', 'tecnico']});
                console.log('Tickets listados com sucesso A');
                return tickets;
            }
            else if (usuario.tipoUsuario === '1' || usuario.tipoUsuario === '2' || usuario.tipoUsuario === '3') {
                const tickets = await ticketsRepositorio.find({ where: { tipoTecnico: usuario.tipoUsuario }, relations: ['categoria', 'equipamentos', 'sala', 'usuario', 'tecnico'] });
                console.log('Tickets listados com sucesso T');
                return tickets;
            }
        }
    } catch (error) {
        console.error('Erro na listagem dos tickets', error);
        return 'Erro na listagem dos tickets';
    }
}

export const procurarTicket = async (ticketID: number) => {
    const ticket = await ticketsRepositorio.find({ where: { ticketsID: ticketID }, relations: ['categoria', 'equipamentos', 'sala']});
    if (ticket) {
        console.log('Ticket encontrado com sucesso');
        return ticket;
    } else {
        console.log('Ticket inexistente');
        return 'Ticket inexistente';
    }
}

export const alterarTecnico = async (ticketID: number, tipoTecnico: string) => {
    try {
        const ticket = await ticketsRepositorio.findOneBy({ ticketsID: ticketID });
        if (ticket) {
            ticket.tipoTecnico = tipoTecnico;
            await ticketsRepositorio.save(ticket);
            console.log('Técnico do ticket alterado com sucesso');
            return ticket;
        } else {
            console.log('Ticket inexistente');
            return 'Ticket inexistente';
        }
    } catch (error) {
        console.error('Erro na alteração do técnico do ticket', error);
        return 'Erro na alteração do técnico do ticket';
    }
}