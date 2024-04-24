import React, { useState, useContext } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Aside } from "../../components/Aside";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import Swal from "sweetalert2";
import { useApi } from "../../hooks/useApi";


export const Login = () => {
  const api = useApi();
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [emailError, setEmailErrorText] = useState('');
  const [senhaError, setSenhaErrorText] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!value) {
      setEmailErrorText('Campo de e-mail obrigatório');
    } else {
      setEmailErrorText('');
    }
  };

  const handleSenhaLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSenha(value);
    if (!value) {
      setSenhaErrorText('Campo de senha obrigatório');
    } else {
      setSenhaErrorText('');
    }
  };

  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!email || !senha) {
      warning('Preencha todos os campos');
      return;
    }
  
    try {
      const isLogged = await auth.signin(email, senha);
      if (isLogged) {
        const data = await api.validateToken(localStorage.getItem('authToken') ?? '');
        if (data && data.user.tipoUsuario) {
          switch (data.user.tipoUsuario) {
            case 'U':
              navigate('/cliente');
              break;
            case '1':
            case '2':
            case '3':
              navigate('/tecnicos');
              break;
            case 'A':
              navigate('/admin');
              break;
            default:
              break;
          }
        } else {
          errorSwal('Usuário inexistente ou senha incorreta');
          setSenha('');
        }
      } else {
        errorSwal('Usuário inexistente ou senha incorreta');
        setSenha('');
      }
    } catch (error) {
      console.error(error);
      warning('Verifique suas informações.');
      setSenha('');
    }
  };
  
  const warning = (message: string) => {
    Swal.fire({
      title: 'Aviso!',
      text: message,
      icon: 'warning'
    });
  };
  
  const errorSwal = (message: string) => {
    Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error'
    });
  };


  return (
    <div className='auth-container-principal'>
      <Aside />
      <div className="auth-container">
        <form onSubmit={handleSubmitLogin}>
          <div className="auth-form">
            <h2 className="auth-title">Entre na sua conta</h2>
            <h3 className="auth-title2">Insira seus dados</h3>
            <div className="auth-input-group">
              <input
                type="text"
                value={email}
                onChange={handleEmailLogin}
                placeholder=" "
              />
              <div className="error-message">{emailError}</div>
              <label className="auth-input-label" htmlFor="email">Digite seu e-mail</label>
            </div>
            <div className="auth-input-group">
              <input
                type="password"
                value={senha}
                onChange={handleSenhaLogin}
                placeholder=" "
              />
              <div className="error-message">{senhaError}</div>
              <label className="auth-input-label" htmlFor="password">Digite sua senha</label>
            </div>
            <button className="auth-btn">Logar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
