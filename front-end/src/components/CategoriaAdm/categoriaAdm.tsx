import './categoriaAdm.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ICategoria from '../../types/ICategoria';
import { erro, Toast, warning } from '../Swal/swal';

const CategoriaAdm = () => {
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [categoria, setCategoria] = useState('');
    const [tipoTecnico, setTipoTecnico] = useState('');

    const handleCategoriaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategoria(event.target.value);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
                erro('Erro ao excluir categoria');
                return;
            }
            setCategorias(categorias.filter((categoria) => categoria.categoriaID !== categoriaID));
            Toast.fire({
                icon: "success",
                title: "Excluido com sucesso!"
            })

        } catch (error) {
            console.error(error);
            erro('Error!')
        }
    };
    const handleAddUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!categoria || !tipoTecnico) {
            warning('Preencha todos os campos');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5555/categorias/cadastrar', {
                categoria: categoria,
                tipoTecnico: tipoTecnico
            });
            setCategorias([...categorias, response.data]);
            Toast.fire({
                icon: "success",
                title: "Criado com sucesso!"
            })
            setCategoria('');
            setTipoTecnico('');

        } catch (error) {
            console.error(error);
            erro('Error na criação de categoria!')
        }
    };
    return (
        <div className="adminContainer">
 
                {categorias.map((categorias, index) => (
                    <div className="rowInformacoes" key={categorias.categoriaID}>
                        <p className="itemCategoria">{categorias.categoria}</p>
                        <p className="itemCategoria">{categorias.tipoTecnico}</p>
                        <button className="excluir" onClick={() => handleDeleteUser(categorias.categoriaID)}>
                            <span className="material-symbols-outlined">Delete</span>
                        </button>
                    </div>
                ))}
                <form onSubmit={handleAddUser} method='post' className="rowInformacoes">
                <div className="containerCategoria">
                        <div className='formCategoria'>
                        <label className="labelCategoria" htmlFor="categoria">Adicionar Categoria</label>
                        <input value={categoria} onChange={handleCategoriaChange} type="text" className="inputCategoria" />
                        </div>
                        <div className='formCategoria'>

                        <label className="labelCategoria" htmlFor="categoria">Categoria do técnico</label>
                        <select className="selectCategoria" value={tipoTecnico} onChange={(e) => setTipoTecnico(e.target.value)}>
                            <option value=""></option>
                            <option value="1">Suporte N1</option>
                            <option value="2">Suporte N2</option>
                            <option value="3">Suporte N3</option>
                        </select>
                        </div>
                        <button type='submit' className="btnAdd"><span className="material-symbols-outlined">add</span></button>
                    </div>
                </form>
        </div>
    );
    
};

export default CategoriaAdm;