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
                    setVerificacaoConcluida(true);
                }
            } else {
                setLogado(false);
                setVerificacaoConcluida(true);
            }
        };

        validarToken();
    }, [api, user]);

    const authToken = localStorage.getItem('authToken');
    if (authToken !== null && authToken !== '') {
        const parsedUser = JSON.parse(authToken);
        if (parsedUser) {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useContext(AuthContext).user = parsedUser;
        }
    }

    localStorage.setItem('authToken', JSON.stringify(user))

    console.log('logado', logado);
    console.log(user);
    
    
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
