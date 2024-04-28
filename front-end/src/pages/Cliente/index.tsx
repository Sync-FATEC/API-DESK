import { Header } from '../../components/Header';
import './cliente.css';
import { NovoTicket } from '../../components/NovoTicket';
import  { useState } from 'react';

export const Cliente = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
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

                        <button className="btnTicket" onClick={handleOpenModal}>
                           <span className="material-symbols-outlined">confirmation_number</span>
                           <p>Novo ticket</p>
                        </button>
                        {modalOpen && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={handleCloseModal}>&times;</span>
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
                            <div>Descrição</div>
                            <div>Categoria</div>
                            <div></div>
                        </div>
                        <div className="ticket-item">
                            <div>1</div>
                            <div>2024-04-25</div>
                            <div>Descrição do ticket 1...</div>
                            <div>Atendimento</div>
                            <div><span className="material-symbols-outlined">
                            mystery</span></div>
                        </div>
                        <div className="ticket-item">
                            <div>2</div>
                            <div>2024-04-24</div>
                            <div>Descrição do ticket 2...</div>
                            <div>Aberto</div>
                            <div><span className="material-symbols-outlined">
                            mystery</span></div>
                        </div>
                        <div className="ticket-item">
                            <div>3</div>
                            <div>2024-04-23</div>
                            <div>Descrição do ticket 3...</div>
                            <div>Pendente</div>
                            <div><span className="material-symbols-outlined">
                            mystery</span></div>
                        </div>
                    </div>
                
            </div>
        </div>
        
        </div>
        
    );
};
