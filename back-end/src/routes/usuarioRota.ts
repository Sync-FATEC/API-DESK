import express, { Request, Response } from 'express';
import { autenticarUsuario, criarUsuario, excluirUsuario } from '../controllers/usuarios';

const router = express.Router();

router.post('/cadastrar', async (req: Request, res: Response) => {
    const { nome, cpf, email, senha, tipoUsuario, turno } = req.body;
    if (await criarUsuario(nome, cpf, email, senha, tipoUsuario, turno) !== 0) {
        res.json('Usuário criado com sucesso');
    } else {
        res.json('Erro na criação do usuário');
    }
});

router.post('/excluir', async (req: Request, res: Response) => {
    const { usuarioID } = req.body;
    await excluirUsuario(usuarioID);
    res.json('Usuário excluido com sucesso');
});

router.post('/autenticar', async (req: Request, res: Response) => {
    const { email, senha } = req.body;
    const usuario = await autenticarUsuario(email, senha);
    if (usuario) {
        res.json(usuario);
    } else {
        res.json('0');
    }
});

export default router;