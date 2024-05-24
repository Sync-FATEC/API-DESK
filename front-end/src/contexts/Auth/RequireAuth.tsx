import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useApi";

export const RequireAuth = ({ children, tipoUsuario, pagina }: { children: JSX.Element, tipoUsuario: string[] | string, pagina: string | null }) => {
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
    
    
    if (pagina === 'home') {
        if (user) {
            if (user.tipoUsuario === 'U') {
                return <Navigate to="/cliente" />;
            } else if (user.tipoUsuario === 'A') {
                return <Navigate to="/admin" />;
            } else {
                return <Navigate to="/tecnico" />;
            }
        }
    }

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
