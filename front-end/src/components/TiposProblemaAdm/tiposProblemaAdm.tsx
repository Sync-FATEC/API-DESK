import { Header } from '../../../components/Header';
import { AsideAdmin } from '../../../components/AsideAdmin';
import './tiposProblemaAdm.css';


export const TiposProblemaAdm = () => {
    return (
        <div>
            <Header />
            <div className="titulo">
                <div className="texto_titulo">
                    <h3>Configurações de cadastro tipo de problemas</h3>
                </div>
            </div>

            <div className="container">
                <AsideAdmin/>
                <div className="box_de_conteudo">
                    <h4>teste</h4>
                    <h4>teste</h4>
                    <h4>teste</h4>
                    
                </div>
            </div>
        </div>
    )};
