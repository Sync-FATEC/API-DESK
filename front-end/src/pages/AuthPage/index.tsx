import { Login } from '../Login';
import { Register } from '../Register';
import './auth.css'

export const AuthPage = () => {
    return (
        <div className="auth-page">
            <Login />
            <Register />
        </div>
    );
};
