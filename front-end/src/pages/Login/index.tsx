import React, { useState, useContext } from "react";
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
        const data = await api.validateToken(email);
        if (data && data.tipoUsuario) {
          switch (data.tipoUsuario) {
            case 'U':
              navigate('/cliente');
              break;
            case '1':
            case '2':
            case '3':
              navigate('/tecnico');
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
    <div className='containerPrincipal'>
      <Aside />
      <div className="formContainer">
        <form onSubmit={handleSubmitLogin}>
          <div className="form">
            <h2 className="formTitle">Entre na sua conta</h2>
            <h3 className="formTitle2">Insira seus dados</h3>
            <div className="formInput">
              <input
                type="text"
                value={email}
                onChange={handleEmailLogin}
                placeholder=" "
              />
              <div className="errorMessage">{emailError}</div>
              <label className="labelInput" htmlFor="email">Digite seu e-mail</label>
            </div>
            <div className="formInput">
              <input
                type="password"
                value={senha}
                onChange={handleSenhaLogin}
                placeholder=" "
              />
              <div className="errorMessage">{senhaError}</div>
              <label className="labelInput" htmlFor="password">Digite sua senha</label>
            </div>
            <button className="formBtn">Logar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
