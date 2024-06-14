import { useState } from "react";
import axios from "axios";
import logo from '../../assets/img/logo.svg';
import logoAzul from  "../../assets/img/logo-header.svg";
import { useNavigate } from "react-router-dom";
import { cadastradoCpf, cadastradoEmailSenha, success, warning } from "../../components/Swal/swal";

export const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [nomeError, setNomeError] = useState('');
    const [cpfError, setCpfError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [senhaError, setSenhaError] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const navigate = useNavigate();

    const handleNome = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNome = e.target.value;

        if (!newNome || !validateNome(newNome)) {
            setNomeError('Nome inválido!');
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
            setEmailError('Preencha um e-mail válido');
            setIsValid(false);
        } else {
            setEmailError('');
            setIsValid(true);
        }
    };

    const handleSenha = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSenha = e.target.value;
        setSenha(newSenha);

        if (!validateSenha(newSenha) && newSenha.length < 8) {
            setSenhaError('Preencha uma senha válida');
            setIsValid(false);
        } else {
            setSenhaError('');
            setIsValid(true);
        }
    };

    const handleCpf = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCpf = formatCPF(e.target.value);

        if (!newCpf) {
            setCpfError('CPF inválido!');
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
        const senhaRegex = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?/~`|-]{8,255}$/;
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
                    'tipoUsuario': 'U',
                    'Turno': ''
                });

                if (response.data === 'Usuário já cadastrado') {
                    cadastradoEmailSenha();
                    setEmail('');

                } else if (response.data === 'CPF inválido') {
                    warning('CPF inválido!');
                    setCpf('');

                } else if (response.data === 'CPF já cadastrado') {
                    cadastradoCpf();
                    setCpf('');

                } else {
                    success('Cadastrado com sucesso!');
                    navigate('/login')
                };
            } catch (error) {
                console.log(error);
                warning('Erro criando cliente!');
            };
        } else {
            warning('Corrija os campos!');
        };
    };
    return (
        <div className='containerPrincipal'>
            <aside>
                <img className='logo' src={logo} alt="logo" />
                <h1 className='title'>Bem-vindo ao Service Desk</h1>
                <h2 className='title'>Acesse sua conta agora</h2>

                <form className="formAside" action="/login">
                    <button className='botaoAside'>
                        Entrar
                    </button>
                </form>
            </aside>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <div className="form">
                    <img className='mobile' id="logo" src={logoAzul} alt="logo" />
                        <h2 className="formTitle">Crie sua conta</h2>
                        <h3 className='formTitle2'>Cadastre seus dados</h3>

                        <div className="formInput">
                            <input
                                className={nome !== "" ? "has-val input" : "input"}
                                type="text"
                                value={nome}
                                onChange={handleNome}
                            />
                            <div className="">{nomeError}</div>
                            <label className="labelInput" htmlFor="nome">Digite seu nome</label>
                        </div>

                        <div className="formInput">
                            <input
                                className={email !== "" ? "has-val input" : "input"}
                                type="email"
                                value={email}
                                onChange={handleEmail}
                            />
                            <div className="">{emailError}</div>
                            <label className="labelInput" htmlFor="email">Digite seu e-mail</label>
                        </div>

                        <div className="formInput">
                            <input
                                className={cpf !== "" ? "has-val input" : "input"}
                                type="text"
                                value={cpf}
                                onChange={handleCpf}
                            />
                            <div className="">{cpfError}</div>
                            <label className="labelInput" htmlFor="cpf">Digite seu CPF</label>
                        </div>
                        

                       
                        <div className="formInput">
                        <div className="password-input-container">
                            <input
                                className={senha !== "" ? "has-val input" : "input"}
                                type={isPasswordVisible ? "text" : "password"}
                                value={senha}
                                onChange={handleSenha}
                            />
                             <span
                                    className="password-toggle-icon"
                                    onClick={togglePasswordVisibility}
                                >
                                    {isPasswordVisible ? <span className="material-symbols-outlined">
                                        visibility_off
                                    </span> : <span className="material-symbols-outlined">
                                        visibility
                                    </span>}
                                </span> 
                                </div>
                            <div className="">{senhaError}</div>
                            <label className="labelInput" htmlFor="Password">Digite sua senha</label>
                        </div>

                        <button type="submit" value="Cadastrar" className="formBtn">Cadastrar</button>
                        <a className="mobile" id="link" href="/login">Já tem uma conta? Clique aqui!</a>
                    </div>
                </form>
            </div>
        </div>
    );

};