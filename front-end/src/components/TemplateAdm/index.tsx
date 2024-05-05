import axios from 'axios';
import { useEffect, useState } from 'react';
import IMensagens from '../../types/IMensagens';
import ICategoria from '../../types/ICategoria';
import { erro, Toast, warning } from '../Swal/swal';
import './templateAdm.css';

const TemplateADM = () => {
    const [templateADM, setTemplateADM] = useState<IMensagens[]>([]);
    const [titulo, setTitulo] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [categoria, setCategoria] = useState<number>(0);

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
                const categoriaResponse = await axios.get('http://localhost:5555/categorias/listar');
                setCategorias(categoriaResponse.data);
                setTemplateADM(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSalas();
    }, []);

    const handleDeleteUser = async (mensagemID: number) => {
        try {
            await axios.delete(`http://localhost:5555/mensagens/excluir/${mensagemID}`);
            setTemplateADM(templateADM.filter((template) => template.mensagemID !== mensagemID));
            Toast.fire({
                icon: "success",
                title: "Excluído com sucesso!"
            });
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
                tipoMensagem: 'T',
                titulo: titulo,
                mensagem: mensagem,
                categoriaID: categoria
            });
            setTemplateADM([...templateADM, response.data]);
            setTitulo('');
            setMensagem('');
            setCategoria(0);
            Toast.fire({
                icon: "success",
                title: "Criado com sucesso!"
            });
        } catch (error) {
            console.error(error);
            erro('Erro ao criar mensagem!');
        }
    };

    return (
        <div className="adminContainer">
            <form onSubmit={handleAddUser} method='post' className="rowInformacoes">
                <div className="containerTemplate">
                    <div className='formCategoria'>
                        <select value={categoria} onChange={(e) => setCategoria(Number(e.target.value))} className="selectCategoria">
                            <option value={0}>Selecione uma categoria</option>
                            {categorias.map((categoria, index) => (
                                <option key={index} value={categoria.categoriaID}>{categoria.categoria}</option>
                            ))}
                        </select>
                    </div>
                    <div className='formCategoria'>
                        <input value={titulo} onChange={handleTituloChange} type="text" className="inputCategoria" placeholder="Adicionar Título" />
                    </div>
                    <div className='formCategoria'>
                        <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} className="inputCategoria" placeholder="Adicionar Mensagem" rows={2}></textarea>
                    </div>
                </div>
                <button type='submit' className='btnAdd'><span className="material-symbols-outlined">Add</span></button>

        </form>
    

        {
        templateADM.map((template, index) => (
            <div className="rowInformacoes" key={template.mensagemID}>
                <p>{template.titulo}</p>
                <p>{template.mensagem}</p>
                <button className="excluir" onClick={() => handleDeleteUser(template.mensagemID)}>
                    <span className="material-symbols-outlined">delete</span>
                </button>
            </div>
        ))}
     </div>

    );
};

export default TemplateADM;
