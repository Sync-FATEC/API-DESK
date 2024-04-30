import express, { Request, Response } from 'express';
import { criarEquipamento, excluirEquipamento, visualizarEquipamentos } from '../controllers/equipamentos';

const router = express.Router();

router.post('/criar', async (req: Request, res: Response) => {
    const { equipamento, sla, prioridade, numeroSala, categoriaID } = req.body;

    if (equipamento == '' || sla == '' || prioridade == '' || numeroSala == '' || categoriaID == '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }
    
    res.json(await criarEquipamento(equipamento, sla, prioridade, numeroSala, categoriaID));
});

router.delete('/excluir/:equipamentoID', async (req: Request, res: Response) => {
    const equipamentoID = req.params.equipamentoID;
    if (equipamentoID === '') {
        return res.status(400).json({ error: 'ID do equipamento não informado' });
    }
    res.json(await excluirEquipamento(Number(equipamentoID)))
});

router.get('/listar', async (req: Request, res: Response) => {
    res.json(await visualizarEquipamentos());
});

export default router;