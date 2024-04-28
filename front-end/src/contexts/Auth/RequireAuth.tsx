import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children, tipoUsuario }: { children: JSX.Element, tipoUsuario: string }) => {
    const { user, signout } = useContext(AuthContext);

    if (!user || user.tipoUsuario !== tipoUsuario) {
        signout();
        return <Navigate to="/login" />;
    }
    return <>{children}</>;
};