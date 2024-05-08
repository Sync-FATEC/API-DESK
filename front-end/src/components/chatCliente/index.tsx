
import './chat.css';
import React, { useEffect, useRef } from 'react';


export const ChatCliente = () => {

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        // A propriedade scrollIntoView agora está disponível
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, []); // Dependênc

    return (
        <>
            <h2 className='tituloChat'>Chat com Técnico</h2>
            <div className='containerMensagemChat'>
                <p className='nomeUsuarioChat'>Técnico:</p>
                <p className='mensagemChat'>ola cliente</p>

                <div ref={messagesEndRef} />  

            </div>
            <div className='containerInputChat'>
                <input className='inputChat' type="text" placeholder='Digite uma mensagem' />
                <button type='submit'>
                    <span className="material-symbols-outlined">
                        send
                    </span>
                </button>

            </div>

        </>
    );
};
