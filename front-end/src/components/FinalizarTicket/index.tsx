import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import ITickets from '../../types/ITickets';
import IMensagens from '../../types/IMensagens';
import ICategoria from '../../types/ICategoria';
import { erro, warning } from '../Swal/swal';
import Swal from 'sweetalert2';
import './finalizarTicket.css';


interface Props {
    selectedTicket: ITickets | null;

}
const FinalizarTicket: React.FC<Props> = ({ selectedTicket }) => {
    const [templateADM, setTemplateADM] = useState<IMensagens[]>([]);
    const [titulo, setTitulo] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [categoria, setCategoria] = useState(0);
    const [categoriaFiltro, setCategoriaFiltro] = useState(0);

    const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitulo(event.target.value);
    };

    const filteredTemplateADM = templateADM.filter(base =>
        !selectedTicket || base.categoria.categoriaID === selectedTicket.categoria.categoriaID
    );


    const [currentStatus, setCurrentStatus] = useState(selectedTicket?.status || '');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchSalas = async () => {
            try {
                const response = await axios.get('http://localhost:5555/mensagens/visualizar', {
                    params: {
                        tipoMensagem: 'T'
                    }
                });
                const categoriaResponse = await axios.get('http://localhost:5555/categorias/listar');
                setCategorias(categoriaResponse.data);
                setTemplateADM(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSalas();
    }, []);
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

 

    const handleInsertTemplate = (mensagem: string) => {
        setMensagem(mensagem);
    };

    return (
        <div className="containerFinalizarTicket">
            <h1>Finalizar Ticket </h1>
            <div className='infoContainerFinalizar'>
                <div className='comentarioFinalizar'>
                    <h2>Comentário da finalização</h2>

                    <textarea
                        className='inputTemplateFinalizar'
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                    />
                </div>

                <div className='templatesFinalizar'>
                    <h2>Inserir Templates Finalização</h2>
                    <div className='inserirTemplate'>

                        {filteredTemplateADM.map((template, index) => (

                            <p
                                className='mensagemTemplate'
                                key={template.mensagemID}
                                onClick={() => handleInsertTemplate(template.mensagem)}
                            >
                                {template.mensagem}
                            </p>


                        ))} </div>
                <button className='buttonFinalizarTicket' onClick={() => { handleUpdateStatus('4')}}>Finalizar Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default FinalizarTicket;