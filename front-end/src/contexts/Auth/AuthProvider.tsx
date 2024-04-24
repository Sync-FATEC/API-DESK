import { useEffect, useState } from "react";
import axios from "axios"; 
import { AuthContextType, AuthContext } from "./AuthContext";
import { User } from "../../types/User";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                try {
                    const response = await axios.post('http://localhost:5555/usuarios/autenticar', { token: storageData });
                    if (response.data.user) {
                        setUser(response.data.user);
                    }
                } catch (error) {
                    console.error("Erro ao validar token:", error);
                }
            }
        }
        validateToken();
    }, []);

    const signin = async (email: string, password: string) => {
        try {
            const response = await axios.post('http://localhost:5555/usuarios/autenticar', { email, password });
            if (response.data.user && response.data.token) {
                setUser({ ...response.data.user, tipoUsuario: response.data.user.tipoUsuario }); 
                setToken(response.data.token);
                return true;
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
        return false;
    }
    
    const signout = () => {
        setUser(null);
        removeToken();
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    const removeToken = () => {
        localStorage.removeItem('authToken');
    }

    const contextValue: AuthContextType = { user, signin, signout };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
