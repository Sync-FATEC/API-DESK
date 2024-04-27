import './novoticket.css';
import React, { useState } from 'react';

export const NovoTicket = () => {

    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        const file = input.files?.[0];
        
        if (file) {
            console.log('Arquivo selecionado:', file.name);
            setSelectedImage(file);
        }
    };

    const handleCancelUpload = () => {
        setSelectedImage(null);
        const input = document.getElementById('image-upload') as HTMLInputElement;
        if (input) {
            input.value = ''; 
        }
    };

    return (
        <div className="modal-ticket">
            
            <h1>Novo Ticket</h1>
            <hr />
            <div className='Filter-tickets'>
                
                <select className="selectCategoria">
                    <option value="abertos">Categoria</option>
                    <option value="emAtendimento">Em Atendimento</option>
                    <option value="pendentes">Pendentes</option>
                    <option value="finalizados">Finalizados</option>
                </select>
                <select className="selectCategoria">
                    <option value="abertos">Tipo de problema</option>
                    <option value="emAtendimento">Em Atendimento</option>
                    <option value="pendentes">Pendentes</option>
                    <option value="finalizados">Finalizados</option>
                </select>
                <select className="selectCategoria">
                    <option value="abertos">Equipamento</option>
                    <option value="emAtendimento">Em Atendimento</option>
                    <option value="pendentes">Pendentes</option>
                    <option value="finalizados">Finalizados</option>
                </select>
                <select className="selectCategoria">
                    <option value="abertos">Sala</option>
                    <option value="emAtendimento">Em Atendimento</option>
                    <option value="pendentes">Pendentes</option>
                    <option value="finalizados">Finalizados</option>
                </select>
            </div>

            <div className="formInput-assunto">
              <input className='assunto' type="text" placeholder="Assunto do ticket"/>
             
            </div>
            <div className="formInput-assunto">
              <input className='assunto' type="text" placeholder="Descrição do ticket"/>
            </div>
            <div className="formInput-imagem">
                <input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} />
                {selectedImage && (
                    
                <button onClick={handleCancelUpload}>X</button>
                   
                )}
            </div>
            <button>Enviar Ticket</button>
            </div>
       
    );
};