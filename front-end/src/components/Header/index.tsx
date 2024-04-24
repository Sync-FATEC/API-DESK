import logo from '../../assets/img/logo-header.svg';
import './header.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signout();
        navigate('/login'); 
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

                <button className="header-button" onClick={handleLogout}>
                    <span className="material-symbols-outlined">account_circle</span>
                </button>

                {auth.user && <button onClick={handleLogout}>Sair</button>}
            </div>
        </header>
    );
};
