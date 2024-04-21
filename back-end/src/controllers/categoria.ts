import { AppDataSource } from "../data-source"
import { Categorias } from "../entity/categorias"

export const categoriaRepositorio = AppDataSource.getRepository(Categorias)

export const criarCategoria = async (categoria: string) => {
    try {
        const novaCategoria = new Categorias(categoria)
        await categoriaRepositorio.save(novaCategoria)
        console.log('Nova categoria criada com sucesso');
        return novaCategoria
    } catch (error) {
        console.error('Erro na criação de uma nova categoria', error);
        return 'Erro na criação de uma nova categoria'
    }
}

export const excluirCategoria = async (categoriaID: number) => {
    try {
        const categoria = await categoriaRepositorio.findOneBy({categoriaID: categoriaID})
        if (categoria) {
            await categoriaRepositorio.remove(categoria)
            console.log('Sala removida com sucesso');
            return 1
        } else { 
            console.log('Sala inexistente'); 
            return 'Sala inexistente'
        }
    } catch (error) {
        console.error('Erro na exclução de uma categorua\n', error);
        return 'Erro na exclusão de uma categoria'        
    }
}

export const visualizarCategorias = async () => {
    try {
        const categoria = await categoriaRepositorio.find()
        return categoria
    } catch (error) {
        console.error('Erro na visualização das categorias\n', error);
        return 'Erro na visualização das categorias'
    }
}