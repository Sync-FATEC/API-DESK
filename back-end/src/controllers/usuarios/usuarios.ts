import { Usuarios } from "../../entity/usuarios"; 
import { bcrypt } from 'bcrypt';
import { categoriaRepositorio, equipamentoRepositorio, problemasRepositorio, tecnicosRepositorio, ticketRepositorio, usuariosRepositorio } from '../tickets/repositorios'

const cadastrarUsuario = async (
  nome: string,
  cpf: string,
  email: string,
  senha: string,
) => {
  const senhaCriptografada = await bcrypt.hash(senha, 10);

  const novoUsuario = new Usuarios(nome, cpf, email, senhaCriptografada)

  await usuariosRepositorio.save(novoUsuario)
  console.log('Usuario Cadastrado.');
  return novoUsuario;
}

const usuarioLogin = async (usuarioEmail: string, usuarioSenha: string) => {
  const email = await usuariosRepositorio.findOneBy({ email: usuarioEmail })
  const senha = await usuariosRepositorio.findOneBy({ senha: usuarioSenha })

  if (!email || !senha) {
    throw new Error("Usuário não encontrado. Verifique o email e a senha fornecidos.");
  }

  return usuarioLogin;

}

const deletarUsuario = async (usuarioID: number) => {
    const usuario = await usuariosRepositorio.findOneBy({ id: usuarioID })
    usuariosRepositorio.remove(usuario)

    return deletarUsuario;
}
