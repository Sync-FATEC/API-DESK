import express, { Request, Response } from 'express';
import { criarCategoria, excluirCategoria, visualizarCategorias } from '../controllers/categoria';

const router = express.Router();

router.post('/cadastrar', async (req: Request, res: Response) => {
    const { categoria, tipoTecnico } = req.body;
    if (categoria === '' || tipoTecnico === '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }
    res.json(await criarCategoria(categoria, tipoTecnico));
});

router.delete('/excluir/:categoriaID', async (req: Request, res: Response) => {
    const categoriaID = req.params.categoriaID;

    if (categoriaID === '') {
        return res.status(400).json({ error: 'ID da categoria não informado' });
    }
    res.json(await excluirCategoria(Number(categoriaID)))
});

router.get('/listar', async (req: Request, res: Response) => {
    res.json(await visualizarCategorias());
});

export default router;