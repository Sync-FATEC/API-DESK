import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useApi";

export const RequireAuth = ({ children, tipoUsuario }: { children: JSX.Element, tipoUsuario: string[] | string }) => {
    const { user } = useContext(AuthContext);
    const api = useApi();
    const [verificacaoConcluida, setVerificacaoConcluida] = useState(false);
    const [logado, setLogado] = useState(false);

    useEffect(() => {
        const validarToken = async () => {
            if (user) {
                try {
                    const data = await api.validateToken(user.token);
                    setLogado(Boolean(data));
                    console.log('data', data);
                } catch (error) {
                    console.error('Erro ao validar token:', error);
                    setLogado(false);
                } finally {
                    // Marca a verificação como concluída, independentemente do resultado
                    setVerificacaoConcluida(true);
                }
            } else {
                setLogado(false);
                // Marca a verificação como concluída se não houver usuário
                setVerificacaoConcluida(true);
            }
        };

        validarToken();
    }, [api, user]);

    useEffect(() => {
        localStorage.setItem('authToken', JSON.stringify(user));
    }, [user]);

    console.log('logado', logado);
    
    if (!verificacaoConcluida) {
        return <div>Verificando autenticação...</div>;
    }

    if (!logado) {
        return <Navigate to="/login" />;
    }

    if (typeof tipoUsuario === 'string' && (!user || user.tipoUsuario !== tipoUsuario)) {
        return <Navigate to="/login" />;
    }

    if (Array.isArray(tipoUsuario) && (!user || !tipoUsuario.includes(user.tipoUsuario))) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
}
