import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ITickets from '../../types/ITickets';
import IMensagens from '../../types/IMensagens';
import ICategoria from '../../types/ICategoria';
import './finalizarTicket.css';


interface Props {
    selectedTicket: ITickets | null;

}
const FinalizarTicket: React.FC<Props> = ({ selectedTicket }) => {
    const [templateADM, setTemplateADM] = useState<IMensagens[]>([]);
    const [titulo, setTitulo] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [categoria, setCategoria] = useState(0);
    const [categoriaFiltro, setCategoriaFiltro] = useState(0);

    const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitulo(event.target.value);
    };

    const filteredTemplateADM = templateADM.filter(base =>
        !selectedTicket || base.categoria.categoriaID === selectedTicket.categoria.categoriaID
    );



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

    const handleInsertTemplate = (mensagem: string) => {
        setMensagem(mensagem);
    };

    return (
        <div className="containerFinalizarTicket">
            <h1>Finalizar Ticket </h1>
            <div className='infoContainerFinalizar'>
                <div className='comentarioFinalizar'>
                    <h2>Comentário da finalização</h2>

                    <textarea
                        className='inputTemplateFinalizar'
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                    />
                </div>

                <div className='templatesFinalizar'>
                    <h2>Inserir Templates Finalização</h2>
                    <div className='inserirTemplate'>

                        {filteredTemplateADM.map((template, index) => (

                            <p
                                className='mensagemTemplate'
                                key={template.mensagemID}
                                onClick={() => handleInsertTemplate(template.mensagem)}
                            >
                                {template.mensagem}
                            </p>


                        ))} </div>
                <button className='buttonFinalizarTicket'>Finalizar Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default FinalizarTicket;