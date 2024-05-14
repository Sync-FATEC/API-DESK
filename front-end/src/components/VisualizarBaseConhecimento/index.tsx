import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ITickets from '../../types/ITickets';
import IMensagens from '../../types/IMensagens';
import ICategoria from '../../types/ICategoria';
import './visualizarBaseConhecimento.css'
interface Props {
    selectedTicket: ITickets | null;
    onClose: () => void;
}

const VisualizarBaseConhecimento: React.FC<Props> = ({ selectedTicket, onClose }) => {
    const [baseDeConhecimento, setBaseDeConhecimento] = useState<IMensagens[]>([]);
    const [titulo, setTitulo] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [categoria, setCategoria] = useState(0);
    const [categoriaFiltro, setCategoriaFiltro] = useState(0);

    const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitulo(event.target.value);
    };

    const filteredBaseDeConhecimento = baseDeConhecimento.filter(base =>
        !selectedTicket || base.categoria.categoriaID === selectedTicket.categoria.categoriaID
    );



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
    return (
        <div className="modalBaseConhecimento">
            <h1>Base de conhecimento / Soluções </h1>

            <div className='containerBaseConhecimento'>

            {filteredBaseDeConhecimento.map((base, index) => (
                    <div className="infoBase" key={base.mensagemID}>
                        <div className="tituloBase"><p>{base.titulo}</p></div>
                        <div className="descricaoBase"> <p>{base.mensagem}</p></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VisualizarBaseConhecimento;