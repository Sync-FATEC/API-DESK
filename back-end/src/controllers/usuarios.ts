import { In } from 'typeorm';
import { AppDataSource } from "../data-source";
import { Usuarios } from "../entity/usuarios";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { log } from 'console';

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
                const token = jwt.sign({ usuarioID: usuario.usuarioID }, "secret", { expiresIn: '1h' });

                if (usuario.tipoUsuario === '1' || usuario.tipoUsuario === '2' || usuario.tipoUsuario === '3') {
                    const currentHour = new Date().getHours();

                    if (usuario.turno === 'M') {
                        if (currentHour <= 6 || currentHour > 14) {
                            console.log('O técnico não pode acessar o sistema nesse horário')
                            return 'O técnico não pode acessar o sistema nesse horário'
                        }

                    } else if (usuario.turno === 'T') {
                        if (currentHour <= 14 || currentHour > 21) {
                            console.log('O técnico não pode acessar o sistema nesse horário')
                            return 'O técnico não pode acessar o sistema nesse horário'
                        }

                    } else if (usuario.turno === 'N') {
                        if (currentHour > 6 && currentHour <= 21) {
                            console.log('O técnico não pode acessar o sistema nesse horário')
                            return 'O técnico não pode acessar o sistema nesse horário'
                    }
                }
            }   
                console.log('Usuário autenticado com sucesso');
                return { usuario: { ...usuario, token: token }};
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

export const validarToken = async (token: string) => {
    try {
        if (!jwt.verify(token, "secret")) {
            console.log('Token inválido');
            return false;
        }
        console.log('Token válido');
        return true;
    } catch (error) {
        console.error("Erro na hora de procurar um usuario", error);
        return false;
    }
}

export const vizualizarTecnicos = async () => {
    try {
        const tecnicos = await usuariosRepositorio.find({ where: { tipoUsuario: In(['1', '2', '3']) } });
        console.log('Tecnicos listados com sucesso:', tecnicos);
        return tecnicos;
    } catch (error) {
        console.error('Erro na listagem:', error);
        throw error;
    }
};

export const alterarTurnoTecnico = async (tecnicoID: number, turno: string) => {
    try {
        const tecnico = await usuariosRepositorio.findOneBy({ usuarioID: tecnicoID });
        if (tecnico) {
            tecnico.turno = turno;
            await usuariosRepositorio.save(tecnico);
            console.log('Turno alterado com sucesso');
            return tecnico;
        } else {
            return 'Tecnico inexistente'
        }
    } catch (error) {
        console.error('Erro na alteração do turno', error);
    }
};

export const alterarTipoTecnico = async (tecnicoID: number, tipoTecnico: string) => {
    try {
        const tecnico = await usuariosRepositorio.findOneBy({ usuarioID: tecnicoID });
        if (tecnico) {
            tecnico.tipoUsuario = tipoTecnico;
            await usuariosRepositorio.save(tecnico);
            console.log('Tipo alterado com sucesso');
            return tecnico;
        } else {
            return 'Tecnico inexistente'
        }
    } catch (error) {
        console.error('Erro na alteração do tipo', error);
    }
}