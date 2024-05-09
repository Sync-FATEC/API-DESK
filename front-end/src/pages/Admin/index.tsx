import React, { useState } from 'react';
import { AsideAdmin } from '../../components/AsideAdmin';
import { Header } from '../../components/Header';
import './admin.css';

export const Admin: React.FC = () => {
    const [pageTitle, setPageTitle] = useState('Configuração do Desk'); 
    const [initialSelectedOption] = useState(pageTitle); 

    const handlePageChange = (title: string) => {
        setPageTitle(title); 
    };

    return (

        <div className='containerAdmin'>
            <Header />
            <div className="titleAdmin">{pageTitle}</div> 
            <div className="containerPrincipal">
                <AsideAdmin onPageChange={handlePageChange} initialSelectedOption={initialSelectedOption} />
                <div className="content">
                </div>
            </div>
        </div>
    );
};
