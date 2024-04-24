import { Header } from '../../../components/Header';
import './cadastroTecnico.css';
import { AsideAdmin } from '../../../components/AsideAdmin';

export const Admin = () => {
    return (
        <div>
            <Header />
            <div className="titulo_cadastrar_tecnico">
                <div className="texto_cadastrar_tecnico">
                    <h3>Configuração de cadastro Técnicos</h3>
                </div>
            </div>

            <div className="container">
                <AsideAdmin/>
                <div className="box_de_conteudo_tecnico">
                    <div>
                        <h5 style={{ margin: '4%' }}>Técnico Cadastrado</h5>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Nome</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">CPF</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="select_tecnico">
                        <select className="form-select" aria-label="Default select example" style={{ marginRight: '10px' }}>
                            <option selected>Categoria Técnico</option>
                            <option value="1">Suporte N1</option>
                            <option value="2">Suporte N2</option>
                            <option value="3">Suporte N3</option>
                        </select>

                        <select className="form-select" aria-label="Default select example">
                            <option selected>Turno do Técnico</option>
                            <option value="1">Manhã</option>
                            <option value="2">Tarde</option>
                            <option value="3">Noite</option>
                        </select>
                    </div>

                    <div className="d-grid gap-2 col-6 mx-auto" style={{ marginBottom: '3%' }}>
                        <button className="btn btn-primary" type="button">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
