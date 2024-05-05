import React, { useState } from 'react';
import axios from 'axios';
import './escalamentoTicket.css';
import ITickets from '../../types/ITickets';

interface Props {
    selectedTicket: ITickets;
}

const EscalamentoTicket: React.FC<Props> = ({ selectedTicket }) => {
    // eslint-disable-next-line no-empty-pattern
    const [] = useState('');

    const handleEscalamento = async (tecnico: string) => {
        try {
            const response = await axios.post('http://localhost:5555/tickets/alterarTecnico', {
                ticketID: selectedTicket.ticketsID,
                tipoTecnico: tecnico
            });
            console.log(response.data);
            window.location.reload();

        } catch (error) {
            console.error('Erro ao escalonar o ticket:', error);
        }
    };

    return (
        <div>
            <div className="modalPerfil">
                <h1>Escalar ticket</h1>
                <div className="escalarTicket">
                    <button className='btnEscalarTicket' onClick={() => handleEscalamento('1')}>Técnico N1</button>
                    <button className='btnEscalarTicket' onClick={() => handleEscalamento('2')}>Técnico N2</button>
                    <button className='btnEscalarTicket' onClick={() => handleEscalamento('3')}>Técnico N3</button>
                </div>
            </div>
        </div>
    );
};

export default EscalamentoTicket;