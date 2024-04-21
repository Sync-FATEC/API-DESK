import './header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <h1>Service Desk</h1>
            </div>
            <div className="header-right">
                <button className="header-button">Tickets</button>
                <button className="header-button">FAQ</button>
                <div className="header-divider" />
                <button className="header-button">Meu Usuário</button>
            </div>
        </header>
    );
};
