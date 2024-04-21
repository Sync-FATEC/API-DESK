import { AppDataSource } from "../data-source";
import { Mensagens } from "../entity/mensagens";
import { categoriaRepositorio } from "./categoria";

export const mensagensRepositorio = AppDataSource.getRepository(Mensagens)

export const criarMensagem = async (tipoMensagem: string, titulo: string, mensagem: string, categoriaID: number) => {
    try {
        const categoria = await categoriaRepositorio.findOne({ where: {categoriaID: categoriaID }})

        if (!categoria) {
            console.log('Categoria inexistente');
            return 0
        }

        const novaMensagem = new Mensagens(tipoMensagem, titulo, mensagem, categoria)
        await mensagensRepositorio.save(novaMensagem)
        console.log('Mensagem criada com sucesso');
        return novaMensagem
    } catch (error) {
        console.error('Erro na criação da mensagem', error);
        return 0
    }
}

export const excluirMensagem = async (mensagemID: number) => {
    try {
        const mensagem = await mensagensRepositorio.findOneBy({ mensagemID: mensagemID })
        if (mensagem) {
            await mensagensRepositorio.remove(mensagem)
            console.log('Mensagem excluida com sucesso');
            return 1
        } else {
            console.log('Mensagem inexistente');
            return 0
        }
    } catch (error) {
        console.error('Erro na exclusão da mensagem', error);
        return 0
    }
}

export const visualizarMensagens = async (tipoMensagem: string) => {
    try {
        const mensagens = await mensagensRepositorio.find({ where: { tipoMensagem: tipoMensagem }})
        return mensagens
    } catch (error) {
        console.error('Erro na visualização das mensagens', error);
        return 0
    }
}