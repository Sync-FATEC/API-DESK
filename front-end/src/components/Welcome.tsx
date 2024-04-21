import { Link, useLocation } from "react-router-dom";
import logo from '../assets/img/logo.svg';

export const Welcome = () => {
    const location = useLocation();

    return (
        <header>
            <img className='logo' src={logo} alt="" />

           

           <h1 className="title">Bem-vindo ao Service Desk</h1>
           {location.pathname === '/' && <h2 className="title">Cadastre sua conta agora mesmo</h2>}
            {location.pathname === '/login' && <h2 className="title">Cadastre sua conta agora mesmo</h2>}
            {location.pathname === '/register' && <h2 className="title">Acesse sua conta agora mesmo</h2>}
            <nav>
        {/* 
            {location.pathname === '' || location.pathname === 'login' && 'aaa'}
            {location.pathname !== '/register' && <Link to="/">Home</Link>}
                */}

                <button className='botaoCadastro'>
                {location.pathname === '/' && <Link to="/register">Cadastro</Link>}
                    {location.pathname === '/login' && <Link to="/register">Cadastro</Link>}
                    {location.pathname ==='/register' && <Link to="/login">Login</Link>}
                </button>




            </nav>

        </header>
    );
}