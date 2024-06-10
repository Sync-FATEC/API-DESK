import React, { useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { Toast, warning } from '../../components/Swal/swal';
import './esqueceuSenha.css';
import { useNavigate } from 'react-router-dom';

const EsqueceuSenha: React.FC = () => {
    const api = useApi();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailError(e.target.value ? '' : 'Campo de e-mail obrigatório');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {


        try {
          e.preventDefault();
          if (!email) {
              setEmailError('Campo de e-mail obrigatório');
              return;
          }
            const response = await api.mandarToken(email);
            console.log(response)
            if (response.message === 'Email enviado com sucesso') {
                Toast.fire({
                    icon: 'success',
                    title: 'E-mail de recuperação enviado com sucesso!',
                }).then(() => navigate('/login'));
            } else {
                warning('Erro ao enviar e-mail de recuperação');
            }
        } catch (error) {
            console.error(error);
            warning('Erro ao enviar e-mail de recuperação1');
        }
    };

    return (
        <div className="forgot-container">
            <div className="forgot-formContainer">
                <form onSubmit={handleSubmit}>
                    <h2>Esqueceu a senha?</h2>
                    <p>Insira seu e-mail para receber um link de recuperação.</p>
                    <div className="forgot-formInput">
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Digite seu e-mail"
                        />
                        <div className="forgot-errorMessage">{emailError}</div>
                    </div>
                    <button className="forgot-formBtn" type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EsqueceuSenha;
