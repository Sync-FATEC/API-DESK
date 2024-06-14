import React, { useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { Toast, warning } from '../../components/Swal/swal';
import './esqueceuSenha.css';
import { useNavigate } from 'react-router-dom';
import logoAzul from "../../assets/img/logo-header.svg";

const EsqueceuSenha: React.FC = () => {
    const api = useApi();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailError(e.target.value ? '' : 'Campo de e-mail obrigatório');
        setEmail(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {


        try {
          e.preventDefault();
          if (!email) {
              setEmailError('Campo de e-mail obrigatório');
              return;
          }
            const response = await api.mandarToken(email);
            console.log(response);
            
            if (response === 'Usuário inexistente') {
                warning('Erro ao enviar e-mail de recuperação, usuário inexistente');
            } else {
                Toast.fire({
                    icon: 'success',
                    title: 'E-mail de recuperação enviado com sucesso!',
                }).then(() => {
                    navigate('/login');
                });
            }
        } catch (error) {
            console.error(error);
            warning('Erro ao enviar e-mail de recuperação');
        }
    };

    return (
        <div className="forgot-container">
            <div className="forgot-formContainer">
                <form onSubmit={handleSubmit}>
                <div className='containerLogo'>
                        <button className="btnVoltar" onClick={() => navigate('/login')}>
                            <span className="material-symbols-outlined">
                                arrow_back_ios
                            </span>
                        </button>
                        <div>
                            <img className='logoEsqueciSenha' src={logoAzul} alt="logo" />

                        </div>
                    </div>
                    <h2>Esqueceu a senha?</h2>
                    <p>Insira seu e-mail para receber um link de recuperação.</p>
                    <div className="formInputSenha">
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Digite seu e-mail"
                        />
                        <div className="forgot-errorMessage">{emailError}</div>
                    </div>
                    <button className="formBtn" type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EsqueceuSenha;
