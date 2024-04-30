
import './categoriaAdm.css';
import add from '../../assets/img/add.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ICategoria from '../../types/ICategoria';
import { log } from 'console';

const CategoriaAdm = () => {
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [categoria, setCategoria] = useState('');
    const [tipoTecnico, setTipoTecnico] = useState('');

    const handleCategoriaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategoria(event.target.value);
    };

    const handleTipoTecnicoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTipoTecnico(event.target.value);
    };

    useEffect(() => {
        const fetchSalas = async () => {
          try {
            const response = await axios.get('http://localhost:5555/categorias/listar');
            setCategorias(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchSalas();
      }, []);

    const handleDeleteUser = async (categoriaID: number) => {
        try {
            const response = await axios.delete('http://localhost:5555/categorias/excluir/' + categoriaID);
            if (response.data === 'Erro na exclusão de uma categoria') {
                alert('Erro ao excluir categoria');
                return;
            }
            setCategorias(categorias.filter((categoria) => categoria.categoriaID !== categoriaID));
        } catch (error) {
            console.error(error);
        }
    };
    const handleAddUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!categoria || !tipoTecnico) {
            alert('Preencha todos os campos');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5555/categorias/cadastrar', {
                categoria: categoria,
                tipoTecnico: tipoTecnico
            });
            setCategorias([...categorias, response.data]);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="adminContainer">
            <div className="titulo">
            </div>

            <div className="container">
                {categorias.map((categorias, index) => (
                    <div className="numeroSala" key={categorias.categoriaID}>
                            <p>{categorias.categoria}</p>
                            <p>{categorias.tipoTecnico}</p>
                        <button className="excluir" onClick={() => handleDeleteUser(categorias.categoriaID)}>
                            Excluir
                        </button>
                    </div>
                ))}
                <div className="numeroSala">
                    <form onSubmit={handleAddUser} method='post'>
                        <input onChange={handleCategoriaChange} type="text" className="inputSala" placeholder="Adicionar categoria"/>
                        <div className="formInput">
                            <label className="labelInputTecnico" htmlFor="categoria">Categoria do técnico</label>
                            <select className="selectCategoria" value={tipoTecnico} onChange={(e) => setTipoTecnico(e.target.value)}>
                                <option value=""></option>
                                <option value="1">Suport N1</option>
                                <option value="2">Suporte N2</option>
                                <option value="3">Suporte N3</option>
                            </select>
                        </div>
                        <button type='submit'>Criar nova categoria</button>
                    </form>
                <img src={add} alt="add" />
                </div>
                
            </div>
        </div>
    )};

export default CategoriaAdm;
