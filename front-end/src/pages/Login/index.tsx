import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import './login.css'

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/');
            } else {
                alert("Não deu certo.");
            }
        }
    }

    return (
        <div className="auth-container">
          <div className="auth-form">
            <h2 className="auth-title">Bem vindo</h2>
      
            <div className="auth-input-group">
              <input
                type="text"
                value={email}
                onChange={handleEmailInput}
                placeholder="Digite seu e-mail"
              />
            </div>
      
            <div className="auth-input-group">
              <input
                type="password"
                value={password}
                onChange={handlePasswordInput}
                placeholder="Digite sua senha"
              />
            </div>
      
            <button className="auth-btn" onClick={handleLogin}>Logar</button>
          </div>
        </div>
      );
}
