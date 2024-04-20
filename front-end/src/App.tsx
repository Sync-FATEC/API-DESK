import { useContext } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate, useLocation} from 'react-router-dom'; 
import { Home } from './pages/Home';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import logo from './assets/img/logo.svg';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async() => {
    await auth.signout();
    navigate('/');
  };

  return (
    <div className="App">
      <header>  
     <img className='logo' src={logo} alt="" />
    

      {location.pathname !== '/register' && <h1 className="title">Bem-vindo ao Service Desk</h1>}
      {location.pathname === '/register' && <h1 className="title">Bem-vindo ao Service Desk</h1>}  
      {location.pathname !== '/register' && <h2 className="title">Cadastre sua conta agora mesmo</h2>}
      {location.pathname === '/register' && <h2 className="title">Acesse sua conta agora mesmo</h2>}  
        <nav>
           {/* 
      {location.pathname !== '/register' && <Link to="/">Home</Link>}
        */}
        
        <button className='botaoCadastro'>
          {location.pathname !== '/register' && <Link to="/register">Cadastro</Link>}
          {location.pathname !== '/login' && <Link to="/login">Login</Link>}
        </button>
        



        {auth.user && <button onClick={handleLogout}>Sair</button>} 
        </nav>

      </header>
      
      <Routes >

        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
