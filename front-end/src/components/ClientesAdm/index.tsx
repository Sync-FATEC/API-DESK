import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './clientesAdm.css';
 
interface Tecnico {
    email: string;
    usuarioID: string;
    // adicione outras propriedades se necessário
}
 
const ClientesAdm = () => {
    const [tecnicos, setTecnicos] = useState<Tecnico[]>([]);
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Tecnico[]>('http://localhost:5555/usuarios/listarTecnico');
                setTecnicos(response.data);
            } catch (error) {
                console.error('Erro ao buscar técnicos:', error);
            }
        };
 
        fetchData();
    }, []);
 
    const handleDeleteUser = async (usuarioID: string) => {
        try {
            const response = await axios.delete('http://localhost:3000/usuarios/excluir', {
                data: { usuarioID }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao excluir técnico:', error);
        }
    };
 
    return (
        <div className='adminContainer'>
            <div className="container">
                {tecnicos.map((tecnico, index) => (
                    <div className="clienteEmail" key={index}>
                        <p>{tecnico.email}</p>
                        <button className="excluir" onClick={() => handleDeleteUser(tecnico.usuarioID)}>
                            Excluir
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
 
export default ClientesAdm;
 