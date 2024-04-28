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
        const input = document.getElementById('imageUpload') as HTMLInputElement;
        if (input) {
            input.value = '';
        }
    };

    return (
        <div className="modalTicket">
            <h1>Novo Ticket</h1>
            <div className='filterTickets'>
                <select className="selectCategoria">
                    <option value="abertos">Categoria</option>
                    <option value="emAtendimento">Em Atendimento</option>
                    <option value="pendentes">Pendentes</option>
                    <option value="finalizados">Finalizados</option>
                </select>
                <select className="selectCategoria">
                    <option value="abertos">Tipo de Problema</option>
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
                <div className="formInputAssunto">
                    <input className='inputAssunto' type="text" placeholder="Assunto do Ticket" />
                </div>
                <div className="formInputAssunto">
                    <textarea className='inputAssunto' placeholder="Descrição do Ticket"></textarea>
                </div>
            </div>

            <div className="containerTicket">
                <div className="formInputImagem">
                    <label htmlFor="imageUpload" className="btnUploadImage">Selecionar Imagem</label>
                    <input id="imageUpload" type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                    <button className="btnTicket">Enviar Ticket</button>
                </div>
                <div className="imagePreview">
                    {selectedImage && (
                        <img src={URL.createObjectURL(selectedImage)} alt="Preview" />
                    )}
                    {selectedImage && (
                        <button className="btnTicket" onClick={handleCancelUpload}>Cancelar</button>
                    )}
                </div>
            </div>


        </div>
    );
};
