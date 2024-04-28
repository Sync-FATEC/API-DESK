import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children, tipoUsuario }: { children: JSX.Element, tipoUsuario: string[] | string }) => {
    const { user, signout } = useContext(AuthContext);
    
    if (typeof tipoUsuario === 'string' && (!user || user.tipoUsuario !== tipoUsuario)) {
        signout();
        return <Navigate to="/login" />;
    }

    
    if (Array.isArray(tipoUsuario) && (!user || !tipoUsuario.includes(user.tipoUsuario))) {
        signout();
        return <Navigate to="/login" />;
    }
    return <>{children}</>;
};