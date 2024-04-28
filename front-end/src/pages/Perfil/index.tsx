import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import './perfil.css';

export const Perfil = () => {
    const user  = useContext(AuthContext);

    if (!user) {
        return <div>Usuário não autenticado</div>;
    }

    return (
        <div>
            <div className="modal-perfil">
                
                <h1>Perfil</h1>
                <hr />
                <div className="account-circle">
                     <span id="account" className="material-symbols-outlined">account_circle</span>
                </div>
               
                <h2 className="info-name-perfil">Nome:</h2>
                <p className="info-perfil">{user.user?.nome}</p>

                <h2 className="info-name-perfil">Email:</h2>
                <p className="info-perfil">{user.user?.email}</p>

                <h2 className="info-name-perfil">CPF:</h2>
                <p className="info-perfil">{user.user?.cpf}</p>

            </div>
        </div>
    );
};