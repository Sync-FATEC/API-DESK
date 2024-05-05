import { AppDataSource } from "../data-source"
import { Salas } from "../entity/salas"

export const salasRepositorio = AppDataSource.getRepository(Salas)

export const criarSalas = async (numeroSala: number, indentificacao: string) => {
    try {
        const novaSala = new Salas(numeroSala, indentificacao)
        await salasRepositorio.save(novaSala)
        console.log('Nova sala criada com sucesso');
        return novaSala
    } catch (error) {
        console.error('Erro na criação de uma nova sala\n', error);
        return 'Erro na criação de uma nova sala'
    }
}

export const excluirSalas = async (numeroSala: number) => {
    try {
        const sala = await salasRepositorio.findOneBy({numeroSala: numeroSala})
        if (sala) {
            await salasRepositorio.remove(sala)
            console.log('Sala removida com sucesso');
            return 1
        } else { 
            console.log('Sala inexistente'); 
            return 'Sala inexistente'
        }
    } catch (error) {
        console.error('Erro na exclução de uma sala\n', error);   
        return 'Erro na exclusão de uma sala'     
    }
}

export const visualizarSalas = async () => {
    try {
        const salas = await salasRepositorio.find()
        return salas
    } catch (error) {
        console.error('Erro na visualização das salas\n', error);
        return 'Erro na visualização das salas'
    }
}