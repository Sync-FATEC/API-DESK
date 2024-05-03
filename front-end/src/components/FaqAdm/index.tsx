import './faqAdm.css';
import add from '../../assets/img/add.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import IMensagens from '../../types/IMensagens';
import ICategoria from '../../types/ICategoria';
import { erro, Toast, warning } from '../Swal/swal';

const FaqAdm = () => {
    const [faqAdm, setFaqAdm] = useState<IMensagens[]>([]);
    const [titulo, setTitulo] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<number>(0);
    const [error, setError] = useState<string>('');
    const [categoriaFiltro, setCategoriaFiltro] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseFaqs = await axios.get('http://localhost:5555/mensagens/visualizar', {
                    params: {
                        tipoMensagem: 'F'
                    }
                });
                setFaqAdm(responseFaqs.data);

                const responseCategorias = await axios.get('http://localhost:5555/categorias/listar');
                setCategorias(responseCategorias.data);
            } catch (error) {
                setError('Erro ao buscar os dados. Por favor, tente novamente mais tarde.');
            }
        };

        fetchData();
    }, []);

    const handleDeleteUser = async (mensagemID: number) => {
        try {
            await axios.delete(`http://localhost:5555/mensagens/excluir/${mensagemID}`);
            setFaqAdm(faqAdm.filter((faq) => faq.mensagemID !== mensagemID));
            Toast.fire({
                icon: "success",
                title: "Excluido com sucesso!"
            })

        } catch (error) {
            erro('Erro ao excluir a mensagem.');
        }
    };

    const handleAddUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!titulo || !mensagem || categoriaSelecionada === 0) {
            warning('Preencha todos os campos.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5555/mensagens/criar', {
                tipoMensagem: 'F',
                titulo: titulo,
                mensagem: mensagem,
                categoriaID: categoriaSelecionada
            });
            setFaqAdm([...faqAdm, response.data]);
            Toast.fire({
                icon: "success",
                title: "Criado com sucesso!"
            })
            setTitulo('');
            setMensagem('');
            setCategoriaSelecionada(0);
        } catch (error) {
            erro('Erro ao adicionar a mensagem.');
        }
    };

    return (
        <div className="adminContainer">
            <form onSubmit={handleAddUser} method='post' className="rowInformacoes">
                <div className="containerFaq">
                    <div className='formCategoria'>
                        <select value={categoriaSelecionada} onChange={(e) => setCategoriaSelecionada(Number(e.target.value))} className="selectCategoria">
                            <option value={0}>Selecione uma categoria</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.categoriaID} value={categoria.categoriaID}>{categoria.categoria}</option>
                            ))}
                        </select>
                    </div>
                    <div className='formCategoria'>
                        <input value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text" className="inputCategoria" placeholder="Adicionar Título" />
                    </div>
                    <div className='formCategoria'>
                        <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} className="inputCategoria" placeholder="Adicionar Mensagem" rows={2}></textarea>
                    </div>
                </div>

                <button type='submit' className="btnAdd"><span className="material-symbols-outlined">Add</span></button>

            </form>

            <div className='containerFiltroFaq'>
            <select value={categoriaFiltro} onChange={(e) => setCategoriaFiltro(Number(e.target.value))} className="filtroFaq">
                <option value={0}>Filtro categorias</option>
                {categorias.map((categoria) => (
                    <option key={categoria.categoriaID} value={categoria.categoriaID}>{categoria.categoria}</option>
                ))}
            </select>
            
            </div>


            {error && <div className="error">{error}</div>}
            {
                faqAdm.map((faq) => (
                    <div className="rowInformacoes" key={faq.mensagemID}>
                        <p>{faq.titulo}</p>
                        <p>{faq.mensagem}</p>
                        <button className="excluir" onClick={() => handleDeleteUser(faq.mensagemID)}>
                            <span className="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                ))}
        </div >
    );
};

export default FaqAdm;
