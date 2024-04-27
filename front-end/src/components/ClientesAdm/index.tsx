import './clientesAdm.css';

const ClientesAdm = () => {
    const clientes = [
        { nome: 'Cliente 1', email: 'cliente1@example.com' },
        { nome: 'Cliente 2', email: 'cliente2@example.com' },
        { nome: 'Cliente 3', email: 'cliente3@example.com' }
    ];

    const handleDeleteUser = () => {
        // BackEnd logica para excluir e logica para pegar os emails
    };

    return (
        <div className='adminContainer'>
            <div className="container">
                {clientes.map((cliente, index) => (
                    <div className="clienteEmail" key={index}>
                            <p>{cliente.email}</p>
                        <button className="excluir" onClick={handleDeleteUser}>
                            Excluir
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientesAdm;
