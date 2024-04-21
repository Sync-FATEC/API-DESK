import express, { Request, Response } from 'express';
import { criarMensagem, excluirMensagem, visualizarMensagens } from '../controllers/mensagens';

const router = express.Router();

router.post('/criar', async (req: Request, res: Response) => {
    let { tipoMensagem, titulo, mensagem, categoriaID } = req.body;
    if (mensagem === '') { 
        mensagem = null
    }
    res.json(await criarMensagem(tipoMensagem, titulo, mensagem, categoriaID));
});

router.post('/excluir', async (req: Request, res: Response) => {
    const { mensagemID } = req.body;
    res.json(await excluirMensagem(mensagemID));
});

router.post('/visualizar', async (req: Request, res: Response) => {
    const { tipoMensagem } = req.body;
    res.json(await visualizarMensagens(tipoMensagem));
});

export default router;