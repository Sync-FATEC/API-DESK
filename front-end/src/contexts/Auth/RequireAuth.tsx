import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useApi";

export const RequireAuth = ({ children, tipoUsuario }: { children: JSX.Element, tipoUsuario: string }) => {
    const { user, signout } = useContext(AuthContext);
    const api = useApi();
    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const authToken = localStorage.getItem('authToken');
                if (!authToken) {
                    throw new Error('Token de autenticação não encontrado no localStorage');
                }

                const response = await api.validateToken(authToken);
                setUserData(response);
            } catch (error) {
                console.error(error);
                signout();
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [api, signout]);

    if (loading) {
        // Renderizar um componente de carregamento enquanto verifica a autenticação
        return <div>Carregando...</div>;
    }

    if (!userData || userData.tipoUsuario !== tipoUsuario) {    
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};
