import React, { useState } from 'react';
import axios from 'axios';
import ITickets from '../../types/ITickets';
import EscalamentoTicket from '../EscalamentoTicket';
import { ChatTecnico } from '../chatTecnico';
import './visualizarTicketsTecnico.css'

interface Props {
    selectedTicket: ITickets | null;
    onClose: () => void;
}

const VisualizarTicketTecnico: React.FC<Props> = ({ selectedTicket, onClose }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(selectedTicket?.status || '');
    const formatDataSlaTickets = selectedTicket?.dataSla ? new Date (selectedTicket.dataSla).toLocaleString ('pt-BR', { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric'}): '';
    
    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleUpdateStatus = async (newStatus: string) => {
        try {
            await axios.put(`http://localhost:5555/tickets/alterarStatus`, { ticketID: selectedTicket?.ticketsID, status: newStatus });
            if (selectedTicket) {
                selectedTicket.status = newStatus;
                setCurrentStatus(newStatus); // Atualiza o estado do status do ticket
            }
        } catch (error) {
            console.error("Erro ao atualizar status do ticket:", error);
        }
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
                <ChatTecnico />
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
