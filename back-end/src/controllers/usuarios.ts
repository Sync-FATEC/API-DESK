import { AppDataSource } from "../data-source";
import { Usuarios } from "../entity/usuarios";
import bcrypt from 'bcrypt';


export const usuariosRepositorio = AppDataSource.getRepository(Usuarios)

const validarCPF = (cpf: string) => {
    let soma = 0;
    let resto: number;
    if (cpf == "00000000000") return false;

    for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
}

export const criarUsuario = async (nome: string, cpf: string, email: string, senha: string, tipoUsuario: string, turno: string | null) => {
    try {
        if (await usuariosRepositorio.findOneBy({ email: email })) {
            console.log('Usuário já cadastrado');
            return 'Usuário já cadastrado';
        }
        if (await usuariosRepositorio.findOneBy({ cpf: cpf })) {
            console.log('CPF já cadastrado');
            return 'CPF já cadastrado';
        }
        if (!validarCPF(cpf)) {
            console.log('CPF inválido');
            return 'CPF inválido';
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const novoUsuario = new Usuarios(nome, cpf, email, senhaCriptografada, tipoUsuario, turno);
        await usuariosRepositorio.save(novoUsuario);
        console.log('Usuário criado com sucesso');
        return novoUsuario;
    } catch (error) {
        console.error('Erro na criação do usuário', error);
        return 0;
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
            return 'Usuario inexistente';
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
                return 'Senha incorreta';
            }
        } else {
            console.log('Usuário inexistente');
            return 'Usuario inexistente';
        }
    } catch (error) {
        console.error('Erro na autenticação do usuário', error);
    }
}