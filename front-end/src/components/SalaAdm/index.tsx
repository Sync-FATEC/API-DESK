
import './salaAdm.css';
import add from '../../assets/img/add.png';

export const SalaAdm = () => {
    const sala = [
        { nome: 'Sala 401'},
        { nome: 'Sala 402' },
        { nome: 'Sala 403'}
    ];

    const handleDeleteUser = () => {
        // BackEnd logica para excluir e logica para pegar as salas
    };
    const handleAddUser = () => {
        // BackEnd logica para adicionar
    };
    return (
        <div className="salaContainer">
            <div className="titulo">
                <div className="formTitle">
                    Salas cadastradas
                </div>
            </div>

            <div className="container">
                {sala.map((sala, index) => (
                    <div className="numeroSala" key={index}>
                            <p>{sala.nome}</p>
                        <button className="excluir" onClick={handleDeleteUser}>
                            Excluir
                        </button>
                    </div>
                    
                    
                ))}
                <div className="numeroSala">
                    <input type="text" className="inputSala" placeholder="Adicionar Sala"/>
                    <button onClick={handleAddUser} className="add">
                <img src={add} alt="add" />
            </button>
                </div>
                
            </div>
        </div>
    )};

export default SalaAdm;
