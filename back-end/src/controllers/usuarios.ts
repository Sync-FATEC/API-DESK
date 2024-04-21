import { AppDataSource } from "../data-source";
import { Usuarios } from "../entity/usuarios";
import * as bcrypt from 'bcrypt';

export const usuariosRepositorio = AppDataSource.getRepository(Usuarios)

export const criarUsuario = async (nome: string, cpf: string, email: string, senha: string) => {
    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const novoUsuario = new Usuarios(nome, cpf, email, senhaCriptografada, 'U', null);
        await usuariosRepositorio.save(novoUsuario);
        console.log('Usuário criado com sucesso');
        return novoUsuario;
    } catch (error) {
        console.error('Erro na criação do usuário', error);
    }
}

export const excluirUsuario = async (usuarioID: number) => {
    try {
        const usuario = await usuariosRepositorio.findOneBy({ usuarioID: usuarioID });
        if (usuario) {
            await usuariosRepositorio.remove(usuario);
            console.log('Usuário excluido com sucesso');
            return 1;
        } else {
            console.log('Usuário inexistente');
            return 0;
        }
    } catch (error) {
        console.error('Erro na exclusão do usuário', error);
    }
}

export const autenticarUsuario = async (email: string, senha: string) => {
    try {
        const usuario = await usuariosRepositorio.findOneBy({ email: email });
        if (usuario) {
            if (await bcrypt.compare(senha, usuario.senha)) {
                console.log('Usuário autenticado com sucesso');
                return usuario;
            } else {
                console.log('Senha incorreta');
                return null;
            }
        } else {
            console.log('Usuário inexistente');
            return null;
        }
    } catch (error) {
        console.error('Erro na autenticação do usuário', error);
    }
}