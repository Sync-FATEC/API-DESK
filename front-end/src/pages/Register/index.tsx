import { useState } from 'react';

import './register.css'

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
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
        console.log("E-mail:", email);
        console.log("Senha:", password);
    }

    return (
        <div className="auth-container"> 
            <div className="auth-form">
                <h2 className="auth-title">Crie sua conta</h2>
                <h3>Cadastre seus dados</h3>

                <div className="auth-input-group">
                    <input
                        className={name !== "" ? "has-val input" : "input"}
                        type="text"
                        value={name}
                        onChange={handleNameInput}
                        placeholder="Nome"
                    />
                    <span className="focus-input" data-placeholder="Nome"></span>
                </div>

                <div className="auth-input-group">
                    <input
                        className={email !== "" ? "has-val input" : "input"}
                        type="email"
                        value={email}
                        onChange={handleEmailInput}
                        placeholder="Email"
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="auth-input-group">
                    <input
                        className={password !== "" ? "has-val input" : "input"}
                        type="password"
                        value={password}
                        onChange={handlePasswordInput}
                        placeholder="Password"
                    />
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>

                <div className="auth-container-btn">
                    <button className="auth-btn" onClick={handleSubmit}>Cadastrar</button>
                </div>
            
                
            </div>
        </div>
    );
};
