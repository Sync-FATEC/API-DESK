import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useApi } from "../../hooks/useApi";
import logo from '../../assets/img/logo.svg';
import logoAzul from  "../../assets/img/logo-header.svg";
import { useNavigate } from "react-router-dom";
import { loginSenhaEmail, LoginTecnicoHorario, Toast, warning } from "../../components/Swal/swal";

export const Login = () => {
  const api = useApi();
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [emailError, setEmailErrorText] = useState('');
  const [senhaError, setSenhaErrorText] = useState('');
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

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
      const data = await api.signin(email, senha);
      if (data === "O técnico não pode acessar o sistema nesse horário") {
        LoginTecnicoHorario();
        setSenha('');
      } else if (isLogged) { 
        if (data && data.usuario.tipoUsuario) {
          switch (data.usuario.tipoUsuario) {
            case 'U':
              Toast.fire({
                icon: "success",
                title: "Logado com sucesso!"
              })
              navigate('/cliente');
              break;
            case '1':
            case '2':
            case '3':
              Toast.fire({
                icon: "success",
                title: "Logado com sucesso!"
              })
              navigate('/tecnico');
              break;
            case 'A':
              Toast.fire({
                icon: "success",
                title: "Logado com sucesso!"
              })
              navigate('/admin');
              break;
            default:
              break;
          }
        } else {
          loginSenhaEmail();
          setSenha('');
        }
    } else {
      loginSenhaEmail();
      setSenha('');
    }
  } catch (error) {
      console.error(error);
      warning('Verifique suas informações.');
      setSenha('');
    }
  };

  return (
    <div className='containerPrincipal'>
        <aside>
            <img className='logo' src={logo} alt="logo" />
            <h1 className="title">Bem-vindo ao Service Desk</h1>
            <h2 className="title">Cadastre sua conta agora</h2>

            <form className="formAside" action="/cadastro">
                <button className='botaoAside'>
                    Cadastrar
                </button>
            </form>
        </aside>
        <div className="formContainer">
            <form onSubmit={handleSubmitLogin}>
                <div className="form">
                <img className='mobile' id="logo" src={logoAzul} alt="logo" />
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
                    <div className="password-input-container">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            value={senha}
                            onChange={handleSenhaLogin}
                            placeholder=" "
                        />
                         <span
                                    className="password-toggle-icon"
                                    onClick={togglePasswordVisibility}
                                >
                                    {isPasswordVisible ? <span className="material-symbols-outlined">
                                        visibility_off
                                    </span> : <span className="material-symbols-outlined">
                                        visibility
                                    </span>}
                                </span>
                                </div>
                        <div className="errorMessage">{senhaError}</div>
                        <label className="labelInput" htmlFor="password">Digite sua senha</label>
                        <a href="/esqueceu-senha" className="forgot-password-link">Esqueceu a senha?</a>
                    </div>
                    <button className="formBtn">Entrar</button>
                    <a className="mobile" id="link" href="/cadastro">Não tem uma conta? Clique aqui</a>
                </div>
            </form>
        </div>
    </div>
  );
}
