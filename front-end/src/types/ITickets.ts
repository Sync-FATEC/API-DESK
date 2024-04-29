export default interface ITickets {
    ticketsID: string;
    dataAbertura: Date;
    dataFechamento: Date;
    titulo: string
    descricao: string
    status: string
    categoriaID: number
    equipamentosID: number
    salaID: number
    usuarioID: number
    tipoTecnico: string
}