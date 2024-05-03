import React, { useState, useEffect, useContext } from 'react';
import { Header } from '../../components/Header';
import './cliente.css';
import { NovoTicket } from '../../components/NovoTicket';
import  VisualizarTicketCliente from '../../components/VisualizarTicketsCliente';
import axios from 'axios';
import ITickets from '../../types/ITickets';
import { AuthContext } from '../../contexts/Auth/AuthContext';

const Cliente: React.FC = () => {
    const [isNovoTicketModalOpen, setIsNovoTicketModalOpen] = useState(false);
    const handleOpenNovoTicketModal = () => setIsNovoTicketModalOpen(true);
    const handleCloseNovoTicketModal = () => setIsNovoTicketModalOpen(false);

    const [selectedTicket, setSelectedTicket] = useState<ITickets | null>(null);
    const [isVisualizarTicketModalOpen, setIsVisualizarTicketModalOpen] = useState(false);
    const handleOpenVisualizarTicketModal = (ticket: ITickets) => {
        setSelectedTicket(ticket);
        setIsVisualizarTicketModalOpen(true);
    };
    const handleCloseVisualizarTicketModal = () => setIsVisualizarTicketModalOpen(false);

    const [tickets, setTickets] = useState<ITickets[]>([]);
    const { user } = useContext(AuthContext); 

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get(`http://localhost:5555/tickets/listar/${user?.usuarioID}`);
                setTickets(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTickets();
    }, [user?.usuarioID]);

    return (
        <div className="ticketContainer">
            <div className="formTicket">
                <Header />
                <div className="ticket-container">
                    <h1>Listagem de Tickets</h1>
                    <div className="ticket-filters">
                        <div className="filter-container">
                            <select className="selectFilter">
                                <option value="abertos">Abertos</option>
                                <option value="emAtendimento">Em Atendimento</option>
                                <option value="pendentes">Pendentes</option>
                                <option value="finalizados">Finalizados</option>
                            </select>
                        </div>

                        <button className="btnTicket" onClick={handleOpenNovoTicketModal}>
                            <span className="material-symbols-outlined">confirmation_number</span>
                            <p>Novo ticket</p>
                        </button>
                        {isNovoTicketModalOpen && (
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close1" onClick={handleCloseNovoTicketModal}>&times;</span>
                                    <NovoTicket />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='ticket-content'>
                    <div className="ticket-list">
                        <div className="ticket-types">
                            <div>ID</div>
                            <div>Abertura</div>
                            <div>Titulo</div>
                            <div>Categoria</div>
                            <div></div>
                        </div>
                        {tickets.map((ticket) => (
                            <div className="ticket-item" key={ticket.ticketsID}>
                                <div className='ticket-itemDiv'>{ticket.ticketsID}</div>
                                <div className='ticket-itemDiv'>{new Date(ticket.dataAbertura).toLocaleDateString('pt-BR')}</div>
                                <div className='ticket-itemDiv'>{ticket.titulo}</div>
                                <div className='ticket-itemDiv'>{ticket.categoria.categoria}</div>
                                <div className='ticket-itemDiv'>
                                    <span className="material-symbols-outlined" onClick={() => handleOpenVisualizarTicketModal(ticket)}>
                                        mystery
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {isVisualizarTicketModalOpen && selectedTicket && (
                        <div className="modal">
                            <div className="modal-content">
                                <VisualizarTicketCliente selectedTicket={selectedTicket} onClose={handleCloseVisualizarTicketModal} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cliente;