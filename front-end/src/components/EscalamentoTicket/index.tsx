import React, { useState } from 'react';
import axios from 'axios';
import './escalamentoTicket.css';
import ITickets from '../../types/ITickets';
import { erro } from '../Swal/swal';
import Swal from 'sweetalert2';

interface Props {
    selectedTicket: ITickets;
}

const EscalamentoTicket: React.FC<Props> = ({ selectedTicket }) => {
    // eslint-disable-next-line no-empty-pattern
    const [] = useState('');

    const handleEscalamento = async (tecnico: string) => {
        try {
            const response = await axios.post('http://localhost:5555/tickets/alterarTipoTecnico', {
                ticketID: selectedTicket.ticketsID,
                tipoTecnico: tecnico
            });
            console.log(response.data);
            Swal.fire({
                title: "Sucesso!",
                text: "Ticket escalonado com sucesso!",
                icon: 'success',
                confirmButtonText: 'OK',
                backdrop: 'rgba(0,0,0,0.7)',
                timer: 2500, // 2.5 segundos
                timerProgressBar: true,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                customClass: {
                    popup: 'my-popup-class',
                    title: 'my-title-class',
                    confirmButton: 'my-confirm-button-class',
                    timerProgressBar: 'my-progress-bar-class'
                }
            }).then(() => {
                window.location.reload()
            })

        } catch (error) {
            console.error('Erro ao escalonar o ticket:', error);
            erro('Erro ao escalonar o ticket');
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