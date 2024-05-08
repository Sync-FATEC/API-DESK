import React, { useEffect, useRef } from 'react';


export const ChatTecnico = () => {

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
            <h2 className='tituloChat'>Chat com Cliente</h2>
            <div className='containerMensagemChat'>
                <p className='nomeUsuarioChat'>Cliente:</p>
                <p className='mensagemChat'>ola técnico</p>

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
