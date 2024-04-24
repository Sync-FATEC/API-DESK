import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Aside } from "../../components/Aside";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [emailError, setEmailErrorText] = useState('');
  const [senhaError, setSenhaErrorText] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailErrorText('');
  };

  const handleSenhaLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
    setSenhaErrorText('');
  };

  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Verifica se o email e a senha foram fornecidos
    if (!email || !senha) {
      warning('Preencha todos os campos');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5555/usuarios/autenticar', {
        email: email,
        senha: senha
      });

      const data = response.data;
      if (data && data.tipoUsuario) {
        switch (data.tipoUsuario) {
          case 'U':
            navigate('/cliente');
            break;
          case '2':
            navigate('/tecnicos');
            break;
          case '3':
            navigate('/admin');
            break;
          default:
            break;
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
              <div>{emailError}</div>
              <label className="auth-input-label" htmlFor="email">Digite seu e-mail</label>
            </div>
            <div className="auth-input-group">
              <input
                type="password"
                value={senha}
                onChange={handleSenhaLogin}
                placeholder=" "
              />
              <div>{senhaError}</div>
              <label className="auth-input-label" htmlFor="password">Digite sua senha</label>
            </div>
            <button className="auth-btn">Logar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
