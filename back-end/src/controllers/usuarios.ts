import { In } from 'typeorm';
import { AppDataSource } from "../data-source";
import { Usuarios } from "../entity/usuarios";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { log } from 'console';

export const usuariosRepositorio = AppDataSource.getRepository(Usuarios);

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

export const mandarToken = async (email: string) => {

    try {
        if (!email) {
            console.log('Email não fornecido');
            return 'Email não fornecido';
        }
    
        if (!await usuariosRepositorio.findOneBy({ email: email })) {
            console.log('Usuário inexistente');
            return 'Usuário inexistente';
        }
        // Gerar o token com 1 hora de expiração
        const token = jwt.sign({ email }, "oxaz rref jpee vgqy", { expiresIn: '1h' });

        // Configuração do transporte de email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'sync23417@gmail.com',
                pass: 'oxaz rref jpee vgqy'
            }
        });

        // Opções do email
        const mailOptions = {
            from: 'sync23417@gmail.com',
            to: email,
            subject: 'Redefinição de senha',
            text: `Você solicitou a redefinição de senha. Clique no link abaixo para redefinir sua senha:\n\nhttp://localhost:3000/reset-password/${token}`
        };

        // Envio do email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erro ao enviar email');
                throw error;
            } else {
                console.log('Email enviado com sucesso');
            }
        });
    } catch (error) {
        console.error('Erro ao mandar token:', error);
        throw error;
    }
};

export const redefinirSenha = async (token: string, novaSenha: string) => {
    try {
        const { email } = jwt.verify(token, "oxaz rref jpee vgqy");
        const usuario = await usuariosRepositorio.findOneBy({ email: email });

        if (usuario) {
            const senhaCriptografada = await bcrypt.hash(novaSenha, 10);
            usuario.senha = senhaCriptografada;
            await usuariosRepositorio.save(usuario);
            console.log('Senha redefinida com sucesso');
            return usuario;
        } else {
            console.log('Usuário inexistente');
            return 'Usuário inexistente';
        }
    } catch (error) {
        console.error('Erro na redefinição de senha:', error);
        throw error;
    }
};