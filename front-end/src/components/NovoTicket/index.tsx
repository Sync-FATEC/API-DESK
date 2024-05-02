import axios from 'axios';
import './novoticket.css';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { erro, success, warning } from '../Swal/swal';
import ICategoria from '../../types/ICategoria';
import IEquipamentos from '../../types/IEquipamentos';
import ISalas from '../../types/ISalas';
import { AuthContext } from '../../contexts/Auth/AuthContext';
 
export const NovoTicket = () => {
    const [ titulo, setTitulo ] = useState('');
    const [ descricao, setDescricao ] = useState('');
    const [ categoriaID, setCategoriaID ] = useState('');
    const [ equipamentoID, setEquipamentoID ] = useState('');
    const [ numeroSala, setNumeroSala ] = useState('');
    const { user } = useContext(AuthContext); 
    const [isValid, setIsValid] = useState(true);
    const [assuntoError, setAssuntoError] = useState('');
    const [descricaoError, setDescricaoError] = useState('');
    const [opcaoError, setOpcaoError] = useState('');
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [equipamentos, setEquipamentos] = useState<IEquipamentos[]>([]);
    const [salas, setSalas] = useState<ISalas[]>([]);
    
    useEffect(() => {
        const fetchSalas = async () => {
          try {
            const categoria = await axios.get('http://localhost:5555/categorias/listar');
            setCategorias(categoria.data);
            const sala = await axios.get('http://localhost:5555/salas/visualizar');
            setSalas(sala.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchSalas();
      }, []);

    const navigate = useNavigate();
 
    const handleCategoria = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategoria = e.target.value;
 
        setCategoriaID(newCategoria);
    };
 
    const handleEquipamento = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newEquipamento = e.target.value;
 
        setEquipamentoID(newEquipamento);
    };
 
    const handleSala = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSala = e.target.value;
 
        setNumeroSala(newSala);
    };
 
    const handleAssunto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitulo = e.target.value;
 
        if (!validateAssunto(newTitulo) && newTitulo.length > 255) {
            setAssuntoError('Formato errado ou número de caracteres inválido!');
            setTitulo('');
            setIsValid(false);
        } else {
            setTitulo(newTitulo);
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

    const validateAssunto = (assunto: string): boolean => {
        const assuntoRegex = /^.*$/;
        return assuntoRegex.test(assunto);
    };
 
    const validateDescricao = (descricao: string): boolean => {
        const descricaoRegex = /^.*$/;
        return descricaoRegex.test(descricao);
    };
 
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
 
        let formIsValid = true;
 
        if (titulo === '' || !validateAssunto(titulo)) {
            setAssuntoError('Preencha o campo titulo!');
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
 
        if (categoriaID === '') {
            setOpcaoError('Por favor! Selecione todas as opções do seu problema.');
            formIsValid = false
        } else {
            setOpcaoError('');
        };
 
        if (equipamentoID === '') {
            setOpcaoError('Por favor! Selecione todas as opções do seu problema.');
            formIsValid = false
        } else {
            setOpcaoError('');
        };
 
        if (numeroSala === '') {
            setOpcaoError('Por favor! Selecione todas as opções do seu problema.');
            formIsValid = false
        } else {
            setOpcaoError('');
        };
 
        if (formIsValid && isValid) {
            try {
                console.log(titulo, descricao, categoriaID, equipamentoID, numeroSala, user?.usuarioID);
                
                const response = await axios.post('http://localhost:5555/tickets/criar', {
                    'titulo': titulo,
                    'descricao': descricao,
                    'status': '1',
                    'categoriaID': categoriaID,
                    'equipamentosID': equipamentoID,
                    'numeroSala': numeroSala,
                    'usuarioID': user?.usuarioID
                });
 
                if (response.data === 'Categoria, equipamento, sala ou usuário inexistente') {
                    setCategoriaID('');
                    setEquipamentoID('');
                    setNumeroSala('');
                    setTitulo('');
                    setDescricao('');
                    warning('Categoria, equipamento, sala ou usuário inexistente');
 
                } else if (response.data === 'Erro na criação do ticket') {
                    setCategoriaID('');
                    setEquipamentoID('');
                    setNumeroSala('');
                    setTitulo('');
                    setDescricao('');
                    erro('Erro na criação do ticket');
                } else {
                    setCategoriaID('');
                    setEquipamentoID('');
                    setNumeroSala('');
                    setTitulo('');
                    setDescricao('');
                    success('Ticket criado com sucesso!');
                    window.location.reload()
                };
            } catch (error) {
                console.log(error);
                erro('Erro no envio de dados!');
            };
        } else {
            warning('Corrija os campos!');
        };
    };
 
    useEffect(() => {
        const fetchData = async () => {
            if (numeroSala !== '' && categoriaID !== '') {
                const equip = await axios.get(`http://localhost:5555/equipamentos/listarCatSala/${numeroSala}/${categoriaID}`);
                
                if (equip.data.length === 0) {
                    setEquipamentos([]);
                    warning('Não existem equipamentos listados nessa sala e categoria!');
                    return;
                }
                setEquipamentos(equip.data);
            }
        };

        fetchData();
    }, [numeroSala, categoriaID]);

    return (
        <div className="modalTicket">
            <h1>Novo Ticket</h1>
            <form onSubmit={handleSubmit}>
                <div className='filterTickets'>
                    <select onChange={handleCategoria} value={categoriaID} className="selectCategoria">
                    <option value={undefined}>Categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.categoriaID} value={categoria.categoriaID}>{categoria.categoria}</option>
                        ))}
                    <div>{opcaoError}</div>
                    </select>
                    <select onChange={handleSala} value={numeroSala} className="selectCategoria">
                        <option value={undefined}>Sala</option>
                        {salas.map((sala) => (
                            <option key={sala.salaID} value={sala.numeroSala}>{sala.numeroSala} - {sala.identificacao}</option>
                        ))}
                    <div>{opcaoError}</div>
                    </select>
                    <select onChange={handleEquipamento} value={equipamentoID} className="selectCategoria">
                    <option value={undefined}>Equipamento</option>
                        {equipamentos.map((equipamento) => (
                            <option key={equipamento.equipamentosID} value={equipamento.equipamentosID}>{equipamento.equipamento}</option>
                        ))}
                
                    <div>{opcaoError}</div>
                    </select>
                    </div>
                    <div className="formInputAssunto">
                        <input value={titulo} onChange={handleAssunto} className='inputAssunto' type="text" placeholder="Titulo do Ticket" />
                        <div>{assuntoError}</div>
                    </div>
                    <div className="formInputAssunto">
                        <textarea value={descricao} onChange={handleDescricao} className='inputAssunto' placeholder="Descrição do Ticket"></textarea>
                        <div>{descricaoError}</div>
                    </div>
                

                <div className="containerTicket">
                <button type='submit' value='Cadastrar' className="btnTicket">Enviar Ticket</button>
                </div>
            </form>


        </div>
    );
};