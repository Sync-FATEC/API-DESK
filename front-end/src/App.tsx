import './global.css';
import { Route, Routes } from 'react-router-dom';
import { Cliente } from './pages/Cliente';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Admin } from './pages/Admin';
import { Tecnicos } from './pages/Tecnico';
import { RequireAuth } from './contexts/Auth/RequireAuth';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
            path="/admin"
            element={
              //<RequireAuth tipoUsuario="A">
                <Admin />
              //</RequireAuth>
            }
          />
          <Route
            path="/cliente"
            element={
              <RequireAuth tipoUsuario="U"> 
                <Cliente />
              </RequireAuth>
            }
          />
          <Route
            path="/tecnico"
            element={
              <RequireAuth tipoUsuario={['1', '2', '3']} > 
                <Tecnicos />
              </RequireAuth>
            }
          />
        </Routes>
    </div>
  );
}

