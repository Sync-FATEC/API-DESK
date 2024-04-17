import { useContext } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate} from 'react-router-dom'; 
import { Home } from './pages/Home';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async() => {
    await auth.signout();
    navigate('/');
  };

  return (
    <div className="App">
      <header>
        <h1>Service Desk</h1>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Cadastro</Link>



        {auth.user && <button onClick={handleLogout}>Sair</button>} 
        </nav>

      </header>
      <hr />
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  );
}

export default App;
