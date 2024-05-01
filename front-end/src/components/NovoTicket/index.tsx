import axios from 'axios';
import './novoticket.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { erro, success, warning } from '../Swal/swal';
 
export const NovoTicket = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [categoria, setCategoria] = useState('');
    const [tipoProblema, setTipoProblema] = useState('');
    const [equipamento, setEquipamento] = useState('');
    const [sala, setSala] = useState('');
    const [assunto, setAssunto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [assuntoError, setAssuntoError] = useState('');
    const [descricaoError, setDescricaoError] = useState('');
    const [opcaoError, setOpcaoError] = useState('');
 
    const navigate = useNavigate();
 
    const handleCategoria = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategoria = e.target.value;
 
        setCategoria(newCategoria);
    };
 
    const handleTipoProblema = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newTipoProblema = e.target.value;
 
        setTipoProblema(newTipoProblema);
    };
 
    const handleEquipamento = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newEquipamento = e.target.value;
 
        setEquipamento(newEquipamento);
    };
 
    const handleSala = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSala = e.target.value;
 
        setSala(newSala);
    };
 
    const handleAssunto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAssunto = e.target.value;
 
        if (!validateAssunto(newAssunto) && newAssunto.length > 255) {
            setAssuntoError('Formato errado ou número de caracteres inválido!');
            setAssunto('');
            setIsValid(false);
        } else {
            setAssunto(newAssunto);
            setIsValid(true);
            setAssuntoError('');
        };
    };
 
    const handleDescricao = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newDescricao = e.target.value;
 
        if (!validateDescricao(newDescricao) && newDescricao.length > 255) {
            setDescricaoError('Formato errado ou número de caracteres inválido!')
            setDescricao('');
            setIsValid(false);
        } else {
            setDescricao(newDescricao);
            setIsValid(true);
            setDescricaoError('');
        };
    };
 
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
 
    const validateAssunto = (assunto: string): boolean => {
        const assuntoRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/i;
        return assuntoRegex.test(assunto);
    };
 
    const validateDescricao = (descricao: string): boolean => {
        const descricaoRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/i;
        return descricaoRegex.test(descricao);
    };
 
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
 
        let formIsValid = true;
 
        if (assunto === '' || !validateAssunto(assunto)) {
            setAssuntoError('Preencha o campo assunto!');
            formIsValid = false
        } else {
            setAssuntoError('');
        };
 
        if (descricao === '' || !validateDescricao(descricao)) {
            setDescricaoError('Preencha o campo descrição!');
            formIsValid = false
        } else {
            setDescricao('');
        };
 
        if (categoria === '') {
            setOpcaoError('Por favor! Selecione todas as opções do seu problema.');
            formIsValid = false
        } else {
            setOpcaoError('');
        };
 
        if (tipoProblema === '') {
            setOpcaoError('Por favor! Selecione todas as opções do seu problema.');
            formIsValid = false
        } else {
            setOpcaoError('');
        };
 
        if (equipamento === '') {
            setOpcaoError('Por favor! Selecione todas as opções do seu problema.');
            formIsValid = false
        } else {
            setOpcaoError('');
        };
 
        if (sala === '') {
            setOpcaoError('Por favor! Selecione todas as opções do seu problema.');
            formIsValid = false
        } else {
            setOpcaoError('');
        };
 
        if (formIsValid && isValid) {
            try {
                const response = await axios.post('http://localhost:5555/tickets/criar', {
                    'categoria': categoria,
                    'tipoProblema': tipoProblema,
                    'equipamento': equipamento,
                    'sala': sala,
                    'assunto': assunto,
                    'descricao': descricao
                });
 
                if (response.data === 'Categoria, equipamento, sala ou usuário inexistente') {
                    setCategoria('');
                    setTipoProblema('');
                    setEquipamento('');
                    setSala('');
                    setAssunto('');
                    setDescricao('');
                    warning('Categoria, equipamento, sala ou usuário inexistente');
 
                } else if (response.data === 'Erro na criação do ticket') {
                    setCategoria('');
                    setTipoProblema('');
                    setEquipamento('');
                    setSala('');
                    setAssunto('');
                    setDescricao('');
                    erro('Erro na criação do ticket');
                } else {
                    success('Ticket criado com sucesso!');
                    navigate('/clientes');
                };
            } catch (error) {
                console.log(error);
                erro('Erro no envio de dados!');
            };
        } else {
            warning('Corrija os campos!');
        };
    };
 
    return (
        <div className="modalTicket">
            <h1>Novo Ticket</h1>
            <form onSubmit={handleSubmit}>
                <div className='filterTickets'>
                    <select onChange={handleCategoria} value={categoria} className="selectCategoria">
                        <option value="abertos">Categoria</option>
                        <option value="emAtendimento">Rede</option>
                        <option value="pendentes">Hardware</option>
                        <option value="finalizados">Software</option>
                    <div>{opcaoError}</div>
                    </select>
                    <select onChange={handleTipoProblema} value={tipoProblema} className="selectCategoria">
                        <option value="abertos">Tipo de Problema</option>
                        <option value="emAtendimento">Monitor não liga</option>
                        <option value="pendentes">Desktop sem rede</option>
                        <option value="finalizados">Mouse mau contato</option>
                    <div>{opcaoError}</div>
                    </select>
                    <select onChange={handleEquipamento} value={equipamento} className="selectCategoria">
                        <option value="abertos">Equipamento</option>
                        <option value="emAtendimento">Monitor</option>
                        <option value="pendentes">Desktop</option>
                        <option value="finalizados">Mouse</option>
                    <div>{opcaoError}</div>
                    </select>
                    <select onChange={handleSala} value={sala} className="selectCategoria">
                        <option value="abertos">Sala</option>
                        <option value="emAtendimento">408</option>
                        <option value="pendentes">406</option>
                        <option value="finalizados">404</option>
                    <div>{opcaoError}</div>
                    </select>
                    <div className="formInputAssunto">
                        <input value={assunto} onChange={handleAssunto} className='inputAssunto' type="text" placeholder="Assunto do Ticket" />
                        <div>{assuntoError}</div>
                    </div>
                    <div className="formInputAssunto">
                        <textarea value={descricao} onChange={handleDescricao} className='inputAssunto' placeholder="Descrição do Ticket"></textarea>
                        <div>{descricaoError}</div>
                    </div>
                </div>
 
                <div className="containerTicket">
                    <div className="formInputImagem">
                        <label htmlFor="imageUpload" className="btnUploadImage">Selecionar Imagem</label>
                        <input id="imageUpload" type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                   
                    </div>
                    <div className="imagePreview">
                        {selectedImage && (
                            <img src={URL.createObjectURL(selectedImage)} alt="Preview" />
                        )}
                        {selectedImage && (
                            <button className="btnTicket" onClick={handleCancelUpload}>Cancelar</button>
                        )}
                    </div>
                <button type='submit' value='Cadastrar' className="btnTicket">Enviar Ticket</button>
                </div>
            </form>
 
 
        </div>
    );
};