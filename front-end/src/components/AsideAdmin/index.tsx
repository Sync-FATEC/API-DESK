import React, { useState, useEffect } from 'react';
import './AsideAdmin.css';
import ClientesAdm from '../ClientesAdm';
import {CadastroTecnico} from '../CadastroTecnico';

export const AsideAdmin: React.FC<{
    onPageChange: (title: string) => void;
    initialSelectedOption: string;
}> = ({ onPageChange, initialSelectedOption }) => {
    const [selectedOption, setSelectedOption] = useState(initialSelectedOption);

    useEffect(() => {
        setSelectedOption(initialSelectedOption);
    }, [initialSelectedOption]);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onPageChange(option);
        
    };
    return (
        <div className="containerAside">
            <div className="asideLinks">
                <div className={selectedOption === 'Técnico' ? 'selectedOption' : 'option'} onClick={() => handleOptionClick('Cadastro de Técnico')}>Técnico</div>
                <div className={selectedOption === 'Clientes' ? 'selectedOption' : 'option'} onClick={() => handleOptionClick('Clientes')}>Clientes</div>
                <div className={selectedOption === 'Categoria' ? 'selectedOption' : 'option'} onClick={() => handleOptionClick('Categoria')}>Categoria</div>
                <div className={selectedOption === 'Tipos de problemas' ? 'selectedOption' : 'option'} onClick={() => handleOptionClick('Tipos de problemas')}>Tipos de problemas</div>
                <div className={selectedOption === 'Equipamento' ? 'selectedOption' : 'option'} onClick={() => handleOptionClick('Equipamento')}>Equipamento</div>
                <div className={selectedOption === 'Salas' ? 'selectedOption' : 'option'} onClick={() => handleOptionClick('Salas')}>Salas</div>
                <div className={selectedOption === 'FAQ' ? 'selectedOption' : 'option'} onClick={() => handleOptionClick('FAQ')}>FAQ</div>
                <div className={selectedOption === 'Base de conhecimento' ? 'selectedOption' : 'option'} onClick={() => handleOptionClick('Base de conhecimento')}>Base de conhecimento</div>
                <div className={selectedOption === 'Templates de finalização' ? 'selectedOption' : 'option'} onClick={() => handleOptionClick('Templates de finalização')}>Templates de finalização</div>
            </div>
            <div className="content">
                {selectedOption && (
                    <div className="selected-content">
                        {selectedOption === 'Cadastro de Técnico' && <CadastroTecnico/>}
                        {selectedOption === 'Clientes' && <ClientesAdm />}
                    </div>
                )}
            </div>
        </div>
    );
};
