import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import './visualizarticket.css';
import ITickets from '../../types/ITickets';

interface Props {
    selectedTicket: ITickets | null;
    onClose: () => void;
}

const VisualizarTicket: React.FC<Props> = ({ selectedTicket, onClose }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = useContext(AuthContext);

    // Verifica se o ticket está selecionado
    if (!selectedTicket) return null;

    return (
        <div className="modalVisualizar">
            <div className='btnVisualizar'> 
                <div>
                    <span className="material-symbols-outlined">sync_alt</span>
                    <span id='btnAtendendo' className="material-symbols-outlined">play_circle</span>
                    <span id='btnPendente' className="material-symbols-outlined">pause_circle</span>
                    <span id='btnFinalizar' className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                    <span id='btnSla' className="material-symbols-outlined">bomb</span>
                </div>
            </div>

            <div className='infoContainer'>
                <div className="infoVisualizar">
                    <h2>{selectedTicket.titulo}</h2>
                    <p>{selectedTicket.descricao}</p>
                    <p>{selectedTicket.status}</p>
                    <p>{selectedTicket.categoria.categoria}</p>
                    <p>{selectedTicket.equipamentos.equipamento}</p>
                    <p>{selectedTicket.sala.numeroSala}</p>
                    <p>{selectedTicket.usuario.nome}</p>
                    <div>{new Date(selectedTicket.dataAbertura).toLocaleDateString('pt-BR')}</div>
                </div>
                <div className='infoChat'>
                    {/* Aqui você pode adicionar o componente de chat, se necessário */}
                </div>
            </div>

            {/* Botão para fechar o modal */}
            <span className="close" onClick={onClose}>&times;</span>
        </div>
    );
};

export default VisualizarTicket;
