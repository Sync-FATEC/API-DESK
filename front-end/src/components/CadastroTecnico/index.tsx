import { useState } from "react";
import axios from "axios";
import './cadastroTecnico.css'
import { erro, success, warning } from "../Swal/swal";

export const CadastroTecnico = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [categoria, setCategoria] = useState('');
    const [turno, setTurno] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [nomeError, setNomeError] = useState('');
    const [cpfError, setCpfError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [senhaError, setSenhaError] = useState('');

    const handleNome = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNome = e.target.value;

        if (!newNome || !validateNome(newNome)) {
            setNomeError('Nome inválido! Por favor digite novamente.');
            setNome('');
            setIsValid(false);
        } else {
            setNome(newNome);
            setIsValid(true);
            setNomeError('');
        }
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (!validateEmail(newEmail)) {
            setEmailError('Por favor, preencha um e-mail válido.');
            setIsValid(false);
        } else {
            setEmailError('');
            setIsValid(true);
        }
    };

    const handleSenha = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSenha = e.target.value;
        setSenha(newSenha);

        if (!validateSenha(newSenha) && newSenha.length > 20) {
            setSenhaError('Por favor, preencha uma senha válida.');
            setIsValid(false);
        } else {
            setSenhaError('');
            setIsValid(true);
        }
    };

    const handleCpf = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCpf = formatCPF(e.target.value);

        if (!newCpf) {
            setCpfError('CPF inválido! Por favor digite novamente.');
            setCpf('')
            setIsValid(false);
        } else {
            setCpf(newCpf);
            setIsValid(true);
            setCpfError('');
        };
    };

    const validateNome = (nome: string): boolean => {
        const nomeRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/i;
        return nomeRegex.test(nome);
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const validateCpf = (cpf: string): boolean => {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return cpfRegex.test(cpf);
    };

    const formatCPF = (cpf: string): string => {
        const cleaned = cpf.replace(/\D/g, '');
        let formated = cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
        return formated;
    };

    const validateSenha = (senha: string): boolean => {
        const senhaRegex = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?/~`|-]{1,20}$/;
        return senhaRegex.test(senha);
    };

    const cpfSemFormatacao = cpf.replace(/[^\d]/g, '');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let formIsValid = true;

        if (nome === '' || !validateNome(nome)) {
            setNomeError('Preencha seu nome.');
            formIsValid = false;
        } else {
            setNomeError('');
        };

        if (email === '' || !validateEmail(email)) {
            setEmailError('Preencha seu e-mail.');
            formIsValid = false
        } else {
            setEmailError('');
        };

        if (senha === '' || !validateSenha(senha)) {
            setSenhaError('Preencha sua senha.');
            formIsValid = false;
        } else {
            setSenhaError('');
        };

        if (cpf === '' || !validateCpf(cpf)) {
            setCpfError('Preencha seu CPF.');
            formIsValid = false;
        } else {
            setCpfError('');
        };

        if (formIsValid && isValid) {
            try {
                const response = await axios.post('http://localhost:5555/usuarios/cadastrar', {
                    'nome': nome,
                    'cpf': cpfSemFormatacao,
                    'email': email,
                    'senha': senha,
                    'tipoUsuario': categoria,
                    'turno': turno
                });

                if (response.data === 'Usuário já cadastrado') {
                    warning('Técnico já cadastrado!')
                    setEmail('');

                } else if (response.data === 'CPF inválido') {
                    erro('CPF inválido!');
                    setCpf('');

                } else if (response.data === 'CPF já cadastrado') {
                    warning('CPF já cadastrado!')
                    setCpf('');

                } else {
                    success('Técnico cadastrado com sucesso!');
                    setNome('');
                    setEmail('');
                    setCpf('');
                    setSenha('');
                    setCategoria('');
                    setTurno('');
                };
            } catch (error) {
                console.log(error);
                erro('Erro criando técnico!');
            };
        } else {
            warning('Corrija os campos!');
        };
    };

    return (
        <div className='adminContainer'>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <div className="formTecnico">
                        <div className="formInput">
                            <label className="labelInput" htmlFor="nome">Digite o nome do técnico</label>
                            <input
                                className={nome !== "" ? "has-val input" : "input"}
                                type="text"
                                value={nome}
                                onChange={handleNome}
                            />
                            <div className="">{nomeError}</div>
                        </div>
    
                        <div className="formInput">
                            <label className="labelInput" htmlFor="email">Digite o E-mail do técnico</label>
                            <input
                                className={email !== "" ? "has-val input" : "input"}
                                type="email"
                                value={email}
                                onChange={handleEmail}
                            />
                            <div className="">{emailError}</div>
                        </div>
    
                        <div className="formInput">
                            <label className="labelInput" htmlFor="cpf">Digite o CPF do técnico</label>
                            <input
                                className={cpf !== "" ? "has-val input" : "input"}
                                type="text"
                                value={cpf}
                                onChange={handleCpf}
                            />
                            <div className="">{cpfError}</div>
                        </div>
    
                        <div className="formInput">
                            <label className="labelInput" htmlFor="Password">Digite a senha do técnico</label>
                            <input
                                className={senha !== "" ? "has-val input" : "input"}
                                type="password"
                                value={senha}
                                onChange={handleSenha}
                            />
                            <div className="">{senhaError}</div>
                        </div>

    
                    <div className="formSelect">
                        <div className="formInput">
                            <label className="labelInputTecnico" htmlFor="categoria">Categoria do técnico</label>
                            <select className="selectCategoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                <option value=""></option>
                                <option value="1">Suport N1</option>
                                <option value="2">Suporte N2</option>
                                <option value="3">Suporte N3</option>
                            </select>
                        </div>
                        <div className="formInput">
                            <label className="labelInputTecnico" htmlFor="turno">Turno do técnico</label>
                            <select className="selectCategoria" value={turno} onChange={(e) => setTurno(e.target.value)}>
                                <option value=""></option>
                                <option value="M">Manhã</option>
                                <option value="T">Tarde</option>
                                <option value="N">Noite</option>
                            </select>
                        </div>
                    </div>
                </div>

                    <div className="tecnicoBtn">
                        <button type="submit" value="Cadastrar" className="formBtn">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
    
};
