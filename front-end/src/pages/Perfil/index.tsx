import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Perfil = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <div>Usuário não autenticado</div>;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <h2>Perfil do Usuário</h2>
                <p>Nome: {user.name}</p>
                <p>Email: {user.email}</p>
                <img src='' alt="Foto do Usuário" />
            </div>
        </div>
    );
};
