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
            console.log(response);

            if (response.data === 1) {
                setTecnicos(tecnicos.filter((tecnico) => tecnico.usuarioID !== usuarioID));
                Toast.fire({
                    icon: "success",
                    title: "Excluido com sucesso!"
                })
            } else {
                Toast.fire({
                    icon: "error",
                    title: "Erro ao excluir, técnico possui tickets pendentes"
                })
            }

        } catch (error) {
            console.error('Erro ao excluir técnico:', error);
            erro('Erro ao excluir técnico');
        }
    };

    const handleAlterarTipoTecnico = async (tecnicoID: string, novoTipo: string) => {
        try {
            const response = await axios.put(`http://localhost:5555/usuarios/alterarTipoTecnico/${tecnicoID}/${novoTipo}`);
            console.log(response);

            if (response.data === "Tecnico Inexistente") {
                Toast.fire({
                    icon: "error",
                    title: "Erro ao alterar o tipo de técnico"
                });
            } else {
                Toast.fire({
                    icon: "success",
                    title: "Tipo de técnico alterado com sucesso!"
                });
            }

        } catch (error) {
            // Se ocorrer algum erro na solicitação
            console.error('Erro ao alterar o tipo de técnico:', error);
            erro('Erro ao alterar o tipo de técnico');
        }
    };

    const handleAlterarTurnoTecnico = async (tecnicoID: string, novoTurno: string) => {
        try {
            const response = await axios.put(`http://localhost:5555/usuarios/alterarTurnoTecnico/${tecnicoID}/${novoTurno}`);
            console.log(response);

            if (response.data === "Turno Inexistente") {
                Toast.fire({
                    icon: "error",
                    title: "Erro ao alterar o turno do técnico"
                });
            } else {
                Toast.fire({
                    icon: "success",
                    title: "Turno do técnico alterado com sucesso!"
                });
            }

        } catch (error) {
            // Se ocorrer algum erro na solicitação
            console.error('Erro ao alterar o tipo de técnico:', error);
            erro('Erro ao alterar o tipo de técnico');
        }
    };
    return (
        <div className='adminContainer'>
            {tecnicos.map((tecnico, index) => (
                <div className="containerTecnico" key={index}>
                    <div className="informacaoTecnico">
                        <div className="tecnicoDados">
                            Nome: {tecnico.nome}
                        </div>
                        <div className="tecnicoDados">
                            E-mail: {tecnico.email}
                        </div>
                        <div className="tecnicoDados">

                            <select
                                className="selectCategoriaTecAdm"
                                value={tecnico.tipoUsuario}
                                onChange={(e) => {
                                    const novoTipo = e.target.value;
                                    setTecnicos(prevTecnicos => prevTecnicos.map(t => t.usuarioID === tecnico.usuarioID ? { ...t, tipoUsuario: novoTipo } : t));
                                    handleAlterarTipoTecnico(tecnico.usuarioID, novoTipo);
                                }}
                            >
                                <option value="1">N1</option>
                                <option value="2">N2</option>
                                <option value="3">N3</option>
                            </select>




                           
                            <select
                                className="selectCategoriaTecAdm"
                                value={tecnico.turno}
                                onChange={(e) => {
                                    const novoTurno = e.target.value;
                                    setTecnicos(prevTecnicos => prevTecnicos.map(t => t.usuarioID === tecnico.usuarioID ? { ...t, turno: novoTurno } : t));
                                    handleAlterarTurnoTecnico(tecnico.usuarioID, novoTurno);
                                }}
                            >
                                <option value="M">Manhã</option>
                                <option value="T">Tarde</option>
                                <option value="N">Noite</option>
                            </select>
                            

                          

                        </div>
                    </div>
                    <button className="excluir" onClick={() => handleDeleteUser(tecnico.usuarioID)}>
                        <span className="material-symbols-outlined">Delete</span>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TecnicosAdm;
