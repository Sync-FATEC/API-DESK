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
    usuarioID: number;
    nome: string;   
    tipoUsuario: string;
}
 
const EscalamentoTicket: React.FC<Props> = ({ selectedTicket }) => {
    const [tecnicos, setTecnicos] = useState<ITecnico[]>([]);
    const [currentStatus] = useState(selectedTicket?.status || '');
 
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
 
    const handleEscalamentoStatusAndamento = async (tecnico: ITecnico) => {
        if (currentStatus !== '1') {
            try {
                // Verificar se o técnico selecionado é diferente do técnico atual do ticket
                if (selectedTicket.tecnico?.usuarioID !== tecnico.usuarioID) {
                    const response = await axios.put(`http://localhost:5555/tickets/alterarTecnico/${selectedTicket.ticketsID}/${tecnico.usuarioID}/${tecnico.tipoUsuario}`, {
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
                } else {
                    erro('Você não pode escalonar para o mesmo técnico!');
                }
            } catch (error) {
                console.error('Erro ao escalonar o ticket:', error);
                erro('Erro ao escalonar o ticket');
            }
        } else {
            erro('Erro ao escalonar o ticket');
        }
    }    
 
 
    const handleEscalamentoTipoTec = async (tecnico: string) => {
        if (currentStatus === '1') {
            if (selectedTicket.tipoTecnico !== tecnico) {
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
            } else {
                erro('Você não pode escalonar para o mesmo tipo de técnico!');
            }
        }
    }
 
    if (currentStatus !== '1') {
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
                                        <button className='btnEscalonameto' onClick={() => handleEscalamentoStatusAndamento(tecnico)}>{tecnico.nome}</button>
                                    </div>
                                ))}
                            </div>
                        </details>
                        <details className="detailsEscalonamento">
                            <summary className="summaryEscalonamento">Técnico N2</summary>
                            <div className="containerEscalonamento">
                                {tecnicos.filter(tecnico => tecnico.tipoUsuario === '2').map(tecnico => (
                                    <div key={tecnico.usuarioID} className="tecnicoItem">
                                        <button className='btnEscalonameto' onClick={() => handleEscalamentoStatusAndamento(tecnico)}>{tecnico.nome}</button>
                                    </div>
                                ))}
                            </div>
                        </details>
                        <details className="detailsEscalonamento">
                            <summary className="summaryEscalonamento">Técnico N3</summary>
                            <div className="containerEscalonamento">
                                {tecnicos.filter(tecnico => tecnico.tipoUsuario === '3').map(tecnico => (
                                    <div key={tecnico.usuarioID} className="tecnicoItem">
                                        <button className='btnEscalonameto' onClick={() => handleEscalamentoStatusAndamento(tecnico)}>{tecnico.nome}</button>
                                    </div>
                                ))}
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="modalPerfil">
                    <h1>Escalonamento</h1>
                    <div className="escalarTicket">
                        <div className="containerEscalonamento">
                            <div className="tecnicoItem">
                                <button className='btnEscalonameto' onClick={() => handleEscalamentoTipoTec('1')}>Técnico N1</button>
                            </div>
                            <div className="tecnicoItem">
                                <button className='btnEscalonameto' onClick={() => handleEscalamentoTipoTec('2')}>Técnico N2</button>
                            </div>
                            <div className="tecnicoItem">
                                <button className='btnEscalonameto' onClick={() => handleEscalamentoTipoTec('3')}>Técnico N3</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
 
export default EscalamentoTicket;