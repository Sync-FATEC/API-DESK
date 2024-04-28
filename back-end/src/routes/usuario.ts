import express, { Request, Response } from 'express';
import { autenticarUsuario, criarUsuario, excluirUsuario, procurarUsuario } from '../controllers/usuarios';

const router = express.Router();

router.post('/cadastrar', async (req: Request, res: Response) => {
    let { nome, cpf, email, senha, tipoUsuario, turno } = req.body;
    if (nome === '' || cpf === '' || email === '' || senha === '' || tipoUsuario === '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }
    console.log(turno);
    if (turno === '') {
        turno = null;
    }
    res.json(await criarUsuario(nome, cpf, email, senha, tipoUsuario, turno))
});

router.delete('/excluir', async (req: Request, res: Response) => {
    const { usuarioID } = req.body;
    if (usuarioID === '') {
        return res.status(400).json({ error: 'ID do usuário não informado' });
    }
    res.json(await excluirUsuario(usuarioID));
});

router.post('/autenticar', async (req: Request, res: Response) => {
    const { email, senha } = req.body;
    if (email === '' || senha === '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }
    res.json(await autenticarUsuario(email, senha));
});

router.get('/procurar', async (req: Request, res: Response) => {
    const email = req.query.email;
 
    if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'E-mail inválido' });
    }

    res.json(await procurarUsuario(email));
});



export default router;