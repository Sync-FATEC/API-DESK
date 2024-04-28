
import './faqAdm.css';
import add from '../../assets/img/add.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import IMensagens from '../../types/IMensagens';
import ICategoria from '../../types/ICategoria';

const FaqAdm = () => {
    const [faqAdm, setFaqAdm] = useState<IMensagens[]>([]);
    const [titulo, setTitulo] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [categoria, setCategoria] = useState(0);

    const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitulo(event.target.value);
    };

    const handleMensagemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                    <div className="numeroSala" key={faq.mensagemID}>
                            <p>{faq.titulo}</p>
                            <p>{faq.mensagem}</p>
                        <button className="excluir" onClick={() => handleDeleteUser(faq.mensagemID)}>
                            Excluir
                        </button>
                    </div>
                ))}
                <div className="numeroSala">
                    <form onSubmit={handleAddUser} method='post'>
                        <input onChange={handleTituloChange} type="text" className="inputSala" placeholder="Adicionar Titulo"/>
                        <input onChange={handleMensagemChange} type="text" className="inputSala" placeholder="Adicionar Mensagem"/>
                        <select onChange={(e) => setCategoria(Number(e.target.value))} className="inputSala">
                            <option value={0}>Selecione uma categoria</option>
                            {categorias.map((categoria, index) => (
                                <option key={index} value={categoria.categoriaID}>{categoria.categoria}</option>
                            ))}
                        </select>
                        <button type='submit'>Criar nova mensagem</button>
                    </form>
                <img src={add} alt="add" />
                </div>
                
            </div>
        </div>
    )};

export default FaqAdm;
