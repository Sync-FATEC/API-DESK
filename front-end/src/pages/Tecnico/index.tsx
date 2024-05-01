import { Header } from '../../components/Header';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ITickets from '../../types/ITickets';
import { AuthContext } from '../../contexts/Auth/AuthContext';


export const Tecnicos = () => {
    const [tickets, setTickets] = useState<ITickets[]>([]);
    const user = useContext(AuthContext);

    useEffect(() => {
        const fetchSalas = async () => {
          try {            
            const response = await axios.get('http://localhost:5555/tickets/listar/' + user.user?.usuarioID);
            setTickets(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchSalas();
      }, [user.user]);
     
    return(
        <><Header />
                {tickets.map((tickets, index) => (
                    <div className="faq" key={index}>
                        <h1>{tickets.titulo}</h1>
                        <p>{tickets.descricao}</p>
                        <p>{tickets.status}</p>
                        <p>{tickets.categoria.categoria}</p>
                        <p>{tickets.equipamentos.equipamento}</p>
                        <p>{tickets.sala.numeroSala}</p>
                        <p>{tickets.usuario.nome}</p>
                        <div>{new Date(tickets.dataAbertura).toLocaleDateString('pt-BR')}</div>
                    </div>
                ))}
        </> 
    )
}