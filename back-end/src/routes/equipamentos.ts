import express, { Request, Response } from 'express';
import { alterarSlaEquipamento, criarEquipamento, excluirEquipamento, visualizarEquipamentos, visualizarEquipamentosCatSala } from '../controllers/equipamentos';

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

router.get('/listarCatSala/:numeroSala/:categoriaID', async (req: Request, res: Response) => {
    const { numeroSala, categoriaID } = req.params;
    res.json(await visualizarEquipamentosCatSala(Number(numeroSala), Number(categoriaID)));
});

router.put('/alterarSla/:equipamentoID/:novaSla', async (req: Request, res: Response) => {
    const { equipamentoID, novaSla } = req.params;
    res.json(await alterarSlaEquipamento(Number(equipamentoID), Number(novaSla)));
});

export default router;