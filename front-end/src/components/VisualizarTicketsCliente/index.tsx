import React from 'react';
import ITickets from '../../types/ITickets';
import './visualizarTickets.css'
interface Props {
    selectedTicket: ITickets | null;
    onClose: () => void;
}

const VisualizarTicketCliente: React.FC<Props> = ({ selectedTicket, onClose }) => {
    if (!selectedTicket) return null;

    return (
        <div className="modalVisualizar">
            <h1>{selectedTicket.titulo}</h1>
            <div className='infoContainer'>
                <div className="infoVisualizar">
                    <p>Descrição: {selectedTicket.descricao}</p>
                    <p>Categoria: {selectedTicket.categoria.categoria}</p>
                    <p>Equipamento: {selectedTicket.equipamentos.equipamento}</p>
                    <p>Sala: {selectedTicket.sala.numeroSala}</p>
                    
                    <div>Data de abertura: {new Date(selectedTicket.dataAbertura).toLocaleDateString('pt-BR')}</div>
                </div>
                <div className='infoChat'>
                    {/* adc info sprint 3*/}
                </div>
            </div>
           
        </div>
    );
};

export default VisualizarTicketCliente;