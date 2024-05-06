import express, { Request, Response, Router } from 'express';
import { criarAnotacoes, deleteAnotacoes } from '../controllers/anotacoes';

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

        res.json(await deleteAnotacoes(Number(anotacaoID)));
    } catch (error) {
        console.error('Erro na exclusão de uma anotação', error);
        return res.status(500).json({ error: 'Erro na exclusão de uma anotação' });
    }
});

export default router;