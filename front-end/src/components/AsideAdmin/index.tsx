import React, { useState, useEffect } from 'react';
import './AsideAdmin.css';
import ClientesAdm from '../TecnicoAdm';
import {CadastroTecnico} from '../CadastroTecnico';
import SalaAdm from '../SalaAdm';
import EquipamentoAdm from '../EquipamentoAdm';
import CategoriaAdm from '../CategoriaAdm/categoriaAdm';
import FaqAdm from '../FaqAdm';
import BaseDeConhecimento from '../BaseDeConhecimento';
import TemplateADM from '../TemplateAdm';

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
                <div className={selectedOption === 'Técnico' ? 'selectedOption' : 'option'} onClick={() => handleOptionClick('Cadastro de Técnico')}>Cadastro técnico</div>
                <div className={selectedOption === 'Clientes' ? 'selectedOption' : 'option'} onClick={() => handleOptionClick('Clientes')}>Técnicos</div>
                <div className={selectedOption === 'Categoria' ? 'selectedOption' : 'option'} onClick={() => handleOptionClick('Categoria')}>Categoria</div>
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
                        {selectedOption === 'Salas' && <SalaAdm />}
                        {selectedOption === 'Equipamento' && <EquipamentoAdm />}
                        {selectedOption === 'Categoria' && <CategoriaAdm />}
                        {selectedOption === 'FAQ' && <FaqAdm />}
                        {selectedOption === 'Base de conhecimento' && <BaseDeConhecimento />}
                        {selectedOption === 'Templates de finalização' && <TemplateADM />}
                    </div>
                )}
            </div>
        </div>
    );
};
