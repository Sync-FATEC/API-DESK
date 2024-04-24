import React, { useContext } from "react";
import { Login } from "../../pages/Login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children, tipoUsuario }: { children: JSX.Element, tipoUsuario: string }) => {
    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Login />;
    }

    if (auth.user.tipoUsuario !== tipoUsuario) {
        return <div>Permissão insuficiente para acessar esta página.</div>;
    }

    return children;
}
