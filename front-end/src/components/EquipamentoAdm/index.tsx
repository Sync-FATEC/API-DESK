import './equipamentoAdm.css';
import add from '../../assets/img/add.png';

const EquipamentoAdm = () => {
    const equipamento = [
        { nome: 'Notebook Lenovo Thinkpad E14'},
        { nome: 'Teclado com fio USB Logitech K120' },
        { nome: 'Mouse Essential Usb Lenovo'}
    ];

    const handleDeleteUser = () => {
        // BackEnd logica para excluir e logica para pegar as equipamentos
    };
    const handleAddUser = () => {
        // BackEnd logica para adicionar
    };
    return (
        <div className="adminContainer">
            <div className="titulo">
            </div>

            <div className="container">
                {equipamento.map((equipamento, index) => (
                    <div className="nomeEquipamento" key={index}>
                            <p>{equipamento.nome}</p>
                        <button className="excluir" onClick={handleDeleteUser}>
                            Excluir
                        </button>
                    </div>
                    
                    
                ))}
                <div className="nomeEquipamento">
                    <input type="text" className="inputEquipamento" placeholder="Adicionar Equipamento"/>
                    <button onClick={handleAddUser} className="add">
                <img src={add} alt="add" />
            </button>
                </div>
                
            </div>
        </div>
    )};

export default EquipamentoAdm;
