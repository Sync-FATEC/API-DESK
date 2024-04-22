import './header.css';
import logo from '../../assets/img/logo-header.svg';


export const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
            <img className='logo-header' src={logo} alt="logo" />
            </div>
            <div className="header-right">
                <button className="header-button">
                    <span className="material-symbols-outlined">
                    confirmation_number</span>
                </button>

                <button className="header-button">
                    <span className="material-symbols-outlined">
                    help</span>
                </button>

                <div className="header-divider" />

                <button className="header-button">
                    <span className="material-symbols-outlined">
                    account_circle</span>
                </button>
            </div>
        </header>
    );
};
