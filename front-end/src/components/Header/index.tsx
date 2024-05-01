import { useState, useContext } from 'react';
import logo from '../../assets/img/logo-header.svg';
import './header.css';
import { Perfil } from '../Perfil';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../contexts/Auth/AuthContext"; 

export const Header = () => {
    const { user } = useContext(AuthContext); 
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleLogoClick = () => {
        if (user && user.tipoUsuario) { 
            switch (user.tipoUsuario) {
                case 'U':
                    navigate('/cliente');
                    break;
                case '1':
                case '2':
                case '3':
                    navigate('/tecnico');
                    break;
                case 'A':
                    navigate('/admin');
                    break;
                default:
                    navigate('/');
                    break;
            }
        } else {
            navigate('/');
        }
    };

    return (
        <header className="header">
        <div className="headerLeft">
            <button className='logoButton' onClick={handleLogoClick}>
                <img className='logoHeader' src={logo} alt="logo" />
            </button>
        </div>
            <div className="headerRight">
                <button className="btnHeader">
                    <Link to="/VisualizarTicket">
                        <span className="material-symbols-outlined">confirmation_number</span>
                    </Link>
                </button>

                <button className="btnHeader">
                    <Link to="/FAQ">
                        <span className="material-symbols-outlined">help</span>
                    </Link>
                </button>

                <div className="headerDivider" />

                <button className="btnHeader" onClick={handleOpenModal}>
                    <span className="material-symbols-outlined">account_circle</span>
                </button>
            </div>

            {modalOpen && (
                <div className="modal">
                    <div className="modalContent">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <Perfil />
                    </div>
                </div>
            )}
        </header>
    );
};
