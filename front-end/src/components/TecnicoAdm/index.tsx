import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './tecnicoAdm.css';
import { erro, Toast } from '../Swal/swal';
import { Tecnicos } from '../../pages/Tecnico';
 
interface Tecnico {
    email: string;
    usuarioID: string;
    nome: string;
    turno: string;
    tipoUsuario: string;
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
                        {/* <p>Técnico ID: {tecnico.usuarioID} | Nome: {tecnico.nome} | E-mail: {tecnico.email} | Categoria: {tecnico.tipoUsuario} | Turno: {tecnico.turno}</p> */}
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
 
export default ClientesAdm;
 