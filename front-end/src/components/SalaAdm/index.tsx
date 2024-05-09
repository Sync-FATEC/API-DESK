
import './salaAdm.css';
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
        if (numeroSala.toString().length > 10) { 
            warning('Número da sala muito longo. Limite de 10 caracteres.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5555/salas/criar', {
                numeroSala: numeroSala,
                identificacao: identificacao
            });
            setSalas(prevSalas => [...prevSalas, response.data]);
            setNumeroSala('');
            setIdentificacao('');
            Toast.fire({
                icon: "success",
                title: "Criado com sucesso!"
            })

        } catch (error) {
            console.error(error);
            erro('Error! Verifique as informações.');
        }
    };
    return (
        <div className="adminContainer">

            <form className="rowInformacoes" onSubmit={handleAddUser} method='post'>
                <div className="containerCategoria">
                    <div className='formCategoria'>
                        <input value={numeroSala} onChange={handleNumeroSalaChange} type="number" className="inputCategoria" placeholder="Adicionar Sala " />
                    </div>
                    <div className='formCategoria'>
                        <input value={identificacao} onChange={handleIdentificacaoChange} type="text" className="inputCategoria" placeholder='Adicionar identificação' />
                    </div>
                    <button type='submit' className="btnAdd"><span className="material-symbols-outlined">Add</span></button>
                </div>
            </form>
            {sala.map((sala, index) => (
                <div className="rowInformacoes" key={index}>
                    <p>{sala.numeroSala}</p>
                    <p>{sala.identificacao}</p>
                    <button className="excluir" onClick={() => handleDeleteUser(sala.numeroSala)}>
                        <span className="material-symbols-outlined">Delete</span>
                    </button>
                </div>
            ))}
        </div>
    );
}

export default SalaAdm;
