import React from 'react';
import { useState } from 'react';

import './visualizarticket.css';
import ITickets from '../../types/ITickets';
import EscalamentoTicket from '../EscalamentoTicket';

interface Props {
    selectedTicket: ITickets | null;
    onClose: () => void;
}

const VisualizarTicketTecnico: React.FC<Props> = ({ selectedTicket, onClose }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
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
                    <span id='btnAtendendo' className="material-symbols-outlined">play_circle</span>
                    <span id='btnPendente' className="material-symbols-outlined">pause_circle</span>
                    <span id='btnFinalizar' className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                    <span id='btnSla' className="material-symbols-outlined">bomb</span>
                </div>
                <div className='slaInfo'>
                    <p>Data do estouro SLA</p>
                    <p>04/05/2024</p>
                </div>
            </div>

            <div className='infoContainer'>
                <div className="infoVisualizar">
                    <h2>Título: {selectedTicket.titulo}</h2>
                    <p>Descrição {selectedTicket.descricao}</p>
                    <p>Categoria: {selectedTicket.categoria.categoria}</p>
                    <p>Equipamento: {selectedTicket.equipamentos.equipamento}</p>
                    <p>Sala: {selectedTicket.sala.numeroSala}</p>
                    <p>Nome cliente: {selectedTicket.usuario.nome}</p>
                    <div>Data de abertura: {new Date(selectedTicket.dataAbertura).toLocaleDateString('pt-BR')}</div>
                </div>
                <div className='infoChat'>
                    {/* Aqui você pode adicionar o componente de chat, se necessário */}
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