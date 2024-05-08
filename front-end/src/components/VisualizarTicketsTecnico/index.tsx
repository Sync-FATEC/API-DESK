import React, { useContext, useState } from 'react';
import axios from 'axios';
import ITickets from '../../types/ITickets';
import EscalamentoTicket from '../EscalamentoTicket';
import { ChatTecnico } from '../chatTecnico';
import './visualizarTicketsTecnico.css'
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { erro, TicketStatusAlterado, warning } from '../Swal/swal';
import Swal from 'sweetalert2';

interface Props {
    selectedTicket: ITickets | null;
    onClose: () => void;
}

const VisualizarTicketTecnico: React.FC<Props> = ({ selectedTicket, onClose }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(selectedTicket?.status || '');
    const formatDataSlaTickets = selectedTicket?.dataSla ? new Date (selectedTicket.dataSla).toLocaleString ('pt-BR', { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric'}): '';
    const { user } = useContext(AuthContext);
    
    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleUpdateStatus = async (newStatus: string) => {
        try {
            if (currentStatus === '4') {
                warning('Ticket já finalizado!');
            } else if (selectedTicket?.status === newStatus) {
                warning('Ticket já possui esse status!');
            } else {
                if (newStatus === '4') {
                    const confirmMessage = "Deseja realmente finalizar o ticket?";
                    Swal.fire({
                        title: confirmMessage,
                        showDenyButton: true,
                        confirmButtonText: "Sim",
                        denyButtonText: "Não",
                        width: 410,
                        confirmButtonColor: 'rgb(0,114,187)',
                        denyButtonColor: 'rgb(255, 0, 53)',
                        heightAuto: false,
                        backdrop: false,
                        customClass: {
                            confirmButton: 'cButton',
                            denyButton: 'dButton',
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            axios.put(`http://localhost:5555/tickets/alterarStatus`, { ticketID: selectedTicket?.ticketsID, status: newStatus, tecnicoID: user?.usuarioID });
                            if (selectedTicket) {
                                selectedTicket.status = newStatus;
                                setCurrentStatus(newStatus);
                                TicketStatusAlterado();
                            }
                        }
                    });
                } else if (newStatus === '2') {
                    axios.put(`http://localhost:5555/tickets/alterarStatus`, { ticketID: selectedTicket?.ticketsID, status: newStatus, tecnicoID: user?.usuarioID });
                    if (selectedTicket) {
                        selectedTicket.status = newStatus;
                        setCurrentStatus(newStatus);
                        TicketStatusAlterado();
                    }
                } else if (newStatus === '3') {
                    axios.put(`http://localhost:5555/tickets/alterarStatus`, { ticketID: selectedTicket?.ticketsID, status: newStatus, tecnicoID: user?.usuarioID });
                    if (selectedTicket) {
                        selectedTicket.status = newStatus;
                        setCurrentStatus(newStatus);
                        TicketStatusAlterado();
                    }
                } else {
                    warning('Status inválido!');
                };
            };
        } catch (error) {
            console.error("Erro ao atualizar status do ticket:", error);
            erro('Erro ao atualizar status do ticket!');
        };
    };

    if (!selectedTicket) {
        return null;
    }

    return (
        <div className="modalVisualizar">
            <div className='btnVisualizar'>
                <div>
                    <button id='btnEscalar' className="btnHeader" onClick={handleOpenModal}>
                        <span className="material-symbols-outlined">sync_alt</span>
                    </button>
                    <span id='btnAtendendo' className="material-symbols-outlined" onClick={() => handleUpdateStatus('2')}>play_circle</span>
                    <span id='btnPendente' className="material-symbols-outlined" onClick={() => handleUpdateStatus('3')}>pause_circle</span>
                    <span id='btnFinalizar' className="material-symbols-outlined" onClick={() => handleUpdateStatus('4')}>check_circle</span>
                    <span className="  statusTicket ">Status : {currentStatus === '1' ? 'A fazer' : currentStatus === '2' ? 'Atendendo' : currentStatus === '3' ? 'Pendente' : currentStatus === '4' ? 'Finalizado' : ''}</span>
                </div>
                <div>
                    <span id='btnSla' className="material-symbols-outlined">bomb</span>
                </div>
                <div className='slaInfo'>
                    <p>Data do estouro SLA</p>
                    <p>{formatDataSlaTickets}</p>
                </div>
            </div>

            <div className='infoContainer'>
                <div className="infoVisualizarTicket">
                    <h2>Título: {selectedTicket.titulo}</h2>
                    <div className="infoPair">
                        <span className="boldText">Data de abertura:</span>
                        <p>{new Date(selectedTicket.dataAbertura).toLocaleDateString('pt-BR')}</p>
                    </div>
                    <div className="infoPair">
                        <span className="boldText">Sala: </span>
                        <p>{selectedTicket.sala.numeroSala}</p>
                    </div>
                    <div className="infoPair">
                        <span className="boldText">Categoria: </span>
                        <p>{selectedTicket.categoria.categoria}</p>
                    </div>
                    <div className="infoPair">
                        <span className="boldText">Equipamento: </span>
                        <p>{selectedTicket.equipamentos.equipamento}</p>
                    </div>
                    <div className="infoPair">
                        <span className="boldText">Descrição: </span>
                        <p>{selectedTicket.descricao}</p>
                    </div>
                </div>
                <div className='chatCliente'>
                <ChatTecnico selectedTicket={selectedTicket}/>
                </div>
            </div>

            {modalOpen && selectedTicket && (
                <div className="modal">
                    <div className="modalContent">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <EscalamentoTicket selectedTicket={selectedTicket} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VisualizarTicketTecnico;
