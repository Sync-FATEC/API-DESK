import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import './perfil.css';

export const Perfil = () => {
    const { user, signout } = useContext(AuthContext);
    console.log(user);
    

    if (!user) {
        return <div>Usuário não autenticado</div>;
    }

    const capitalizeFirstLetter = (str:any) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const handleSignout = () => {
        signout(); 
    };


    return (
        <div>
            <div className="modalPerfil">
                
                <h1>Perfil</h1>
                <div className="imagePerfil">
                     <span id="account" className="material-symbols-outlined">account_circle</span>
                </div>
               
                <span className="dadosPerfil">Nome:</span>
                <p className="infoPerfil">{user.nome}</p>

                <span className="dadosPerfil">E-mail:</span>
                <p className="infoPerfil">{user.email}</p>

                <span className="dadosPerfil">CPF:</span>
                <p className="infoPerfil">{user.cpf}</p>

            </div>

            <button className="header-button" onClick={handleSignout}>
                    Sair
                </button>
        </div>
    );
};
