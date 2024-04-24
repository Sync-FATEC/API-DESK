import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

export const Error = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signout();
        navigate('/login'); 
    };

    return (
        <div>
            <div className="ticket-container">
                <div>{auth.user?.name}, lamentamos informar que você não possui autorização para acessar esta página.</div>
                {auth.user && <button className='header-button' onClick={handleLogout}>Sair</button>}

            </div>
        </div>
    );
};
