import React, { useContext, useState } from 'react';
import axios from 'axios';
import ITickets from '../../types/ITickets';
import './visualizarBaseConhecimento.css'
import { AuthContext } from '../../contexts/Auth/AuthContext';
import IMensagens from '../../types/IMensagens';


interface Props {
    selectedTicket: ITickets | null;
    onClose: () => void;
}

const VisualizarBaseConhecimento: React.FC<Props> = ({ selectedTicket, onClose }) => {
    const [baseDeConhecimento, setBaseDeConhecimento] = useState<IMensagens[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const { user } = useContext(AuthContext);
    
    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    
    return (
        <div className="modalBaseConhecimento">
            <h1>Base de conhecimento / Soluções </h1>
            <div className="basebox">
                <div className="tituloBase"> Titulo da base de conhecimento aqui</div>
                <div className="descricaoBase">Descrição da base aqui</div>
            </div>

            <div className="basebox">
                <div className="tituloBase"> Titulo da base de conhecimento aqui</div>
                <div className="descricaoBase">Descrição da base aqui</div>
            </div>

            <div className="basebox">
                <div className="tituloBase"> Titulo da base de conhecimento aqui</div>
                <div className="descricaoBase">Descrição da base aqui</div>
            </div>

            <div className="basebox">
                <div className="tituloBase">Titulo da base de conhecimento aqui</div>
                <div className="descricaoBase">Descrição da base aqui</div>
            </div>

            <div className="basebox">
                <div className="tituloBase"> Titulo da base de conhecimento aqui</div>
                <div className="descricaoBase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, debitis. Quam nesciunt fuga id dolores, nihil magnam corporis voluptatum beatae voluptatem architecto aliquid aperiam autem rerum reprehenderit perferendis tempore at.</div>
            </div>

            <div className="basebox">
                <div className="tituloBase"> Titulo da base de conhecimento aqui</div>
                <div className="descricaoBase">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci saepe odio, eligendi dolore est minima blanditiis voluptas inventore voluptates ut quo debitis, dignissimos sunt placeat qui illo nihil earum delectus!</div>
            </div>

            <div className="basebox">
                <div className="tituloBase"> Titulo da base de conhecimento aqui</div>
                <div className="descricaoBase">Lorem ipsum dolor sit lamet consectetur adipisicing elit. Officiis corporis voluptatum nisi adipisci similique animi ratione veritatis quo deleniti atque, asperiores ipsam ut consectetur perferendis illo placeat sit? Doloribus, possimus.</div>
            </div>
        </div>
    );
};

export default VisualizarBaseConhecimento;