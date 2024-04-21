import { useContext } from 'react';
import './App.css';
import { Route, Routes, useNavigate} from 'react-router-dom'; 
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
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
      </Routes>

      {auth.user && <button onClick={handleLogout}>Sair</button>} 
    </div>
  );
}

export default App;
