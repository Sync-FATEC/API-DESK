import { useState } from 'react';

import './register.css'

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleCpfInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(event.target.value);
    }

    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // adicionar a lógica para enviar os dados
        console.log("Nome:", name);
        console.log("Cpf:", cpf);
        console.log("E-mail:", email);
        console.log("Senha:", password);
    }

    return (
        <div className="auth-container"> 
            <div className="auth-form">
                <h2 className="auth-title">Crie sua conta</h2>
                <h3 className='auth-title2'>Cadastre seus dados</h3>

                <div className="auth-input-group">
                    <input
                        className={name !== "" ? "has-val input" : "input"}
                        type="text"
                        value={name}
                        onChange={handleNameInput}
                        placeholder="Nome"
                    />
                    <label className="auth-input-label" htmlFor="nome">Digite seu nome</label>
                </div>
                <div className="auth-input-group">
                    <input
                        className={cpf !== "" ? "has-val input" : "input"}
                        type="text"
                        value={cpf}
                        onChange={handleCpfInput}
                        placeholder="Cpf"
                    />
                   <label className="auth-input-label" htmlFor="cpf">Digite seu Cpf</label>
                </div>

                <div className="auth-input-group">
                    <input
                        className={email !== "" ? "has-val input" : "input"}
                        type="email"
                        value={email}
                        onChange={handleEmailInput}
                        placeholder="Email"
                    />
                   <label className="auth-input-label" htmlFor="email">Digite seu e-mail</label>
                </div>

                <div className="auth-input-group">
                    <input
                        className={password !== "" ? "has-val input" : "input"}
                        type="password"
                        value={password}
                        onChange={handlePasswordInput}
                        placeholder="Password"
                    />
                   <label className="auth-input-label" htmlFor="Password">Digite sua senha</label>
                </div>

                <div className="auth-container-btn">
                    <button className="auth-btn" onClick={handleSubmit}>Cadastrar</button>
                </div>
            
                
            </div>
        </div>
    );
};
