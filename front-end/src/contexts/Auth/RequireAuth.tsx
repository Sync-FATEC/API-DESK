import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";

export const RequireAuth = ({ children, tipoUsuario }: { children: JSX.Element, tipoUsuario: string[] | string }) => {
    let { user, signout } = useContext(AuthContext);

    const authToken = localStorage.getItem('authToken');
    if (authToken !== null && authToken !== '') {
        user = JSON.parse(authToken);
    }
    
    
    
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