import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import './perfil.css';
import Swal from "sweetalert2";

export const Perfil = () => {
    const { user, signout } = useContext(AuthContext);
    console.log(user);
    
    if (!user) {
        return <div>Usuário não autenticado</div>;
    }
    
    const capitalizeFirstLetter = (str:string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    
    const handleSignout = () => { // Arrumar o css desse swal
        Swal.fire({
            title: "Deseja realmente sair?",
            showDenyButton: true,
            confirmButtonText: "Sim", // texto do botão de aceitar
            denyButtonText: "Não", // texto do botão de recusar
            width: 410, // largura do aviso
            confirmButtonColor: 'rgb(0,114,187)', // teste de cor para os botão
            denyButtonColor: 'rgb(255, 0, 53)',
            heightAuto: false,
            backdrop: false, // teste de cor para os botão
            customClass: { // para colocar o css das coisas
                confirmButton: 'cButton',
                denyButton: 'dButton',
                
            }
            
        }).then((result) => {
            if (result.isConfirmed) {
                signout(); 
            }
        });
    };
    
    return (
        <div>
            <div className="modalPerfil">
                
                <h1>Perfil</h1>
                <div className="imagePerfil">
                     <span id="account" className="material-symbols-outlined">account_circle</span>
                </div>
               
                <span className="dadosPerfil">Nome:</span>
                <p className="infoPerfil">{capitalizeFirstLetter(user.nome)}</p>

                <span className="dadosPerfil">E-mail:</span>
                <p className="infoPerfil">{user.email}</p>

                <span className="dadosPerfil">CPF:</span>
                <p className="infoPerfil">{user.cpf}</p>

         
            <div className="btnPerfilContainer">
                <button className="btnPerfil" onClick={handleSignout}>
                    Sair
                </button>
            </div>
            </div>
        </div>
    );
};
