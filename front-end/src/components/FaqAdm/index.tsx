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
            <div className="container">
                {error && <div className="error">{error}</div>}
                {faqAdm.map((faq) => (
                    <div className="faqPost" key={faq.mensagemID}>
                        <div>
                            <p>{faq.titulo}</p>
                            <p>{faq.mensagem}</p>
                        </div>
                        <button className="excluir" onClick={() => handleDeleteUser(faq.mensagemID)}>
                            <span className="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                ))}
                <div className="numeroFaq">
                    <form onSubmit={handleAddUser} method='post'>
                        <select value={categoriaSelecionada} onChange={(e) => setCategoriaSelecionada(Number(e.target.value))} className="inputSala1">
                            <option value={0}>Selecione uma categoria</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.categoriaID} value={categoria.categoriaID}>{categoria.categoria}</option>
                            ))}
                        </select>
                        <div className="inputs">
                            <input value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text" className="inputFaq" placeholder="Adicionar Título"/>
                            <button type='submit' className='add'><img src={add} alt="add" /></button>
                        </div>
                        <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} className="inputFaq" placeholder="Adicionar Mensagem" rows={2}></textarea>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FaqAdm;
