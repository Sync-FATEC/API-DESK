import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data === 'Senha incorreta') {
            return false
        }
        else if (data === 'Usuario inexistente'){
            return false
        }
        
        setUser(data.usuario);
        setToken(JSON.stringify(data.usuario));
         
        return true;
        }

    const signout = async () => {
        console.log("signout está sendo executada.");
        setUser(null);
        setToken('');
        window.location.href = "/login";
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}