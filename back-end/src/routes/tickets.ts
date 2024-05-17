import express, { Request, Response } from 'express';
import { alterarTipoTecnico, criarTicket, excluirTicket, alterarStatusTicket, listarTickets, procurarTicket, alterarTecnico } from '../controllers/tickets';

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

    if (req.body.template) {
        return res.json(await alterarStatusTicket(ticketID, status, tecnicoID, req.body.template));
    } else {
        return res.json(await alterarStatusTicket(ticketID, status, tecnicoID));
    }
    
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

router.post('/alterarTipoTecnico', async (req: Request, res: Response) => {
    const { ticketID, tipoTecnico } = req.body;
    
    if (ticketID == '' || tipoTecnico == '') {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    res.json(await alterarTipoTecnico(ticketID, tipoTecnico));
});

router.put('/alterarTecnico/:ticketID/:tecnicoID/:tipoTecnico', async (req: Request, res: Response) => {
    const ticketID = Number(req.params.ticketID);
    const tecnicoID = Number(req.params.tecnicoID);
    const tipoTecnico = String(req.params.tipoTecnico);
   
    if (!ticketID || !tecnicoID || !tipoTecnico) {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }
 
    try {
        const resultado = await alterarTecnico(ticketID, tecnicoID, tipoTecnico);
        res.json(resultado);
    } catch (error) {
        console.error('Erro ao tentar alterar o técnico do ticket:', error);
        res.status(500).json({ error: 'Erro interno ao tentar alterar o técnico do ticket' });
    }
});


export default router;