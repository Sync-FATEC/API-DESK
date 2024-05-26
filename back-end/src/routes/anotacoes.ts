import express, { Request, Response, Router } from 'express';
import { criarAnotacoes, deletarAnotacoes, listarAnotacoes } from '../controllers/anotacoes';

const router = express.Router();

router.post('/criar', async (req: Request, res: Response) => {
    try {
        const { anotacao, ticketsID, usuarioID } = req.body;

        if (anotacao === '' || ticketsID === '' || usuarioID === '') {
            return res.status(400).json({ error: 'Preencha todos os campos' });
        }

        res.json(await criarAnotacoes(anotacao, Number(ticketsID), Number(usuarioID)));
    } catch (error) {
        console.error('Erro na criação de uma nova anotação', error);
        return res.status(500).json({ error: 'Erro na criação de uma nova anotação' });
    }
});

router.delete('/excluir/:anotacaoID', async (req: Request, res: Response) => {
    try {
        const anotacaoID = req.params.anotacaoID;

        if (anotacaoID === '') {
            return res.status(400).json({ error: 'ID da anotação não informado' });
        }

        res.json(await deletarAnotacoes(Number(anotacaoID)));
    } catch (error) {
        console.error('Erro na exclusão de uma anotação', error);
        return res.status(500).json({ error: 'Erro na exclusão de uma anotação' });
    }
});

router.get('/listar/:ticketsID', async (req: Request, res: Response) => {
    try {
        const ticketsID = req.params.ticketsID;

        if (ticketsID === '') {
            return res.status(400).json({ error: 'ID do ticket não informado' });
        }

        res.json(await listarAnotacoes(Number(ticketsID)));
    } catch (error) {
        console.error('Erro na listagem de anotações', error);
        return res.status(500).json({ error: 'Erro na listagem de anotações' });
    }
});

export default router;