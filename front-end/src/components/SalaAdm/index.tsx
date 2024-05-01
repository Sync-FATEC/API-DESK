
import './salaAdm.css';
import add from '../../assets/img/add.png';
import axios from 'axios';
import Sala from '../../types/ISalas';
import { useEffect, useState } from 'react';
import { erro, Toast, warning } from '../Swal/swal';

const SalaAdm = () => {
    const [sala, setSalas] = useState<Sala[]>([]);
    const [numeroSala, setNumeroSala] = useState('');
    const [identificacao, setIdentificacao] = useState('');

    const handleNumeroSalaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumeroSala(event.target.value);
    };

    const handleIdentificacaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdentificacao(event.target.value);
    };

    useEffect(() => {
        const fetchSalas = async () => {
          try {
            const response = await axios.get('http://localhost:5555/salas/visualizar');
            setSalas(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchSalas();
      }, []);

    const handleDeleteUser = async (numeroSala: number) => {
        try {
            const response = await axios.delete(`http://localhost:5555/salas/excluir/${numeroSala}`)
            if (response.data === "Erro na exclusão de uma sala") {
                erro('Erro na exclusão de uma sala');
                return;
            }
            setSalas(prevSalas => prevSalas.filter(s => s.numeroSala !== numeroSala));
            Toast.fire({
            icon: "success",
            title: "Excluido com sucesso!"
            })

        } catch (error) {
            console.error(error);
            erro('Error!');
        }
    };
    const handleAddUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!numeroSala || !identificacao) {
            warning('Preencha todos os campos');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5555/salas/criar', {
                numeroSala: numeroSala,
                identificacao: identificacao
            });
            setSalas(prevSalas => [...prevSalas, response.data]);
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
                {sala.map((sala, index) => (
                    <div className="numeroSala" key={index}>
                            <p>{sala.numeroSala}</p>
                            <p>{sala.identificacao}</p>
                        <button className="excluir" onClick={() => handleDeleteUser(sala.numeroSala)}>
                            Excluir
                        </button>
                    </div>
                ))}
                <div className="SalaSubmit">
                    <form onSubmit={handleAddUser} method='post'>
                        <input onChange={handleNumeroSalaChange} type="number" className="inputSala" placeholder="Adicionar Sala"/>
                        <input onChange={handleIdentificacaoChange} type="text" className='inputSala' placeholder='Adicionar identificação'/>
                        <button type='submit' className='add'><img src={add} alt="add" /></button>
                    </form>
                </div>
                
            </div>
        </div>
    )};

export default SalaAdm;
