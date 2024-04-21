import express, { Request, Response } from 'express';
import { criarTicket, excluirTicket, alterarStatusTicket, listarTickets, alterarTecnico } from '../controllers/tickets';

const router = express.Router();

router.post('/criar', async (req: Request, res: Response) => {
    const { titulo, descricao, status, categoriaID, equipamentosID, numeroSala, usuarioID } = req.body;

    if (titulo == '' || descricao == '' || status == '' || categoriaID == '' || equipamentosID == '' || numeroSala == '' || usuarioID == '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    res.json(await criarTicket(titulo, descricao, status, categoriaID, equipamentosID, numeroSala, usuarioID));
});

router.delete('/excluir', async (req: Request, res: Response) => {
    if (req.body.ticketID === '') {
        return res.status(400).json({ error: 'ID do ticket não informado' });
    }
    const { ticketID } = req.body;
    res.json(await excluirTicket(ticketID))
});

router.put('/alterarStatus', async (req: Request, res: Response) => {
    const { ticketID, status } = req.body;

    if (ticketID == '' || status == '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    res.json(await alterarStatusTicket(ticketID, status));
});

router.get('/listar/', async (req: Request, res: Response) => {
    const { usuarioID } = req.body;
    res.json(await listarTickets(parseInt(usuarioID)));
});

router.post('/alterarTecnico', async (req: Request, res: Response) => {
    const { ticketID, tipoTecnico } = req.body;

    if (ticketID == '' || tipoTecnico == '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    res.json(await alterarTecnico(ticketID, tipoTecnico));
});

export default router;