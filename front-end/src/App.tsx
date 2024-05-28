import './global.css';
import { Route, Routes } from 'react-router-dom';
import  Cliente  from './pages/Cliente';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { ConfiguracaoAdmin } from './pages/ConfiguracaoAdmin';
import { Tecnicos } from './pages/Tecnico';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { FAQ } from './components/Faq';
import VisualizarTickets  from './components/VisualizarTicketsCliente';
import { TicketsAdmin } from './pages/TicketsAdmin';
import { Admin } from './pages/Admin';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RequireAuth tipoUsuario={['1', '2', '3', 'U', 'A']} pagina={'home'}><Login /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/FAQ" element={<RequireAuth tipoUsuario={['1', '2', '3', 'U', 'A']} pagina={'faq'}><FAQ /></RequireAuth>} />
        <Route path="/Admin" element={<RequireAuth tipoUsuario="A" pagina={'admin'}><Admin /></RequireAuth>} />
        <Route path="/ConfiguracaoAdmin" element={<RequireAuth tipoUsuario="A" pagina={'admin'}><ConfiguracaoAdmin /></RequireAuth>} />
        <Route path="/ticketsAdmin" element={<RequireAuth tipoUsuario="A" pagina={'ticketsadmin'}><TicketsAdmin /></RequireAuth>} />
        <Route path="/visualizarTickets" element={<RequireAuth tipoUsuario="U" pagina={'visualizartickets'}><VisualizarTickets selectedTicket={null} onClose={function (): void {
          throw new Error('Function not implemented.');
        } } /></RequireAuth>} />
        <Route path="/cliente" element={<RequireAuth tipoUsuario="U" pagina={'cliente'}><Cliente /></RequireAuth>} />
        <Route path="/tecnico" element={<RequireAuth tipoUsuario={['1', '2', '3']} pagina={'tecnico'}><Tecnicos /></RequireAuth>} />
      </Routes>
    </div>
  );
}
