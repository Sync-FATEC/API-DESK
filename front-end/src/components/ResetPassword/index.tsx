import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { Toast, warning } from '../../components/Swal/swal';
import './resetPassword.css';

export const ResetPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const api = useApi();
  const navigate = useNavigate();
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNovaSenha(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmarSenha(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      setError('Token inválido');
      return;
    }

    if (novaSenha !== confirmarSenha) {
      setError('As senhas não coincidem');
      return;
    }

    try {
      const response = await api.resetPassword(token, novaSenha);
      if (response.message === 'Senha redefinida com sucesso') {
        Toast.fire({
          icon: 'success',
          title: 'Senha redefinida com sucesso!',
        });
        navigate('/login');  // Redireciona para a página de login após a redefinição bem-sucedida
      } else {
        warning('Erro ao redefinir senha');
      }
    } catch (error) {
      console.error(error);
      warning('Erro ao redefinir senha');
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-formContainer">
        <form onSubmit={handleSubmit}>
          <h2>Redefinir Senha</h2>
          <div className="reset-password-formInput">
            <input
              type="password"
              value={novaSenha}
              onChange={handlePasswordChange}
              placeholder="Nova Senha"
            />
            <input
              type="password"
              value={confirmarSenha}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirmar Senha"
            />
            <div className="reset-password-errorMessage">{error}</div>
          </div>
          <button className="reset-password-formBtn" type="submit">
            Redefinir
          </button>
        </form>
      </div>
    </div>
  );
};
