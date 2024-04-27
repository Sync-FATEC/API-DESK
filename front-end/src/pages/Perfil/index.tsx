import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Perfil = () => {
    const user  = useContext(AuthContext);

    if (!user) {
        return <div>Usuário não autenticado</div>;
    }

    return (
        <div className="modal-perfil">
            <div className="modal-content">
                <span className="close">;</span>
                <h2>Perfil do Usuário</h2>
                <p>Nome: {user.user?.name}</p>
                <p>Email: {user.user?.email}</p>
                <img src='' alt="Foto do Usuário" />
            </div>
        </div>
    );
};