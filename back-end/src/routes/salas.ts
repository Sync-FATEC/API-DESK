import express, { Request, Response } from 'express';
import { criarSalas, excluirSalas, visualizarSalas } from '../controllers/sala';

const router = express.Router();

router.post('/criar', async (req: Request, res: Response) => {
    let { numeroSala, identificacao } = req.body;
    if (numeroSala === '' || identificacao === '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }
    res.json(await criarSalas(numeroSala, identificacao));
});

router.delete('/excluir/:numeroSala', async (req: Request, res: Response) => {
    const numeroSala = req.params.numeroSala;
    if (numeroSala === '') {
        return res.status(400).json({ error: 'Número da sala não informado' });
    }
    res.json(await excluirSalas(Number(numeroSala)));
});

router.get('/visualizar', async (req: Request, res: Response) => {
    res.json(await visualizarSalas());
});

export default router;