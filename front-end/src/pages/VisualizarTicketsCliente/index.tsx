import React from 'react';
import ITickets from '../../types/ITickets';

interface Props {
    selectedTicket: ITickets | null;
    onClose: () => void;
}

const VisualizarTicketCliente: React.FC<Props> = ({ selectedTicket, onClose }) => {
    if (!selectedTicket) return null;

    return (
        <div className="modalVisualizar">
            <div className='infoContainer'>
                <div className="infoVisualizar">
                    <h2>{selectedTicket.titulo}</h2>
                    <p>{selectedTicket.descricao}</p>
                    <p>{selectedTicket.status}</p>
                    <p>{selectedTicket.categoria.categoria}</p>
                    <p>{selectedTicket.equipamentos.equipamento}</p>
                    <p>{selectedTicket.sala.numeroSala}</p>
                    <p>{selectedTicket.usuario.nome}</p>
                    <div>{new Date(selectedTicket.dataAbertura).toLocaleDateString('pt-BR')}</div>
                </div>
                <div className='infoChat'>
                    {/* Aqui você pode adicionar o componente de chat, se necessário */}
                </div>
            </div>
            <span className="close" onClick={onClose}>&times;</span>
        </div>
    );
};

export default VisualizarTicketCliente;