import { Header } from '../../components/Header';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ITickets from '../../types/ITickets';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import VisualizarTicketTecnico from '../../components/VisualizarTicketTecnico'; // Importe o componente VisualizarTicket
import './tecnico.css';

export const Tecnicos = () => {
  const [isVisualizarTicketModalOpen, setIsVisualizarTicketModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<ITickets | null>(null); // Estado para armazenar o ticket selecionado

  const handleOpenVisualizarTicketModal = (ticket: ITickets) => {
    setSelectedTicket(ticket);
    setIsVisualizarTicketModalOpen(true);
  };

  const handleCloseVisualizarTicketModal = () => setIsVisualizarTicketModalOpen(false);

  const [tickets, setTickets] = useState<ITickets[]>([]);
  const user = useContext(AuthContext);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/tickets/listar/${user.user?.usuarioID}`);
        const initializedTickets = response.data.map((ticket: ITickets) => ({
          ...ticket,
          status: ticket.status || 'A fazer' // Define o status inicial se não estiver definido
        }));
        setTickets(initializedTickets);
      } catch (error) {
        console.error("Erro ao buscar tickets:", error);
      }
    };
  
    fetchTickets();
  }, [user.user]);
  
  return (
    <div className="ticketContainer">
      <div className="formTicket">
        <Header />
        <div className="ticket-container">
          <h1>Listagem de Tickets</h1>
          <div className="ticket-filters">
            <div className="filter-containerTec">
              <select className="selectFilter">
                <option value="abertos">Prioridade</option>
                <option value="emAtendimento">Alta</option>
                <option value="pendentes">Média</option>
                <option value="finalizados">Baixa</option>
              </select>
              <select className="selectFilter">
                <option value="abertos">Categoria</option>
                <option value="emAtendimento">Hardware</option>
                <option value="pendentes">Software</option>
                <option value="finalizados">Rede</option>
              </select>
            </div>
          </div>
        </div>
        <div className='ticket-contentTec'>
          <div className="ticket-listTec">
            <div className="ticket-typesTec">
              <div id='btnAfazer' className='afazer'>A fazer
                <span className="material-symbols-outlined">
                  flag
                </span>
              </div>
              <div id='btnAtendendo' className='atendendo'>Atendendo
              <span className="material-symbols-outlined">
                  play_circle
                </span>
              </div>
              <div id='btnPendente' className='pendente'>Pendente
                <span className="material-symbols-outlined">
                  pause_circle
                </span>              
              </div>
              <div id='btnFinalizar' className='finalizado'>Finalizado
              <span className="material-symbols-outlined">
                  check_circle
                </span> 
              </div>
            </div>
            {tickets.map((ticket, index) => (
               ticket.ticketsID && ticket.titulo && 
              <div key={index} className="ticket-itemTec">
                <div className='afazerInfo'  onClick={() => handleOpenVisualizarTicketModal(ticket)}>
                  <div>
                    #{ticket.ticketsID}
                  </div>
                  <div>
                    {ticket.titulo}
                  </div>
                  <div>
                    <span className='prioridade'>Médio</span>
                    {new Date(ticket.dataAbertura).toLocaleDateString('pt-BR')}
                  </div>
                </div>
                {/*}
                <div className='atendendo'>Atendendo</div>
                <div className='pendente'>Pendente</div>
                <div className='finalizado'> Finalizado</div>*/}
              </div>
            ))}
          </div>
        </div>
        {/* Renderiza o modal VisualizarTicket apenas se o modal estiver aberto e houver um ticket selecionado */}
        {isVisualizarTicketModalOpen && selectedTicket && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseVisualizarTicketModal}>&times;</span>
              <VisualizarTicketTecnico selectedTicket={selectedTicket} onClose={handleCloseVisualizarTicketModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
