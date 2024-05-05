export default interface ITickets {
    ticketsID: number;
    dataAbertura: string;
    dataFechamento: string | null;
    titulo: string;
    descricao: string;
    status: string;
    categoriaID: number;
    equipamentosID: number;
    salaID: number;
    usuarioID: number;
    tipoTecnico: string;
    categoria: {
        categoria: string;
        tipoTecnico: string;
        categoriaID: number;
    };
    equipamentos: {
        equipamento: string;
        sla: number;
        prioridade: string;
        equipamentosID: number;
    };
    sala: {
        numeroSala: number;
        identificacao: string;
        salaID: number;
    };
    usuario: {
        nome: string;
        cpf: string;
        email: string;
        senha: string;
        tipoUsuario: string;
        turno: string | null;
        usuarioID: number;
    };
}