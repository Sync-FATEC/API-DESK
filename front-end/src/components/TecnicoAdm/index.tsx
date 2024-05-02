import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './tecnicoAdm.css';
import { erro, Toast } from '../Swal/swal';
import ITecnicos from '../../types/ITecnicos';

 
const TecnicosAdm = () => {
    const [tecnicos, setTecnicos] = useState<ITecnicos[]>([]);
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ITecnicos[]>('http://localhost:5555/usuarios/listarTecnico');
                setTecnicos(response.data);
            } catch (error) {
                console.error('Erro ao buscar técnicos:', error);
            }
        };
 
        fetchData();
    }, []);
 
    const handleDeleteUser = async (usuarioID: string) => {
        try {
            const response = await axios.delete('http://localhost:5555/usuarios/excluir/' + usuarioID);
            setTecnicos(tecnicos.filter((tecnico) => tecnico.usuarioID !== usuarioID));
            Toast.fire({
            icon: "success",
            title: "Excluido com sucesso!"
            })

        } catch (error) {
            console.error('Erro ao excluir técnico:', error);
            erro('Erro ao excluir técnico');
        }
    };
 
    return (
        <div className='adminContainer'>
            <div className="container">
                <h2>Técnicos:</h2>
                {tecnicos.map((tecnico, index) => (
                    <div className="clienteEmail" key={index}>
                        <div className="linha">
                        <div className="linhaEsquerda">
                        {tecnico.nome} - {tecnico.email} </div>
                        <div className="linhaDireita">
                            <div className="itemLinha">
                            N{tecnico.tipoUsuario}
                            </div>
                            <div className="itemLinha linhaTurno">
                            <span className="material-symbols-outlined">alarm_add</span>
                            <span>Turno: {tecnico.turno}</span>
                            </div>
                         
                        </div>
                        </div>
                        
                        
                        <button className="excluir"  onClick={() => handleDeleteUser(tecnico.usuarioID)}>
                            <span className="material-symbols-outlined">Delete</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
 
export default TecnicosAdm;
 