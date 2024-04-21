import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/img/logo.svg';

export const Aside = () => {
    const location = useLocation();
    let currentTitle = '';

    if (location.pathname === '/' || location.pathname === '/login') {
        currentTitle = 'Cadastre sua conta agora mesmo';
    } else if (location.pathname === '/cadastro') {
        currentTitle = 'Acesse sua conta agora mesmo';
    }

    return (
        <header>
            <img className='logo' src={logo} alt="" />
            <h1 className="title">Bem-vindo ao Service Desk</h1>
            {currentTitle && <h2 className="title">{currentTitle}</h2>}
            <nav>
                <button className='botaoCadastro'>
                    {location.pathname === '/' && <Link to="/cadastro">Cadastro</Link>}
                    {location.pathname === '/login' && <Link to="/cadastro">Cadastro</Link>}
                    {location.pathname === '/cadastro' && <Link to="/login">Login</Link>}
                </button>
            </nav>
        </header>
    );
}
