import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Toast, warning } from '../../components/Swal/swal';
import './resetPassword.css';
import axios from 'axios';

export const ResetPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [error, setError] = useState('');

  const validateSenha = (senha: string): boolean => {
    const senhaRegex = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?/~`|-]{8,255}$/;
    return senhaRegex.test(senha);
};

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

    if (!validateSenha(novaSenha)) {
      setError('A senha deve conter pelo menos 8 caracteres');
      return;
    }

    setError('');

    try {
      const response = await axios.put(`http://localhost:5555/usuarios/redefinir-senha/${token}/${novaSenha}`);
      console.log(response);
        Toast.fire({
          icon: 'success',
          title: 'Senha redefinida com sucesso!',
        }).then(() => navigate('/login'));
    } catch (error) {
      console.error(error);
      warning('Erro ao redefinir senha, tente novamente.');
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-formContainer">
        <form onSubmit={handleSubmit}>
          <h2>Redefinir Senha</h2>
          <div className="formInput">
            <input
              type="password"
              value={novaSenha}
              onChange={handlePasswordChange}
              placeholder="Nova Senha"
            />
              </div>
              <div className="formInput">
            <input
              type="password"
              value={confirmarSenha}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirmar Senha"
            />
            <div className="reset-password-errorMessage">{error}</div>
          </div>
          <button className="formBtn" type="submit">
            Redefinir
          </button>
        </form>
      </div>
    </div>
  );
};
