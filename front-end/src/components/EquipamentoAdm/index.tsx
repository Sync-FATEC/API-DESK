import './equipamentoAdm.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ICategoria from '../../types/ICategoria';
import IEquipamentos from '../../types/IEquipamentos';
import ISalas from '../../types/ISalas';
import { warning, erro, Toast } from '../Swal/swal';

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
            warning('Preencha todos os campos');
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
            Toast.fire({
            icon: "success",
            title: "Criado com sucesso!"
            })
            setEquipamento('');
            setNumeroSala('');
            setCategoriaID('');
            setPrioridade('');
            setSla('');

        } catch (error) {
            console.error(error);
            erro('Error!');
            setEquipamento('');
            setNumeroSala('');
            setCategoriaID('');
            setPrioridade('');
            setSla('');
        }

    }

    const handleEquipamento = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEquipamento = e.target.value;
        setEquipamento(newEquipamento);
    }

    const handleNumeroSala = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newNumeroSala = e.target.value;
        setNumeroSala(newNumeroSala);
    }

    const handleCategoriaID = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategoriaID = e.target.value;
        setCategoriaID(newCategoriaID);
    }

    const handlePrioridade = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newPrioridade = e.target.value;
        setPrioridade(newPrioridade);
    }

    const handleSla = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSla = e.target.value;
        setSla(newSla);
    }

    const handleDeleteUser = async (equipamentosID: number) => {
        try {
            const response = await axios.delete('http://localhost:5555/equipamentos/excluir/' + equipamentosID);
            if (response.data === 'Ocorreu um erro para excluir o equipamento') {
                erro('Ocorreu um erro para excluir o equipamento');
                return;
            }
            setEquipamentos(equipamentos.filter((equipamento) => equipamento.equipamentosID !== equipamentosID));
            Toast.fire({
            icon: "success",
            title: "Excluido com sucesso!"
            })

        } catch (error) {
            console.error(error);
            erro('Error!')
        }
    };

    return (
        <div className="adminContainer">
            <div className="titulo">
            </div>
            <div className="container">
                <form onSubmit={handleAddUser} method="post">
                <div className="topEquip">
                    <div className="formInput">
                        <label className="labelEquipamento" htmlFor="sala">Sala</label>
                        <select className="selectEquipamento" onChange={handleNumeroSala} value={numeroSala}>
                            <option value={undefined}></option>
                            {salas.map((sala, index) => (
                            <option value={sala.numeroSala} key={index}>{sala.numeroSala}</option>
                            ))}
                    </select>
                    </div>
                    <div className="formInput">
                        <label className="labelEquipamento" htmlFor="categoria">Categoria</label>
                        <select className="selectEquipamento" onChange={handleCategoriaID} value={categoriaID}>
                            <option value={undefined}></option>
                            {categorias.map((categoria, index) => (
                            <option value={categoria.categoriaID} key={index}>
                                {categoria.categoria}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div className="formInput">
                        <label className="labelEquipamento" htmlFor="prioridade">Prioridade</label>
                        <select className="selectEquipamento" onChange={handlePrioridade} value={prioridade}>
                            <option value={undefined}></option>
                            <option value="Baixa">Baixa</option>
                            <option value="Media">Média</option>
                            <option value="Alta">Alta</option>
                        </select>
                    </div>
                    </div>
                    <div className="baixoEquipamento">
                    <div className="formInput">
                        <label className="labelInput" htmlFor="equipamento">Equipamento</label>
                        <input className="inputMenor" type="text" onChange={handleEquipamento} value={equipamento}/>
                    </div>
                    <div className="formInput formInputSla">
                        <label className="labelInput" htmlFor="sla">SLA</label>
                        <input className="inputMenor inputSla" type="number" onChange={handleSla} value={sla} />
                        <button className='add' type="submit"><span className="material-symbols-outlined">Add</span></button>
                    </div>
                    </div>
                </form>
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
            
        </div>
    )};

export default EquipamentoAdm;