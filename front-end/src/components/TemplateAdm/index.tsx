
import add from '../../assets/img/add.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import IMensagens from '../../types/IMensagens';
import ICategoria from '../../types/ICategoria';
import { erro, Toast, warning } from '../Swal/swal';
import './templateAdm.css';


const TemplateADM = () => {
    const [TemplateADM, setTemplateADM] = useState<IMensagens[]>([]);
    const [titulo, setTitulo] = useState('');
    const [mensagem, setMensagem] = useState('');
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
                    tipoMensagem: 'T'
                }
            });
            const categoria = await axios.get('http://localhost:5555/categorias/listar');
            setCategorias(categoria.data);
            setTemplateADM(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchSalas();
      }, []);

    const handleDeleteUser = async (categoriaID: number) => {
        try {
            const response = axios.delete(`http://localhost:5555/mensagens/excluir/${categoriaID}`)
            
        setTemplateADM(TemplateADM.filter((template) => template.mensagemID !== categoriaID));
        Toast.fire({
        icon: "success",
        title: "Excluido com sucesso!"
        })

        } catch (error) {
            console.error(error);
            erro('Error ao excluir!');
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
                tipoMensagem: 'T',
                titulo: titulo,
                mensagem: mensagem,
                categoriaID: categoria
            });
        setTemplateADM([...TemplateADM, response.data]);
        setTitulo('');
        setMensagem('');
        setCategoria(0);
        Toast.fire({
        icon: "success",
        title: "Criado com sucesso!"
        })

        } catch (error) {
            console.error(error);
            erro('Error!')
        }
    };
    return (
        <div className="adminContainer">
            <div className="container">
                <div className="containerTemplate">
                    <form onSubmit={handleAddUser} method='post'>
                        <select value={categoria} onChange={(e) => setCategoria(Number(e.target.value))} className="inputSala1">
                            <option value={0}>Selecione uma categoria</option>
                            {categorias.map((categoria, index) => (
                                <option key={index} value={categoria.categoriaID}>{categoria.categoria}</option>
                            ))}
                        </select>
                        <div className="inputs">
                            <input value={titulo} onChange={handleTituloChange} type="text" className="inputFaq" placeholder="Adicionar Titulo"/>
                            <button type='submit' className='add'><img src={add} alt="add" /></button>
                        </div>
                        <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} className="inputFaq" placeholder="Adicionar Mensagem" rows={2}></textarea>    
                    </form>
                </div>
                {TemplateADM.map((template, index) => (
                    <div className="faqPost" key={template.mensagemID}>
                        <div>
                            <p>{template.titulo}</p>
                            <p>{template.mensagem}</p>
                        </div>
                        <button className="excluir" onClick={() => handleDeleteUser(template.mensagemID)}>
                            <span className="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default TemplateADM;
