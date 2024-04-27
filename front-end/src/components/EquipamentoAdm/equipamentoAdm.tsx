import { Header } from '../../../components/Header';
import { AsideAdmin } from '../../../components/AsideAdmin';
import './equipamentoAdm.css';

export const EquipamentoAdm = () => {
    return (
        <div>
            <Header />
            <div className="titulo">
                <div className="texto_titulo">
                    <h3>Configurações de cadastro de equipamento</h3>
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
