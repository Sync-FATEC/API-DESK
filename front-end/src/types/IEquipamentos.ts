export default interface IEquipamentos {
    equipamento: string;
    sla: number;
    prioridade: number;
    sala: {
        numeroSala: number;
        identificacao: string;
        salaID: number;
    };
    categoria: {
        categoria: string;
        tipoTecnico: string;
        categoriaID: number;
    };
    equipamentosID: number;
}