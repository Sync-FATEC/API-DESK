import express, { Request, Response } from 'express';
import { criarMensagem, excluirMensagem, visualizarMensagens } from '../controllers/mensagens';

const router = express.Router();

router.post('/criar', async (req: Request, res: Response) => {
    let { tipoMensagem, titulo, mensagem, categoriaID } = req.body;
    if (mensagem === '') { 
        mensagem = null
    }
    if (titulo === '' || titulo === '' || categoriaID === '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }
    res.json(await criarMensagem(tipoMensagem, titulo, mensagem, categoriaID));
});

router.delete('/excluir/:mensagemID', async (req: Request, res: Response) => {
    const mensagemID = req.params.mensagemID;
    if (mensagemID === '') {
        return res.status(400).json({ error: 'ID da mensagem não informado' });
    }
    res.json(await excluirMensagem(Number(mensagemID)));
});

router.get('/visualizar/:tipoMensagem', async (req: Request, res: Response) => {
    const tipoMensagem = req.params.tipoMensagem;

    if (!tipoMensagem || typeof tipoMensagem !== 'string') {
        return res.status(400).json({ error: 'Tipo de mensagem não informado' });
    }

    res.json(await visualizarMensagens(tipoMensagem));
});

export default router;