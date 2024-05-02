import './visualizarticket.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ITickets from '../../types/ITickets';
import { AuthContext } from '../../contexts/Auth/AuthContext';


export const VisualizarTicket = () => {
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

  return (
    <div className="modalVisualizar">

      <div className='btnVisualizar'> 
      <div>

      <span className="material-symbols-outlined">
        sync_alt
      </span>
        <span id='btnAtendendo' className="material-symbols-outlined">
          play_circle
        </span>
        <span id='btnPendente' className="material-symbols-outlined">
          pause_circle
        </span>
        <span id='btnFinalizar' className="material-symbols-outlined">
          check_circle
        </span>
        </div>
        <div>
          
        <span id='btnSla' className="material-symbols-outlined">
          bomb
        </span>
        </div>
      </div>

      <div className='infoContainer'>


        {tickets.map((tickets, index) => (
          <div className="infoVisualizar" key={index}>
            <h2>{tickets.titulo}</h2>
            <p>{tickets.descricao}</p>
            <p>{tickets.status}</p>
            <p>{tickets.categoria.categoria}</p>
            <p>{tickets.equipamentos.equipamento}</p>
            <p>{tickets.sala.numeroSala}</p>
            <p>{tickets.usuario.nome}</p>
            <div>{new Date(tickets.dataAbertura).toLocaleDateString('pt-BR')}</div>
          </div>
        ))}

        <div className='infoChat'>

        </div>
      </div>
    </div>


  );
};
