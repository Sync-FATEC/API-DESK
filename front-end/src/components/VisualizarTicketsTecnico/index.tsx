import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ITickets from '../../types/ITickets';
import IMensagens from '../../types/IMensagens';
import EscalamentoTicket from '../EscalamentoTicket';
import { ChatTecnico } from '../chatTecnico';
import './visualizarTicketsTecnico.css'
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { erro, warning } from '../Swal/swal';
import Swal from 'sweetalert2';
import FinalizarTicket from '../FinalizarTicket';

interface Props {
    selectedTicket: ITickets | null;
    onClose: () => void;
}

const VisualizarTicketTecnico: React.FC<Props> = ({ selectedTicket, onClose }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenFinalizar, setModalOpenFinalizar] = useState(false);
    const [templateADM, setTemplateADM] = useState<IMensagens[]>([]);
    const [mensagem, setMensagem] = useState('');
    // Estado para controlar o status atual do ticket
    const [currentStatus, setCurrentStatus] = useState(selectedTicket?.status || '');
    const formatDataSlaTickets = selectedTicket?.dataSla
        ? new Date(selectedTicket.dataSla).toLocaleString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        })
        : '';

    const { user } = useContext(AuthContext);
    

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleOpenModalFinalizar = () => {
        setModalOpenFinalizar(true);
    };

    const handleCloseModalFinalizar = () => {
        setModalOpenFinalizar(false);
    };

    useEffect(() => {
        if (selectedTicket) {
            axios.get(`http://localhost:5555/mensagens/visualizar/T`)
                .then(response => {
                    setTemplateADM(response.data);
                })
                .catch(error => {
                    console.error('Erro ao buscar templates:', error);
                    erro('Erro ao carregar templates do ticket!');
                });
        }
    }, [selectedTicket]);  

    if (!selectedTicket) {
        return null;
    }


    
    const handleUpdateStatus = async (newStatus: string) => {
        try {
            if (currentStatus === '4') {
                warning('Ticket já finalizado!');
            } else if (selectedTicket?.status === newStatus) {
                warning('Ticket já possui esse status!');
            } else {
                if (newStatus === '4') {
                    const confirmMessage = "Deseja realmente finalizar o ticket?";
                    Swal.fire({
                        title: confirmMessage,
                        showDenyButton: true,
                        confirmButtonText: "Sim",
                        denyButtonText: "Não",
                        width: 410,
                        confirmButtonColor: 'rgb(0,114,187)',
                        denyButtonColor: 'rgb(255, 0, 53)',
                        heightAuto: false,
                        backdrop: false,
                        customClass: {
                            confirmButton: 'cButton',
                            denyButton: 'dButton',
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            axios.put(`http://localhost:5555/tickets/alterarStatus`, { ticketID: selectedTicket?.ticketsID, status: newStatus, tecnicoID: user?.usuarioID });
                            if (selectedTicket) {
                                selectedTicket.status = newStatus;
                                setCurrentStatus(newStatus);
                                Swal.fire({
                                    title: "Sucesso!",
                                    text: "Ticket finalizado com sucesso!",
                                    icon: 'success',
                                    confirmButtonText: 'OK',
                                    backdrop: 'rgba(0,0,0,0.7)',
                                    timer: 2500, // 2.5 segundos
                                    timerProgressBar: true,
                                    showClass: {
                                        popup: 'animate__animated animate__fadeInDown'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOutUp'
                                    },
                                    customClass: {
                                        popup: 'my-popup-class',
                                        title: 'my-title-class',
                                        confirmButton: 'my-confirm-button-class',
                                        timerProgressBar: 'my-progress-bar-class'
                                    }
                                }).then(() => {
                                    window.location.reload();
                                });
                            }
                        }
                    });
                } else if (newStatus === '2') {
                    axios.put(`http://localhost:5555/tickets/alterarStatus`, { ticketID: selectedTicket?.ticketsID, status: newStatus, tecnicoID: user?.usuarioID });
                    if (selectedTicket) {
                        selectedTicket.status = newStatus;
                        setCurrentStatus(newStatus);
                        Swal.fire({
                            title: "Sucesso!",
                            text: "Status do ticket alterado com sucesso!",
                            icon: 'success',
                            confirmButtonText: 'OK',
                            backdrop: 'rgba(0,0,0,0.7)',
                            timer: 2500, // 2.5 segundos
                            timerProgressBar: true,
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            },
                            customClass: {
                                popup: 'my-popup-class',
                                title: 'my-title-class',
                                confirmButton: 'my-confirm-button-class',
                                timerProgressBar: 'my-progress-bar-class'
                            }
                        }).then(() => {
                            window.location.reload();
                        });
                    }
                } else if (newStatus === '3') {
                    axios.put(`http://localhost:5555/tickets/alterarStatus`, { ticketID: selectedTicket?.ticketsID, status: newStatus, tecnicoID: user?.usuarioID });
                    if (selectedTicket) {
                        selectedTicket.status = newStatus;
                        setCurrentStatus(newStatus);
                        Swal.fire({
                            title: "Sucesso!",
                            text: "Status do ticket alterado com sucesso!",
                            icon: 'success',
                            confirmButtonText: 'OK',
                            backdrop: 'rgba(0,0,0,0.7)',
                            timer: 2500, // 2.5 segundos
                            timerProgressBar: true,
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            },
                            customClass: {
                                popup: 'my-popup-class',
                                title: 'my-title-class',
                                confirmButton: 'my-confirm-button-class',
                                timerProgressBar: 'my-progress-bar-class'
                            }
                        }).then(() => {
                            window.location.reload();
                        });
                    }
                } else {
                    warning('Status inválido!');
                };
            };
        } catch (error) {
            console.error("Erro ao atualizar status do ticket:", error);
            erro('Erro ao atualizar status do ticket!');
        };
    };

    if (!selectedTicket) {
        return null;
    }

    const isTicketFinalizado = currentStatus === '4';
    if (isTicketFinalizado) {
        return (
            <div className="modalVisualizar">
            <div className='btnVisualizar'>
               
                <div>
                    <span className="material-symbols-outlined">bomb</span>
                </div>
                <div>
                    <p>Data do estouro SLA</p>
                    <p>{formatDataSlaTickets}</p>
                </div>
            </div>

            <div className='infoContainer'>
                <div className="infoVisualizarTicket">
                    <h2>Título: {selectedTicket.titulo}</h2>
                    <div className="infoPair">
                        <span className="boldText">Data de abertura:</span>
                        <p>{new Date(selectedTicket.dataAbertura).toLocaleDateString('pt-BR')}</p>
                    </div>
                    <div className="infoPair">
                        <span className="boldText">Sala: </span>
                        <p>{selectedTicket.sala.numeroSala}</p>
                    </div>
                    <div className="infoPair">
                        <span className="boldText">Categoria: </span>
                        <p>{selectedTicket.categoria.categoria}</p>
                    </div>
                    <div className="infoPair">
                        <span className="boldText">Equipamento: </span>
                        <p>{selectedTicket.equipamentos.equipamento}</p>
                    </div>
                    <div className="infoPair">
                        <span className="boldText">Descrição: </span>
                        <p>{selectedTicket.descricao}</p>
                    </div>
                    <div className="infoPair">
                        <span className="boldText">Técnico: </span>
                        <p>{selectedTicket.tecnicoFinal}</p>
                    </div>
                </div>
               <div className='containerTicketChatTemplate'>

              
                <div className='chatClienteFim'>
                    <ChatTecnico selectedTicket={selectedTicket} />
                    
                </div>  
                <div className='templateFim'>
                    <h3>Mensagem finalização:</h3>
                <p>{selectedTicket.template}</p>

                </div>
                </div>
                </div>
            </div>
        );
    }
  



    const isSlaExpired = selectedTicket?.dataSla
        ? new Date(selectedTicket.dataSla) < new Date()
        : false;

    console.log('Data SLA:', selectedTicket?.dataSla);
    console.log('Data Atual:', new Date());
    console.log('isSlaExpired:', isSlaExpired);

    let className = '';
    if (isSlaExpired === false) {
      className = 'sla-active'; // Se o SLA não estiver expirado, classe verde
    } else {
      className = 'sla-expired'; // Se o SLA estiver expirado, classe vermelha
    }

    return (
        <div className="modalVisualizar">
            <div className='btnVisualizar'>
                <div>
                    <button id='btnEscalar' className="btnHeader" onClick={handleOpenModal}>
                        <span className="material-symbols-outlined">sync_alt</span>
                    </button>
                    <span id='btnAtendendo' className="material-symbols-outlined" onClick={() => handleUpdateStatus('2')}>play_circle</span>
                    <span id='btnPendente' className="material-symbols-outlined" onClick={() => handleUpdateStatus('3')}>pause_circle</span>
                    <span id='btnFinalizar' className="material-symbols-outlined" onClick={() => { handleOpenModalFinalizar(); }}>check_circle</span>

                    <span className="  statusTicket ">Status : {currentStatus === '1' ? 'A fazer' : currentStatus === '2' ? 'Atendendo' : currentStatus === '3' ? 'Pendente' : currentStatus === '4' ? 'Finalizado' : ''}</span>
                </div>
                <div className='slaInfo'>

               
                <div>
                <span className={`material-symbols-outlined ${className}`}>bomb</span>

                </div>
                <div className={`${className}`}>
                    <p>Data do estouro SLA</p>
                    <p>{formatDataSlaTickets}</p>
                </div>
            </div> 
            </div>

            <div className='infoContainer'>
                <div className="infoVisualizarTicket">
                    <h2>Título: {selectedTicket.titulo}</h2>
                    <div className="infoPair">
                        <span className="boldText">Data de abertura:</span>
                        <p>{new Date(selectedTicket.dataAbertura).toLocaleDateString('pt-BR')}</p>
                    </div>
                    <div className="infoPair">
                        <span className="boldText">Sala: </span>
                        <p>{selectedTicket.sala.numeroSala}</p>
                    </div>
                    <div className="infoPair">
                        <span className="boldText">Categoria: </span>
                        <p>{selectedTicket.categoria.categoria}</p>
                    </div>
                    <div className="infoPair">
                        <span className="boldText">Equipamento: </span>
                        <p>{selectedTicket.equipamentos.equipamento}</p>
                    </div>
                    <div className="infoPair">
                        <span className="boldText">Descrição: </span>
                        <p>{selectedTicket.descricao}</p>
                    </div>
                    <div className="infoPair">
                        <span className="boldText">Tecnico: </span>
                        { selectedTicket.tecnico === null ? (
                            <p>Não atribuído</p>
                        ) : (
                            <p>{selectedTicket.tecnico?.nome}</p>
                        )}
                    </div>
                </div>
                <div className='chatCliente'>
                    <ChatTecnico selectedTicket={selectedTicket} />
                </div>
            </div>

            {modalOpen && selectedTicket && (
                <div className="modal">
                    <div className="modalContent">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <EscalamentoTicket selectedTicket={selectedTicket} />
                    </div>
                </div>
            )}

            {modalOpenFinalizar && selectedTicket && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="closeBase" onClick={handleCloseModalFinalizar}>&times;</span>
                        <FinalizarTicket selectedTicket={selectedTicket} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VisualizarTicketTecnico;