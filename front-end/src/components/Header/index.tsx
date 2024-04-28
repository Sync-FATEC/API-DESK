import  { useState, useContext } from 'react';
import logo from '../../assets/img/logo-header.svg';
import './header.css';
import { Perfil } from '../Perfil';
import { AuthContext } from '../../contexts/Auth/AuthContext'; 

export const Header = () => {
    const { signout } = useContext(AuthContext); 
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSignout = () => {
        signout(); 
    };

    return (
        <header className="header">
            <div className="header-left">
                <img className='logo-header' src={logo} alt="logo" />
            </div>
            <div className="header-right">
                <button className="header-button">
                    <span className="material-symbols-outlined">confirmation_number</span>
                </button>

                <button className="header-button">
                    <span className="material-symbols-outlined">help</span>
                </button>

                <div className="header-divider" />

                <button className="header-button" onClick={handleOpenModal}>
                    <span className="material-symbols-outlined">account_circle</span>
                </button>
                
                <button className="header-button" onClick={handleSignout}>
                    Sair
                </button>
            </div>

            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <Perfil />
                    </div>
                </div>
            )}
        </header>
    );
};
