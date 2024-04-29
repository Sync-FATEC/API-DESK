import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children, tipoUsuario }: { children: JSX.Element, tipoUsuario: string[] | string }) => {
    let { user, signout } = useContext(AuthContext);
    let mudarUser = user;
    
    const authToken = localStorage.getItem('authToken');
    if (authToken !== null && authToken !== '') {
        const parsedUser = JSON.parse(authToken);
        if (parsedUser) {
            mudarUser = parsedUser;
            useContext(AuthContext).user = mudarUser;
        }
    }

    localStorage.setItem('authToken', JSON.stringify(user))
    
    
    if (typeof tipoUsuario === 'string' && (!user || user.tipoUsuario !== tipoUsuario)) {
        return <Navigate to="/login" />;
    }

    if (Array.isArray(tipoUsuario) && (!user || !tipoUsuario.includes(user.tipoUsuario))) {
        return <Navigate to="/login" />;
    }
    return <>{children}</>;
}
