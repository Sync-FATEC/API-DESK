import express, { Request, Response } from 'express';
import { criarCategoria, excluirCategoria, visualizarCategorias } from '../controllers/categoria';

const router = express.Router();

router.post('/cadastrar', async (req: Request, res: Response) => {
    const { nome } = req.body;
    if (nome === '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }
    res.json(await criarCategoria(nome));
});

router.post('/excluir', async (req: Request, res: Response) => {
    if (req.body.categoriaID === '') {
        return res.status(400).json({ error: 'ID da categoria não informado' });
    }
    const { categoriaID } = req.body;
    res.json(await excluirCategoria(categoriaID))
});

router.post('/listar', async (req: Request, res: Response) => {
    res.json(await visualizarCategorias());
});

export default router;