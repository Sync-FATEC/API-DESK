import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import './perfil.css';
import Swal from "sweetalert2";


export const Perfil = () => {
    const getTurnoClass = (turno: string) => {
        switch (turno) {
          case 'M':
            return 'Manhã';
          case 'T':
            return 'Tarde';
          case 'N':
            return 'Noite';
          default:
            return '';
        }
      };
    const { user, signout } = useContext(AuthContext);

    if (!user) {
        return <div>Usuário não autenticado</div>;
    }

    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    
    const handleSignout = () => { // Arrumar o css desse swal
        Swal.fire({
            title: "Deseja realmente sair?",
            showDenyButton: true,
            confirmButtonText: "Sim", // texto do botão de aceitar
            denyButtonText: "Não", // texto do botão de recusar
            width: 410, // largura do aviso
            confirmButtonColor: 'rgb(255, 0, 53)',
            denyButtonColor: 'rgb(0,114,187)',
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

                {
                    user && ['1', '2', '3'].includes(user.tipoUsuario) && (
                        <div>
                            <div>
                                <span className="dadosPerfil">Nível do Suporte:</span>
                                <p className="infoPerfil">N{user.tipoUsuario}</p>
                            </div>
                            <div>
                                <span className="dadosPerfil">Turno:</span>
                                <p className="infoPerfil">{getTurnoClass(user.turno)}</p>
                            </div>
                        </div>

                    )
                    
                }


                <div className="btnPerfilContainer">
                    <button className="btnPerfil" onClick={handleSignout}>
                        Sair
                    </button>
                </div>
            </div>
        </div>
    );
};
