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
            <h1>#{selectedTicket.ticketsID} {selectedTicket.titulo}</h1>
            <div className='containerVisualizarTicket'>
                <div className="infoVisualizarTicket">
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
                <div className='chatCliente'></div>
            </div>
        </div>
    );
};

export default VisualizarTicketCliente;