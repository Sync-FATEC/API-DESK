import { Header } from '../../components/Header';
import './cliente.css';

export const Cliente = () => {
    return (
        <div className="ticketContainer">
            <div className="formTicket">
                <Header />
                <div className="ticket-container">
                    <div className="ticket-filters">
                        <div className="filter-container">
                            <select className="selectFilter">
                                <option value="abertos">Abertos</option>
                                <option value="emAtendimento">Em Atendimento</option>
                                <option value="pendentes">Pendentes</option>
                                <option value="finalizados">Finalizados</option>
                            </select>
                        </div>

                        <button className="new-ticket-button">
                            Novo Ticket
                        </button>
                    </div>
                    <div className="ticket-list">
                        <div className="ticket-types">
                            <div>ID</div>
                            <div>Abertura</div>
                            <div>Descrição</div>
                            <div>Categoria</div>
                        </div>
                        <div className="ticket-item">
                            <div>1</div>
                            <div>2024-04-25</div>
                            <div>Descrição do ticket 1...</div>
                            <div>Atendimento</div>
                        </div>
                        <div className="ticket-item">
                            <div>2</div>
                            <div>2024-04-24</div>
                            <div>Descrição do ticket 2...</div>
                            <div>Aberto</div>
                        </div>
                        <div className="ticket-item">
                            <div>3</div>
                            <div>2024-04-23</div>
                            <div>Descrição do ticket 3...</div>
                            <div>Pendente</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
