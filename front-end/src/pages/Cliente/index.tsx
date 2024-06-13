import React, { useState, useEffect, useContext } from 'react';
import { Header } from '../../components/Header';
import './cliente.css';
import { NovoTicket } from '../../components/NovoTicket';
import VisualizarTicketCliente from '../../components/VisualizarTicketsCliente';
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

    const [filter, setFilter] = useState(1);

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(Number(event.target.value));
    };

    const filteredTickets = tickets.filter((ticket) => {
        if (filter === 1) {
            return ticket.status === '1';
        } else if (filter === 2) {
            return ticket.status === '2';
        } else if (filter === 3) {
            return ticket.status === '3';
        } else if (filter === 4) {
            return ticket.status === '4';
        }
        return true;
    });
    const getStatus = (status: string) => {
        switch (status) {
            case '1':
                return 'Aberto';
            case '2':
                return 'Em atendimento';
            case '3':
                return 'Pendente';
            case '4':
                return 'Finalizado';
            default:
                return '';
        }
    }
                return (
                    <div className="ticketContainer">
                        <div className="formTicket">
                            <Header />
                            <div className="ticket-container">
                                <h1>Listagem de Tickets</h1>
                                <div className="ticket-filters">
                                    <div className="filter-container">
                                        <select className="selectFilter" value={filter} onChange={handleFilterChange}>
                                            <option value={0}>Mostrar todos</option>
                                            <option value={1}>Abertos</option>
                                            <option value={2}>Em Atendimento</option>
                                            <option value={3}>Pendentes</option>
                                            <option value={4}>Finalizados</option>
                                        </select>
                                    </div>

                                    <button className="btnTicket" onClick={handleOpenNovoTicketModal}>
                                        <span className="material-symbols-outlined">confirmation_number</span>
                                        <p>Novo ticket</p>
                                    </button>
                                    {isNovoTicketModalOpen && (
                                        <div className="modal">
                                            <div className="modal-content">
                                                <span className="close" onClick={handleCloseNovoTicketModal}>&times;</span>
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
                                        {filter === 4 ? <div>Fechamento</div> : ''}
                                        {filter !== 4 ? <div>Aberto</div> : ''}
                                        <div>Titulo</div>
                                        <div>Categoria</div>
                                        <div>Status</div>
                                        <div>Visualizar</div>
                                    </div>
                                    {filteredTickets.map((ticket) => (
                                        <div className="ticket-item desktop" key={ticket.ticketsID}>
                                            <div className='ticket-itemDiv'>{ticket.ticketsID}</div>
                                            { filter === 4 && ticket.dataFechamento ? <div className='ticket-itemDiv'>{new Date(ticket.dataFechamento).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' })}</div> : ''}
                                            { filter !== 4 && ticket.dataAbertura ? <div className='ticket-itemDiv'>{new Date(ticket.dataAbertura).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' })}</div> : ''}
                                            <div className='ticket-itemDiv'>{ticket.titulo}</div>
                                            <div className='ticket-itemDiv'>{ticket.categoria.categoria}</div>
                                            <div className='ticket-itemDiv'>{getStatus(ticket.status)}
                                            </div>
                                            <div className='ticket-itemDiv'>
                                                <span className="material-symbols-outlined" onClick={() => handleOpenVisualizarTicketModal(ticket)}>
                                                    mystery
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                    {filteredTickets.map((ticket) => (
                                        <div className="ticket-item mobile" key={ticket.ticketsID}>
                                            <div className='ticket-itemDiv mobile'>{ticket.ticketsID}</div>
                                            <div className='ticket-itemDiv'>Titulo: {ticket.titulo}</div>
                                            <div className='ticket-itemDiv'>Categoria: {ticket.categoria.categoria}</div>
                                            { filter === 4 && ticket.dataFechamento ? <div className='ticket-itemDiv'>Fechamento:: {new Date(ticket.dataFechamento).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' })}</div> : ''}
                                            { filter !== 4 && ticket.dataAbertura ? <div className='ticket-itemDiv'>Aberto: {new Date(ticket.dataAbertura).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' })}</div> : ''}
                                            <div className='ticket-itemDiv'>Status: {getStatus(ticket.status)}
                                            </div>
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
                                            <span className="close" onClick={handleCloseVisualizarTicketModal}>&times;</span>
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