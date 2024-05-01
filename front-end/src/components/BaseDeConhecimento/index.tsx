import './BaseDeConhecimento.css';
import add from '../../assets/img/add.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import IMensagens from '../../types/IMensagens';
import ICategoria from '../../types/ICategoria';
import { erro, Toast, warning } from '../Swal/swal';

const BaseDeConhecimento = () => {
    const [baseDeConhecimento, setBaseDeConhecimento] = useState<IMensagens[]>([]);
    const [titulo, setTitulo] = useState('');
    const [mensagem] = useState(null);
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [categoria, setCategoria] = useState(0);

    const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitulo(event.target.value);
    };

    useEffect(() => {
        const fetchSalas = async () => {
          try {
            const response = await axios.get('http://localhost:5555/mensagens/visualizar', {
                params: {
                    tipoMensagem: 'B'
                }
            });
            const categoria = await axios.get('http://localhost:5555/categorias/listar');
            setCategorias(categoria.data);
            setBaseDeConhecimento(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchSalas();
      }, []);

    const handleDeleteUser = (categoriaID: number) => {
        try {
            const response = axios.delete(`http://localhost:5555/mensagens/excluir/${categoriaID}`)
        setBaseDeConhecimento(baseDeConhecimento.filter((base) => base.mensagemID !== categoriaID));
        Toast.fire({
        icon: "success",
        title: "Excluido com sucesso!"
        })

        } catch (error) {
            console.error(error);
            erro('Erro ao excluir!');
        }
    };
    const handleAddUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!titulo || !categoria) {
            warning('Preencha todos os campos');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5555/mensagens/criar', {
                tipoMensagem: 'B',
                titulo: titulo,
                mensagem: mensagem,
                categoriaID: categoria
            });
        setBaseDeConhecimento([...baseDeConhecimento, response.data]);
        Toast.fire({
        icon: "success",
        title: "Criado com sucesso!"
        })

        } catch (error) {
            console.error(error);
            erro('Error!');
        }
    };
    return (
        <div className="adminContainer">
            <div className="titulo">
            </div>

            <div className="container">
                {baseDeConhecimento.map((base, index) => (
                    <div className="numeroSala" key={base.mensagemID}>
                            <p>{base.titulo}</p>
                        <button className="excluir" onClick={() => handleDeleteUser(base.mensagemID)}>
                            <span className="material-symbols-outlined">
                            delete
                            </span>
                        </button>
                    </div>
                ))}
                <div className="numeroSala">
                    <form onSubmit={handleAddUser} method='post'>
                        <input onChange={handleTituloChange} type="text" className="inputSala" placeholder="Adicionar Titulo"/>
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

export default BaseDeConhecimento;
