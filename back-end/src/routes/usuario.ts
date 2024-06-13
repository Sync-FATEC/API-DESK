import express, { Request, Response } from 'express';
import { alterarTipoTecnico, alterarTurnoTecnico, autenticarUsuario, criarUsuario, excluirUsuario, validarToken, vizualizarTecnicos, mandarToken, redefinirSenha } from '../controllers/usuarios';
import { error } from 'console';

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
    res.json(await criarUsuario(nome, cpf, email, senha, tipoUsuario, turno));
});

router.delete('/excluir/:usuarioID', async (req: Request, res: Response) => {
    const usuarioID = req.params.usuarioID;
    if (usuarioID === '') {
        return res.status(400).json({ error: 'ID do usuário não informado' });
    }
    res.json(await excluirUsuario(Number(usuarioID)));
});

router.post('/autenticar', async (req: Request, res: Response) => {
    const { email, senha } = req.body;
    if (email === '' || senha === '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }
    res.json(await autenticarUsuario(email, senha));
});

router.get('/validar/:token', async (req: Request, res: Response) => {
    const token = req.params.token;
    
    if (!token || typeof token !== 'string') {
        return res.status(400).json({ error: 'token inválido' });
    }
    
    res.json(await validarToken(token));
});

router.get('/listarTecnico', async (req: Request, res: Response) => {
    try {
        const tecnicos = await vizualizarTecnicos();
        res.json(tecnicos);
    } catch (error) {
        console.error('Erro ao listar técnicos:', error);
        res.status(500).json({ error: 'Erro ao listar técnicos' });
    }
});

router.put('/alterarTurnoTecnico/:tecnicoID/:turno', async (req: Request, res: Response) => {
    try {
        const tecnicoID = req.params.tecnicoID;
        const turno = req.params.turno;

        if (tecnicoID === '' || turno === '') {
            return res.status(400).json({ error: 'Preencha todos os campos' });
        }

        res.json(await alterarTurnoTecnico(Number(tecnicoID), turno));
    } catch (error) {
        console.error('Erro ao alterar turno do técnico:', error);
        res.status(500).json({ error: 'Erro ao alterar turno do técnico' });
    }
});

router.put('/alterarTipoTecnico/:tecnicoID/:tipoTecnico', async (req: Request, res: Response) => {
    try {
        const tecnicoID = req.params.tecnicoID;
        const tipoTecnico = req.params.tipoTecnico;

        if (tecnicoID === '' || tipoTecnico === '') {
            return res.status(400).json({ error: 'Preencha todos os campos' });
        }

        res.json(await alterarTipoTecnico(Number(tecnicoID), tipoTecnico));
    } catch (error) {
        console.error('Erro ao alterar tipo do técnico:', error);
        res.status(500).json({ error: 'Erro ao alterar tipo do técnico' });
    }
});

router.post('/esqueci-senha', async (req: Request, res: Response) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email não fornecido' });
    }

    try {
        res.json(await mandarToken(email));
    } catch (error) {
        console.error('Erro ao mandar token:', error);
        return res.status(500).json({ error: 'Erro ao enviar o email' });
    }
});

router.put("/redefinir-senha/:token/:novaSenha", async (req: Request, res: Response) => {
    const token = req.params.token;
    const novaSenha = req.params.novaSenha;
    res.json(await redefinirSenha(token, novaSenha));
});


export default router;