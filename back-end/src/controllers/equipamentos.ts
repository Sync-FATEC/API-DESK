import { log } from "console";
import { AppDataSource } from "../data-source";
import { Equipamentos } from "../entity/equipamento";
import { categoriaRepositorio } from "./categoria";
import { salasRepositorio } from "./sala";

export const equipamentosRepositorio = AppDataSource.getRepository(Equipamentos)

export const criarEquipamento = async (equipamento: string, sla: number, prioridade: string, numeroSala: number, categoriaID: number) => {
    try {
        const sala = await salasRepositorio.findOneBy({ numeroSala: numeroSala })
        const categoria = await categoriaRepositorio.findOneBy({ categoriaID: categoriaID })

        const novoEquipamento = new Equipamentos(equipamento, sla, prioridade, sala, categoria)
        await equipamentosRepositorio.save(novoEquipamento)
        console.log('Equipamento cadastrado com sucesso');
        return novoEquipamento
    } catch (error) {
        console.error('Ocorreu um erro na criação do equipamento', error);
        return 'Ocorreu um erro na criação do equipamento'
    }
}

export const excluirEquipamento = async (equipamentoID: number) => {
    try {
        const equipamento = await equipamentosRepositorio.findOneBy({ equipamentosID: equipamentoID })
        if (equipamento) {
            await equipamentosRepositorio.remove(equipamento)
            console.log('Equipamento excluido com sucesso');
            return 'Equipamento excluido com sucesso'
        } else {
            console.log('Equipamento inexistente');
            return 'Equipamento inexistente'
        }
    } catch (error) {
        console.error('Ocorreu um erro para excluir o equipamento', error);
        return 'Ocorreu um erro para excluir o equipamento'
    }
}   

export const visualizarEquipamentos = async () => {
    try {
        const equipamentos = await equipamentosRepositorio.find({ relations: ["sala", "categoria"] });
        return equipamentos;
    } catch (error) {
        console.error('Ocorreu um erro para visualizar os equipamentos', error);
        return 'Ocorreu um erro para visualizar os equipamentos';
    }
}

export const visualizarEquipamentosCatSala = async (numeroSala: number, categoriaID: number) => {
    try {
        const sala = await salasRepositorio.findOneBy({ numeroSala: numeroSala })
        const categoria = await categoriaRepositorio.findOneBy({ categoriaID: categoriaID })
        const equipamentos = await equipamentosRepositorio.find(
            { where: {sala: sala, categoria: categoria }, relations: ["sala", "categoria"] }
        );
        return equipamentos;
    } catch (error) {
        console.error('Ocorreu um erro para visualizar os equipamentos', error);
        return 'Ocorreu um erro para visualizar os equipamentos';
    }
}

export const alterarSlaEquipamento = async (equipamentoID: number, novoSla: number) => {
    try {
        const equipamento = await equipamentosRepositorio.findOneBy({ equipamentosID: equipamentoID })
        if (equipamento) {
            equipamento.sla = novoSla
            await equipamentosRepositorio.save(equipamento)
            console.log('SLA do equipamento alterado com sucesso');
            return 'SLA do equipamento alterado com sucesso'
        } else {
            console.log('Equipamento inexistente');
            return 'Equipamento inexistente'
        }
    } catch (error) {
        console.error('Ocorreu um erro para alterar o SLA do equipamento', error);
        return 'Ocorreu um erro para alterar o SLA do equipamento'
    }
}