import { Header } from '../../components/Header';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ITickets from '../../types/ITickets';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { VisualizarTicket } from '../../components/VisualizarTicket';
import './tecnico.css'
export const Tecnicos = () => {

  const [isVisualizarTicketModalOpen, setIsVisualizarTicketModalOpen] = useState(false);
  const handleOpenVisualizarTicketModal = () => setIsVisualizarTicketModalOpen(true);
  const handleCloseVisualizarTicketModal = () => setIsVisualizarTicketModalOpen(false);






  const [tickets, setTickets] = useState<ITickets[]>([]);
  const user = useContext(AuthContext);

  useEffect(() => {
    const fetchSalas = async () => {
      try {
        const response = await axios.get('http://localhost:5555/tickets/listar/' + user.user?.usuarioID);
        setTickets(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSalas();
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
                <option value="emAtendimento">Em Atendimento</option>
                <option value="pendentes">Pendentes</option>
                <option value="finalizados">Finalizados</option>
              </select>



              <select className="selectFilter">
                <option value="abertos">Categoria</option>
                <option value="emAtendimento">Em Atendimento</option>
                <option value="pendentes">Pendentes</option>
                <option value="finalizados">Finalizados</option>
              </select>
            </div>


          </div>
        </div>
        <div className='ticket-contentTec'>
          <div className="ticket-listTec">

            <div className="ticket-typesTec">
              <div className='afazer'>A fazer
                <span className="material-symbols-outlined">
                  flag
                </span>
              </div>
              <div className='atendendo'>Atendendo</div>
              <div className='pendente'>Pendente</div>
              <div className='finalizado'>Finalizado</div>

            </div>
            {tickets.map((ticket, index) => (
              <div key={index} className="ticket-itemTec">

                <div className='afazerInfo'>
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
                <div className='atendendo'>Atendendo</div>
                <div className='pendente'>Pendente</div>
                <div className='finalizado' onClick={handleOpenVisualizarTicketModal}>Finalizado</div>
              </div> 
            ))}
                {isVisualizarTicketModalOpen && (
                  <div className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={handleCloseVisualizarTicketModal}>&times;</span>
                      <VisualizarTicket />
                    </div>
                  </div>
                )}
              

           
          </div>
        </div>
      </div>
    </div >
  );
};