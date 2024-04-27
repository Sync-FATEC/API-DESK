import { Header } from '../../components/Header';
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useContext } from "react";

export const Tecnico = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <Header />
            <div className="ticket-container">
                <div>Ola {auth.signin.name}</div>
            </div>
        </div>
    );
};
