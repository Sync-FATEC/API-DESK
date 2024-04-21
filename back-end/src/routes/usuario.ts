import express, { Request, Response } from 'express';
import { autenticarUsuario, criarUsuario, excluirUsuario } from '../controllers/usuarios';

const router = express.Router();

router.post('/cadastrar', async (req: Request, res: Response) => {
    const { nome, cpf, email, senha, tipoUsuario, turno } = req.body;
    if (nome === '' || cpf === '' || email === '' || senha === '' || tipoUsuario === '' || turno === '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }
    if (await criarUsuario(nome, cpf, email, senha, tipoUsuario, turno) !== 0) {
        res.json('Usuário criado com sucesso');
    } else {
        res.json('Erro na criação do usuário');
    }
});

router.post('/excluir', async (req: Request, res: Response) => {
    const { usuarioID } = req.body;
    if (usuarioID === '') {
        return res.status(400).json({ error: 'ID do usuário não informado' });
    }
    await excluirUsuario(usuarioID);
    res.json('Usuário excluido com sucesso');
});

router.post('/autenticar', async (req: Request, res: Response) => {
    const { email, senha } = req.body;
    if (email === '' || senha === '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }
    res.json(await autenticarUsuario(email, senha));
});

export default router;