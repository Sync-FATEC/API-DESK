import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import './perfil.css';

export const Perfil = () => {
    const user = useContext(AuthContext);

    if (!user) {
        return <div>Usuário não autenticado</div>;
    }

    const capitalizeFirstLetter = (str:any) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div>
            <div className="modalPerfil">
                
                <h1>Perfil</h1>
                <div className="imagePerfil">
                     <span id="account" className="material-symbols-outlined">account_circle</span>
                </div>
               
                <p className="dadosPerfil">Nome:</p>
                <p className="infoPerfil">{capitalizeFirstLetter(user.user?.nome)}</p>

                <p className="dadosPerfil">Email:</p>
                <p className="infoPerfil">{user.user?.email}</p>

                <p className="dadosPerfil">CPF:</p>
                <p className="infoPerfil">{user.user?.cpf}</p>

            </div>
        </div>
    );
};
