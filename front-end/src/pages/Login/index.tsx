import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginInterface from "./loginInterface";
import Swal from "sweetalert2";
import { Aside } from "../../components/Aside";

export function redirecionarUsuario(tipoUser: string, navigate: any) {

  switch (tipoUser) {
    case '1':
      navigate('/clientes');
      break;
    case '2':
      navigate('/clientes');
      break;
    case '3':
      navigate('/clientes');
      break;
    default:
      break;
  };
};

export default function Login(props: loginInterface) {
  const [email, setEmail] = useState(props.email || '');
  const [senha, setSenha] = useState(props.senha || '');
  const [, setMode] = useState(true);
  const [emailError, setEmailErrorText] = useState('');
  const [senhaError, setSenhaErrorText] = useState('');

  const navigate = useNavigate()

  const handleEmailLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!validateEmail(newEmail)) {
      setEmailErrorText('Formato de e-mail errado!');
      setMode(false);
    } else {
      setEmailErrorText('');
      setMode(true);
    };
  };

  const handleSenhaLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSenha = e.target.value;
    setSenha(newSenha);

    if (!validateSenha(newSenha) && newSenha.length > 20) {
      setSenhaErrorText('Capacidade maxima de caracteres atingida!');
      setMode(false);
    } else {
      setSenhaErrorText('');
      setMode(true);
    };
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateSenha = (senha: string): boolean => {
    const senhaRegex = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?/~`|-]{1,20}$/;
    return senhaRegex.test(senha);
  };

  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    let formIsValid = true;

    if (formIsValid) {
      try {
        const response = await axios.post('http://localhost:5555/usuarios/autenticar', {
          email: email,
          senha: senha
        });
      
        if (response.data === 'auth') {
          success();
          navigate('/clientes');
        } else if (response.data === 'Senha incorreta' || response.data === 'inexistente') {
          errorSwal('Usuário inexistente ou senha incorreta');
          setSenha('');
        } else {
          warning('Erro inesperado, por favor tente novamente mais tarde.')
          setEmail('');
          setSenha('');
        };
      } catch (error) {
        console.error(error);
        warning('Verifique suas informações.');
        setSenha('');
      };
    } else {
      warning('Erro do sistema! Por favor volte mais tarde.');
      setEmail('');
      setSenha('');
    };
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

  const success = () => {
    Swal.fire({
      title: 'Logado com sucesso!',
      icon: 'success',
      confirmButtonText: 'OK'
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