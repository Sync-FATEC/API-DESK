import { Header } from '../../components/Header';
import { VisualizarTicket } from '../../components/VisualizarTicket';
import  { useState } from 'react';
import './tecnico.css'
export const Tecnico = () => {
   
     
     const [isVisualizarTicketModalOpen, setIsVisualizarTicketModalOpen] = useState(false);
     const handleOpenVisualizarTicketModal = () => setIsVisualizarTicketModalOpen(true);
     const handleCloseVisualizarTicketModal = () => setIsVisualizarTicketModalOpen(false);
 
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
                            <div className='afazer'>A fazer </div>
                            <div className='atendendo'>Atendendo</div>
                            <div className='pendente'>Pendente</div>
                            <div className='finalizado'>Finalizado</div>
                            
                        </div>
                        <div className="ticket-itemTec">
                           <div className='afazer'>A fazer </div>
                            <div className='atendendo'>Atendendo</div>
                            <div className='pendente'>Pendente</div>
                            <div className='finalizado' onClick={handleOpenVisualizarTicketModal}>Finalizado</div>
                            
                            {isVisualizarTicketModalOpen  && (
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
        </div>
        
        </div>
        
    );
};
