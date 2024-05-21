import { Header } from '../../components/Header';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ITickets from '../../types/ITickets';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import VisualizarTicketTecnico from '../../components/VisualizarTicketsTecnico';
import './tecnico.css';
import ICategoria from '../../types/ICategoria';

export const Tecnicos = () => {
  const [isVisualizarTicketModalOpen, setIsVisualizarTicketModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<ITickets | null>(null);
  const [categorias, setCategorias] = useState<ICategoria[]>([]);

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
          status: ticket.status || '1'
        }));
        setTickets(initializedTickets);
        const categoria = await axios.get('http://localhost:5555/categorias/listar');
        setCategorias(categoria.data);
      } catch (error) {
        console.error("Erro ao buscar tickets:", error);
      }
    };

    fetchTickets();
  }, [user.user]);

  const [filtroPrioridade, setFiltroPrioridade] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');

  const handleFiltroPrioridadeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltroPrioridade(event.target.value);
  };

  const handleFiltroCategoriaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltroCategoria(event.target.value);
  };

  const filteredTickets = tickets.filter((ticket) => {
    if (filtroPrioridade && ticket.prioridade !== filtroPrioridade) {
      return false;
    }
    if (filtroCategoria && ticket.categoria.categoriaID !== Number(filtroCategoria)) {
      return false;
    }
    return true;
  });

  const getStatusClass = (status: string) => {
    switch (status) {
      case '1':
        return 'afazer';
      case '2':
        return 'atendendo';
      case '3':
        return 'pendente';
      case '4':
        return 'finalizado';
      default:
        return '';
    }
  };

  return (
    <div className="ticketContainer">
      <div className="formTicket">
        <Header />
        <div className="ticket-container">
          <h1>Listagem de Tickets</h1>
          <div className="ticket-filters">
            <div className="filter-containerTec">
              <select className="selectFilter" value={filtroPrioridade} onChange={handleFiltroPrioridadeChange}>
                <option value="">Prioridade</option>
                <option value="Alta">Alta</option>
                <option value="Media">Média</option>
                <option value="Baixa">Baixa</option>
              </select>
              <select className="selectFilter" value={filtroCategoria} onChange={handleFiltroCategoriaChange}>
                <option value="">Categoria</option>
                {categorias.map((categoria, index) => (
                  <option key={index} value={categoria.categoriaID}>{categoria.categoria}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='ticket-contentTec'>
          <div className="ticket-listTec">
            <div className="ticket-typesTec">
              <div className="containerColunas">
                <div id='btnAfazer' className='containerAfazer'>A fazer
                  <span className="material-symbols-outlined">
                    flag
                  </span>
                </div>
                {filteredTickets.map((ticket, index) => (
                  ticket.status === '1' && (
                    <div key={index} className={`ticket-itemTec ${getStatusClass(ticket.status)}`} onClick={() => handleOpenVisualizarTicketModal(ticket)}>
                      <div className={`ticket-item-info ${getStatusClass(ticket.status)}Info`}>


                        <div className='containerInfoTicketInicio'>
                          #{ticket.ticketsID}
                        </div>
                        <div className='containerTituloCard'>
                          <p>
                            {ticket.titulo}
                          </p>
                        </div>
                        <div className='containerTituloCard'>
                          <p>
                            Categoria: {ticket.categoria.categoria}
                          </p>
                        </div>
                        <div className='containerInfoTicketFim'>
                          <span className='prioridadeTicket'>{ticket.prioridade}</span>
                          <div className='dataAberturaTicket'>
                            {new Date(ticket.dataAbertura).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' })}
                          </div>

                        </div>

                      </div>
                    </div>
                  )
                ))}
              </div>
              <div className="containerColunas">
                <div id='btnAtendendo' className='containerAtendendo'>Atendendo
                  <span className="material-symbols-outlined">
                    play_circle
                  </span>
                </div>
                {filteredTickets.map((ticket, index) => (
                  ticket.status === '2' && (
                    <div key={index} className={`ticket-itemTec ${getStatusClass(ticket.status)}`} onClick={() => handleOpenVisualizarTicketModal(ticket)}>
                      <div className={`ticket-item-info ${getStatusClass(ticket.status)}Info`}>
                        <div className='containerInfoTicketInicio'>
                          #{ticket.ticketsID}
                        </div>
                        <div className='containerTituloCard'>
                          <p>
                            {ticket.titulo}
                          </p>
                        </div>
                        <div className='containerTituloCard'>
                          <p>Técnico: {ticket.tecnico ? ticket.tecnico.nome : 'Sem técnico atribuído'}</p>
                        </div>
                        <div className='containerInfoTicketFim'>
                          <span className='prioridadeTicket'>{ticket.prioridade}</span>
                          <div className='dataAberturaTicket'>
                            {new Date(ticket.dataAbertura).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' })}
                          </div>

                        </div>

                      </div>
                    </div>
                  )
                ))}
              </div>
              <div className="containerColunas">
                <div id='btnPendente' className='containerPendente'>Pendente
                  <span className="material-symbols-outlined">
                    pause_circle
                  </span>
                </div>
                {filteredTickets.map((ticket, index) => (
                  ticket.status === '3' && (
                    <div key={index} className={`ticket-itemTec ${getStatusClass(ticket.status)}`} onClick={() => handleOpenVisualizarTicketModal(ticket)}>
                      <div className={`ticket-item-info ${getStatusClass(ticket.status)}Info`}>
                        <div className='containerInfoTicketInicio'>
                          #{ticket.ticketsID}
                        </div>
                        <div className='containerTituloCard'>
                          <p>
                            {ticket.titulo}
                          </p>
                        </div>
                        <div className='containerTituloCard'>
                          <p>Técnico: {ticket.tecnico ? ticket.tecnico.nome : 'Sem técnico atribuído'}</p>
                        </div>
                        <div className='containerInfoTicketFim'>
                          <span className='prioridadeTicket'>{ticket.prioridade}</span>
                          <div className='dataAberturaTicket'>
                            {new Date(ticket.dataAbertura).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' })}
                          </div>

                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
              <div className="containerColunas">
                <div id='btnFinalizar' className='containerFinalizado'>Finalizado
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </div>
                {filteredTickets.map((ticket, index) => (
                  ticket.status === '4' && (
                    <div key={index} className={`ticket-itemTec ${getStatusClass(ticket.status)}`} onClick={() => handleOpenVisualizarTicketModal(ticket)}>
                      <div className={`ticket-item-info ${getStatusClass(ticket.status)}Info`}>
                        <div className='containerInfoTicketInicio'>
                          #{ticket.ticketsID}
                        </div>
                        <div className='containerTituloCard'>
                          <p>
                            {ticket.titulo}
                          </p>
                        </div>
                        <div className='containerTituloCard'>
                          <p>Técnico: {ticket.tecnicoFinal ? ticket.tecnicoFinal : 'Sem técnico atribuído'}</p>
                        </div>
                        <div className='containerInfoTicketFim'>
                          <span className='prioridadeTicket'>{ticket.prioridade}</span>
                          <div className='dataAberturaTicket'>
                            {new Date(ticket.dataAbertura).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' })}
                          </div>

                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
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
