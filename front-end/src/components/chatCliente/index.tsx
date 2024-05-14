import './chat.css'
import React, { useContext, useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import ITickets from '../../types/ITickets';
import axios from 'axios';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { IAnotacao } from '../../types/IAnotacoes';

interface Props {
    selectedTicket: ITickets | null;
}

export const ChatCliente: React.FC<Props> = ({ selectedTicket }) => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const socketRef = useRef<Socket | null>(null);
    const [messages, setMessages] = useState<{
        nome: string | undefined;message: string, tipoUsuario: string}[]>([]);
    const [anotacoes, setAnotacoes] = useState<IAnotacao[]>([]);
    const [input, setInput] = useState<string>('');
    const { user } = useContext(AuthContext);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const fetchAnotacoes = async () => {
            try {
                const response = await axios.get(`http://localhost:5555/anotacoes/listar/` + selectedTicket?.ticketsID);
                setAnotacoes(response.data);
                
            } catch (error) {
                console.error(error);
            }
            scrollToBottom();
        };

        fetchAnotacoes();
        interface IMessage {
            message: string;
            nome: string;
            tipoUsuario: string;
        }
        socketRef.current = io('http://localhost:5555');
        socketRef.current.emit('joinRoom', selectedTicket?.ticketsID);
        socketRef.current.on('message', async (message: string, tipoUsuario: string, nome: string) => {
            const messages = new Object({message, tipoUsuario, nome}) as IMessage;
            
            setMessages((prevMessages) => [...prevMessages, messages]);
            scrollToBottom();
        });

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
        };
    }, []);

    const sendMessage = async (message: string) => {
        if (socketRef.current) {
            socketRef.current.emit('sendMessage', message, selectedTicket?.ticketsID, user?.tipoUsuario, user?.nome);
            
            setInput('');
        }
        const response = await axios.post('http://localhost:5555/anotacoes/criar', {
                    'anotacao': message,
                    'ticketsID': selectedTicket?.ticketsID,
                    'usuarioID': user?.usuarioID,
                });

    };
    
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInput(value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        if (!input) {
            event.preventDefault();
        } else {
        event.preventDefault();
        sendMessage(input);
    }
    };

    return (
        <>
            <h2 className='tituloChat'>Chat com Cliente</h2>
            <div className='containerMensagemChat'>
            {anotacoes.map((message, index) => (
                    <>
                        {message.usuario.tipoUsuario === 'U' ? (
                            <p key={index} className='mensagemChat' title={message.usuario.nome}>{message.anotacao}</p>
                        ) : (
                            <p key={index} className='mensagemChat2' title={message.usuario.nome}>{message.anotacao}</p>
                        )}
                    </>
                ))}
                {messages.map((message, index) => (
                    <>
                        {message.tipoUsuario === 'U' ? (
                            <p key={index} className='mensagemChat' title={message.nome}>{message.message}</p>
                        ) : (
                            <p key={index} className='mensagemChat2' title={message.nome}>{message.message}</p>
                        )}
                    </>
                ))}

                <div ref={messagesEndRef} />

            </div>
            { selectedTicket?.status === '4' ? null : (
                
            <form onSubmit={handleSubmit}>
                <div className='containerInputChat'>
                    <input value={input} onChange={handleInput} className='inputChat' type="text" placeholder='Digite uma mensagem' />
                    <button type='submit'>
                        <span className="material-symbols-outlined">
                            send
                        </span>
                    </button>
                </div>
            </form> )}
        </>
    );
};