import './templateAdm.css';
import add from '../../assets/img/add.png';

const TemplateAdm = () => {
    const templates = [
        { nome: 'Realizada execução do serviço conforme solicitação. Testes realizados e validados juntamente com o usuário solicitante.'},
        { nome: 'Realizada execução do serviço conforme solicitação. Testes realizados e validados juntamente com o usuário solicitante.' },
        { nome: 'Realizada execução do serviço conforme solicitação. Testes realizados e validados juntamente com o usuário solicitante.'}
    ];

    const handleDeleteUser = () => {
        // BackEnd logica para excluir e logica para pegar os templates
    };
    const handleAddUser = () => {
        // BackEnd logica para adicionar
    };
    return (
        <div className="adminContainer">
            <div className="titulo">
            </div>

            <div className="container">
                {templates.map((templates, index) => (
                    <div className="nomeTemplates" key={index}>
                            <p>{templates.nome}</p>
                        <button className="excluir" onClick={handleDeleteUser}>
                            Excluir
                        </button>
                    </div>
                    
                    
                ))}
                <div className="nomeTemplates">
                    <input type="text" className="inputTemplates" placeholder="Adicionar um item"/>
                    <button onClick={handleAddUser} className="add">
                <img src={add} alt="add" />
            </button>
                </div>
                
            </div>
        </div>
    )};

export default TemplateAdm;
