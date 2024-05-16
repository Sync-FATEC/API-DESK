import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './escalamentoTicket.css';
import ITickets from '../../types/ITickets';
import { erro } from '../Swal/swal';
import Swal from 'sweetalert2';

interface Props {
    selectedTicket: ITickets;
}

interface ITecnico {
    usuarioID: string;
    nome: string;
    tipoUsuario: string;
}

const EscalamentoTicket: React.FC<Props> = ({ selectedTicket }) => {
    const [tecnicos, setTecnicos] = useState<ITecnico[]>([]);
    const [selectedTipo, setSelectedTipo] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ITecnico[]>('http://localhost:5555/usuarios/listarTecnico');
                setTecnicos(response.data);
            } catch (error) {
                console.error('Erro ao buscar técnicos:', error);
            }
        };

        fetchData();
    }, []);

    const handleEscalamento = async (tecnico: ITecnico) => {
        try {
            const response = await axios.post('http://localhost:5555/tickets/alterarTipoTecnico', {
                ticketID: selectedTicket.ticketsID,
                tipoTecnico: tecnico.tipoUsuario,
                tecnicoID: tecnico.usuarioID
            });
            console.log(response.data);
            Swal.fire({
                title: "Sucesso!",
                text: "Ticket escalonado com sucesso!",
                icon: 'success',
                confirmButtonText: 'OK',
                backdrop: 'rgba(0,0,0,0.7)',
                timer: 2500,
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
                window.location.reload();
            });

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
                    <details className="detailsEscalonamento">
                        <summary className="summaryEscalonamento">Técnico N1</summary>
                        <div className="containerEscalonamento">
                            {tecnicos.filter(tecnico => tecnico.tipoUsuario === '1').map(tecnico => (
                                <div key={tecnico.usuarioID} className="tecnicoItem">
                                    <button className='btnEscalonameto' onClick={() => handleEscalamento(tecnico)}>{tecnico.nome}</button>
                                </div>
                            ))}
                        </div>
                    </details>
                    <details className="detailsEscalonamento">
                        <summary className="summaryEscalonamento">Técnico N2</summary>
                        <div className="containerEscalonamento">
                            {tecnicos.filter(tecnico => tecnico.tipoUsuario === '2').map(tecnico => (
                                <div key={tecnico.usuarioID} className="tecnicoItem">
                                    <button className='btnEscalonameto' onClick={() => handleEscalamento(tecnico)}>{tecnico.nome}</button>
                                </div>
                            ))}
                        </div>
                    </details>
                    <details className="detailsEscalonamento">
                        <summary className="summaryEscalonamento">Técnico N3</summary>
                        <div className="containerEscalonamento">
                            {tecnicos.filter(tecnico => tecnico.tipoUsuario === '3').map(tecnico => (
                                <div key={tecnico.usuarioID} className="tecnicoItem">
                                    <button className='btnEscalonameto' onClick={() => handleEscalamento(tecnico)}>{tecnico.nome}</button>
                                </div>
                            ))}
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
    
    
};

export default EscalamentoTicket;
