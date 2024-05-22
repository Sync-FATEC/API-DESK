import React from 'react';
import ITickets from '../../types/ITickets';
import './visualizarTickets.css'
import { ChatCliente } from '../chatCliente';
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
                        <p>{new Date(selectedTicket.dataAbertura).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
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
                    <div className="infoPair">
                        <span className="boldText">Tecnico: </span>
                        {selectedTicket.status === '4' ? (
                            <p>{selectedTicket.tecnicoFinal}</p>
                        ) : selectedTicket.tecnico === null ? (
                            <p>Não atribuído</p>
                        ) : (
                            <p>{selectedTicket.tecnico?.nome}</p>
                        )}
                    </div>
                </div>
                <div className='containerTicketChatTemplate'>
                    <div className='chatClienteFim'>
                        <ChatCliente selectedTicket={selectedTicket} />
                    </div>
                    {selectedTicket.status === '4' && (
                        <div className='templateFim'>
                            <h3>Mensagem finalização:</h3>
                            <p>{selectedTicket.template}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VisualizarTicketCliente;