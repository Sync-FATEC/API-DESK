import { Header } from '../../components/Header';
import './cliente.css';
import { NovoTicket } from '../../components/NovoTicket';
import { VisualizarTicket } from '../../components/VisualizarTicket';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ITickets from '../../types/ITickets';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export const Cliente = () => {

    const [isNovoTicketModalOpen, setIsNovoTicketModalOpen] = useState(false);
    const handleOpenNovoTicketModal = () => setIsNovoTicketModalOpen(true);
    const handleCloseNovoTicketModal = () => setIsNovoTicketModalOpen(false);


    const [isVisualizarTicketModalOpen, setIsVisualizarTicketModalOpen] = useState(false);
    const handleOpenVisualizarTicketModal = () => setIsVisualizarTicketModalOpen(true);
    const handleCloseVisualizarTicketModal = () => setIsVisualizarTicketModalOpen(false);

    const [tickets, setTickets] = useState<ITickets[]>([]);
    const { user } = useContext(AuthContext); 

    useEffect(() => {
        const fetchSalas = async () => {
          try {
            const response = await axios.get(`http://localhost:5555/tickets/listar/${user?.usuarioID}`);
            setTickets(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchSalas();
      }, []);

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
                            <div>Abertura</div>
                            <div>Titulo</div>
                            <div>Categoria</div>
                            <div>Tickets</div>
                        </div>
                        {tickets.map((ticket) => (

                        <div className="ticket-item">
                            <div>{ticket.ticketsID}</div>
                            <div>{new Date(ticket.dataAbertura).toLocaleDateString('pt-BR')}</div>
                            <div>{ticket.titulo}</div>
                            <div>{ticket.categoria.categoria}</div>

                            <div>

                                <span className="material-symbols-outlined" onClick={handleOpenVisualizarTicketModal}>
                                    mystery
                                </span>


                            </div>
                            {isVisualizarTicketModalOpen && (
                                <div className="modal">
                                    <div className="modal-content">
                                        <span className="close" onClick={handleCloseVisualizarTicketModal}>&times;</span>
                                        <VisualizarTicket />
                                    </div>
                                </div>
                            )}
                        </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>

    );
};
