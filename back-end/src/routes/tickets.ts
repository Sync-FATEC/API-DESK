import express, { Request, Response } from 'express';
import { criarTicket, excluirTicket, alterarStatusTicket, listarTickets, alterarTecnico, procurarTicket } from '../controllers/tickets';

const router = express.Router();

router.post('/criar', async (req: Request, res: Response) => {
    const { titulo, descricao, status, categoriaID, equipamentosID, numeroSala, usuarioID } = req.body;

    if (titulo == '' || descricao == '' || status == '' || categoriaID == '' || equipamentosID == '' || numeroSala == '' || usuarioID == '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    res.json(await criarTicket(titulo, descricao, status, categoriaID, equipamentosID, numeroSala, usuarioID));
});

router.delete('/excluir/:ticketID', async (req: Request, res: Response) => {
    const ticketID = req.params.ticketID;
    if (ticketID === '') {
        return res.status(400).json({ error: 'ID do ticket não informado' });
    }
    res.json(await excluirTicket(Number(ticketID)))
});

router.put('/alterarStatus', async (req: Request, res: Response) => {
    const { ticketID, status, tecnicoID } = req.body;

    if (ticketID == '' || status == '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    res.json(await alterarStatusTicket(ticketID, status, tecnicoID));
});

router.get('/listar/:usuarioID', async (req: Request, res: Response) => {
    const usuarioID = req.params.usuarioID;

    if (!usuarioID) {
        return res.status(400).json({ error: 'UsuarioID não informado' });
    }
    
    res.json(await listarTickets(Number(usuarioID)));
});

router.get('/procurar/:ticketID', async (req: Request, res: Response) => {
    const ticketID = req.params.ticketID;

    if (!ticketID) {
        return res.status(400).json({ error: 'TicketID não informado' });
    }
    
    res.json(await procurarTicket(Number(ticketID)));

});

router.post('/alterarTecnico', async (req: Request, res: Response) => {
    const { ticketID, tipoTecnico } = req.body;

    if (ticketID == '' || tipoTecnico == '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    res.json(await alterarTecnico(ticketID, tipoTecnico));
});

export default router;