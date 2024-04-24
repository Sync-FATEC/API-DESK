import './global.css';
import { Route, Routes} from 'react-router-dom';
import { Cliente } from './pages/Cliente';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Admin } from './pages/Admin';
import { Tecnico } from './pages/Tecnico';
import { Error } from './pages/Error';
import { RequireAuth } from './contexts/Auth/RequireAuth';

export const App =() =>{
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/error" element={<Error />} />
          <Route
            path="/admin"
            element={
              <RequireAuth tipoUsuario="A">
                <Admin />
              </RequireAuth>
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
              <RequireAuth tipoUsuario="T"> 
                <Tecnico />
              </RequireAuth>
            }
          />
        </Routes>
    </div>
  );
}

