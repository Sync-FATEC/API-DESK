
import './faqAdm.css';
import add from '../../assets/img/add.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import IMensagens from '../../types/IMensagens';
import ICategoria from '../../types/ICategoria';
import React, { ChangeEvent } from 'react';

const FaqAdm = () => {
    const [faqAdm, setFaqAdm] = useState<IMensagens[]>([]);
    const [titulo, setTitulo] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [categoria, setCategoria] = useState(0);

    const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitulo(event.target.value);
    };

    const handleMensagemChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMensagem(event.target.value);
    };

    useEffect(() => {
        const fetchSalas = async () => {
          try {
            const response = await axios.get('http://localhost:5555/mensagens/visualizar', {
                params: {
                    tipoMensagem: 'F'
                }
            });
            const categoria = await axios.get('http://localhost:5555/categorias/listar');
            setCategorias(categoria.data);
            setFaqAdm(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchSalas();
      }, []);

    const handleDeleteUser = (categoriaID: number) => {
        try {
            const response = axios.delete('http://localhost:5555/mensagens/excluir', {
                params: {
                    categoriaID: categoriaID
                }
            });
        setFaqAdm(faqAdm.filter((faq) => faq.mensagemID !== categoriaID));
        } catch (error) {
            console.error(error);
        }
    };
    const handleAddUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!titulo || !mensagem || !categoria) {
            alert('Preencha todos os campos');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5555/mensagens/criar', {
                tipoMensagem: 'F',
                titulo: titulo,
                mensagem: mensagem,
                categoriaID: categoria
            });
        setFaqAdm([...faqAdm, response.data]);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="adminContainer">
            <div className="titulo">
            </div>

            <div className="container">
                {faqAdm.map((faq, index) => (
                    <div className="faqPost" key={faq.mensagemID}>
                        <div>
                            <p>{faq.titulo}</p>
                            <p>{faq.mensagem}</p>
                        </div>
                        <button className="excluir" onClick={() => handleDeleteUser(faq.mensagemID)}>
                            <span className="material-symbols-outlined">
                            delete
                            </span>
                        </button>
                    </div>
                ))}
<div className="numeroFaq">
    <form onSubmit={handleAddUser} method='post'>
        <select onChange={(e) => setCategoria(Number(e.target.value))} className="inputSala1">
            <option value={0}>Selecione uma categoria</option>
            {categorias.map((categoria, index) => (
                <option key={index} value={categoria.categoriaID}>{categoria.categoria}</option>
            ))}
        </select>
        <div className="inputs">
            <input onChange={handleTituloChange} type="text" className="inputFaq" placeholder="Adicionar Título"/>
            <button type='submit' className='add'><img src={add} alt="add" /></button>
        </div>
        <textarea onChange={handleMensagemChange} className="inputFaq" placeholder="Adicionar Mensagem" rows={2}></textarea>
    </form>
</div>

        

                
            </div>
        </div>
    )};

export default FaqAdm;
