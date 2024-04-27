import './global.css';
import { Route, Routes} from 'react-router-dom';
import { Cliente } from './pages/Cliente';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Admin } from './pages/Admin';
import { Tecnico } from './pages/Tecnico';
import { Error } from './pages/Error';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { CadastroTecnico } from './pages/Admin/CadastroTecnico/cadastroTecnico';
import { ClientesAdm } from './pages/Admin/ClientesAdm/clientesAdm';
import { CategoriaAdm } from './pages/Admin/CategoriaAdm/categoriaAdm';
import { TiposProblemaAdm } from './pages/Admin/TiposProblemaAdm/tiposProblemaAdm';
import { EquipamentoAdm } from './pages/Admin/EquipamentoAdm/equipamentoAdm';
import { SalaAdm } from './pages/Admin/SalaAdm/salaAdm';
import { BaseAdm } from './pages/Admin/BaseAdm/baseAdm';
import { TemplateAdm } from './pages/Admin/TemplateAdm/templateAdm';
import { FaqAdm } from './pages/Admin/FaqAdm/faqAdm';


export const App =() =>{
  return (
    <div className="App">
        <Routes>
          <Route path="/faqadm" element={<FaqAdm/>} />
          <Route path="/templateadm" element={<TemplateAdm/>} />
          <Route path="/baseadm" element={<BaseAdm/>} />
          <Route path="/salaadm" element={<SalaAdm/>} />
          <Route path="/equipamentoadm" element={<EquipamentoAdm/>} />
          <Route path="/tiposproblemaadm" element={<TiposProblemaAdm/>} />
          <Route path="/categoriaadm" element={<CategoriaAdm/>} />
          <Route path="/clientesadm" element={<ClientesAdm/>} />
          <Route path="/cadastrotecnico" element={<CadastroTecnico/>} />
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

