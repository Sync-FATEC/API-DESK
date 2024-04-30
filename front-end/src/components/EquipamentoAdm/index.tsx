import './equipamentoAdm.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ICategoria from '../../types/ICategoria';
import Sala from '../../types/Sala';

const EquipamentoAdm = () => {
    const [equipamento, setEquipamento] = useState('')
    const [sla, setSla] = useState('')
    const [prioridade, setPrioridade] = useState('')
    const [categoriaID, setCategoriaID] = useState('')
    const [salaID, setSalaID] = useState('')
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [salas, setSalas] = useState<Sala[]>([]);
    const handleDeleteUser = () => {
    };

    useEffect(() => {
        const fetchSalas = async () => {
          try {
            const categoria = await axios.get('http://localhost:5555/categorias/listar');
            setCategorias(categoria.data);
            const sala = await axios.get('http://localhost:5555/salas/visualizar');
            setSalas(sala.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchSalas();
      }, []);

    const handleSalaID = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSalas = e.target.value;
    setSalaID(newSalas);
    };

    const handleCategoriaID = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategoriaID = e.target.value;
    setCategoriaID(newCategoriaID);
    };

    const handlePrioridade = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newPrioridade = e.target.value;
        setPrioridade(newPrioridade)
    }

    const handleSla = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSla = e.target.value;
        setSla(newSla)
    } 

    const handleAddUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!equipamento|| !categoriaID || !salaID || !sla || !prioridade) {
            alert('Preencha todos os campos');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5555/equipamentos/criar', {
                equipamento: equipamento,
                sla: sla,
                prioridade: prioridade,
                categoriaID: categoriaID,
                salaID: salaID

            });
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="adminContainer">
            <div className="titulo">
            </div>

            <div className="container">
                <form onSubmit={handleAddUser} method="post">
                    <select onChange={handleSalaID}>
                        {salas.map((sala, index) => (
                            <option value={sala.numeroSala} key={index}>
                                {sala.numeroSala}
                            </option>
                        ))}
                    </select>
                    <select onChange={handleCategoriaID}>
                        {categorias.map((categoria, index) => (
                            <option value={categoria.categoriaID} key={index}>
                                {categoria.categoria}
                            </option>
                        ))}
                    </select>
                    <select onChange={handlePrioridade}>
                        <option value="1">Baixa</option>
                        <option value="2">Média</option>
                        <option value="3">Alta</option>
                    </select>
                    {/* vai alterar */}
                    <input type="number" onChange={handleSla}/>
                    <button type="submit">ENVIAR!</button>
                </form>
               
                </div>
                
            </div>
        )};

export default EquipamentoAdm;
