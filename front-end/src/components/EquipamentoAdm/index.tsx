import './equipamentoAdm.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ICategoria from '../../types/ICategoria';
import IEquipamentos from '../../types/IEquipamentos';
import ISalas from '../../types/ISalas';

const EquipamentoAdm = () => {
    const [equipamento, setEquipamento] = useState('')
    const [sla, setSla] = useState('')
    const [prioridade, setPrioridade] = useState('')
    const [categoriaID, setCategoriaID] = useState('')
    const [numeroSala, setNumeroSala] = useState('')
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [salas, setSalas] = useState<ISalas[]>([]);
    const [equipamentos, setEquipamentos] = useState<IEquipamentos[]>([]);

    useEffect(() => {
        const fetchSalas = async () => {
          try {
            const categoria = await axios.get('http://localhost:5555/categorias/listar');
            setCategorias(categoria.data);
            const sala = await axios.get('http://localhost:5555/salas/visualizar');            
            setSalas(sala.data);
            const equip = await axios.get('http://localhost:5555/equipamentos/listar');
            setEquipamentos(equip.data);
            console.log(equip.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchSalas();
      }, []);

    const handleAddUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!equipamento|| !categoriaID || !numeroSala || !sla || !prioridade) {
            alert('Preencha todos os campos');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5555/equipamentos/criar', {
                equipamento: equipamento,
                sla: sla,
                prioridade: prioridade,
                categoriaID: categoriaID,
                numeroSala: numeroSala

            });
            setEquipamentos([...equipamentos, response.data]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteUser = async (equipamentosID: number) => {
        try {
            const response = await axios.delete('http://localhost:5555/equipamentos/excluir/' + equipamentosID);
            if (response.data === 'Ocorreu um erro para excluir o equipamento') {
                alert('Ocorreu um erro para excluir o equipamento');
                return;
            }
            setEquipamentos(equipamentos.filter((equipamento) => equipamento.equipamentosID !== equipamentosID));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="adminContainer">
            <div className="titulo">
            </div>
            {salas.map((sala, index) => (
                <details key={index}>
                    <summary>{sala.numeroSala}</summary>
                    {categorias.map((categoria, index) => (
                        <details key={index}>
                            <summary>{categoria.categoria}</summary>
                            {equipamentos.map((equipamentos, index) => (
                                equipamentos.sala.salaID === sala.salaID && equipamentos.categoria.categoriaID === categoria.categoriaID ? (
                                    <div className="numeroSala" key={equipamentos.equipamentosID}>
                                        <p>{equipamentos.equipamento}</p>
                                        <p>{equipamentos.sla}</p>
                                        <p>{equipamentos.prioridade}</p>
                                        <button onClick={() => handleDeleteUser(equipamentos.equipamentosID)}>Excluir</button>
                                    </div>
                                ) : null
                            ))}
                        </details>
                    ))}
                </details>
            ))}
            <div className="container">
                <form onSubmit={handleAddUser} method="post">
                    <input type="text" onChange={(e) => setEquipamento(e.target.value)} />
                    <select onChange={(e) => setNumeroSala(e.target.value)}>
                        <option value={undefined}>Selecione algo</option>
                        {salas.map((sala, index) => (
                            <option value={sala.numeroSala} key={index}>
                                {sala.numeroSala}
                            </option>
                        ))}
                    </select>
                    <select onChange={(e) => setCategoriaID(e.target.value)}>
                        <option value={undefined}>Selecione algo</option>
                        {categorias.map((categoria, index) => (
                            <option value={categoria.categoriaID} key={index}>
                                {categoria.categoria}
                            </option>
                        ))}
                    </select>
                    <select onChange={(e) => setPrioridade(e.target.value)}>
                        <option value={undefined}>Selecione algo</option>
                        <option value="Baixa">Baixa</option>
                        <option value="Media">Média</option>
                        <option value="Alta">Alta</option>
                    </select>
                    <input type="number" onChange={(e) => setSla(e.target.value)} />
                    <button type="submit">ENVIAR!</button>
                </form>
            </div>
        </div>
    )};

export default EquipamentoAdm;
