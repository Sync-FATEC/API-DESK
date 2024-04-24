import { useState } from "react"; //React para receber as informações do form
import Swal from 'sweetalert2'; //Instalei este novo modulo para dar os alertas
import axios from "axios"; //Modulo para ligar com o banco
import { Aside } from "../../components/Aside";
import '../../pages/Cadastro/cadastro.css' //CSS da pagina
import cadastroClienteInterface from "./interfaceUsuario";
import { useNavigate } from "react-router-dom";

export function Cadastro(props: cadastroClienteInterface ){ //função pra captar o cadastro do interface criado, além das validações
    const [nome, setNome] = useState(props.nome || '');
    const [cpf, setCpf] = useState(props.cpf || '');
    const [email, setEmail] = useState(props.email || '');
    const [senha, setSenha] = useState(props.senha || '');
    const [isValid, setIsValid] = useState(true);
    const [nomeError, setNomeError] = useState('');
    const [cpfError, setCpfError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [senhaError, setSenhaError] = useState('')
    
    const navigate = useNavigate()

    const handleNome = (e: React.ChangeEvent<HTMLInputElement>) => { //Função para passar o nome e verificar
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
 
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => { //Função para passar o email e verificar
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
   
    const handleSenha = (e: React.ChangeEvent<HTMLInputElement>) => { //Função para passar a senha e verificar
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
 
    const validateNome = (nome: string): boolean => { //Função de validação do nome
        const nomeRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/i;
        return nomeRegex.test(nome);
    };
 
    const validateEmail = (email: string): boolean => { //Função de validação do email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };
 
    const validateCpf = (cpf: string): boolean => { //Função de validação do CPF
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return cpfRegex.test(cpf);
    };
 
    const formatCPF = (cpf: string): string => { //Função de validação do Formato do CPF
        const cleaned = cpf.replace(/\D/g, '');
        let formated = cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
        return formated;
    };
 
    const validateSenha = (senha: string): boolean => { //Função de validação da senha
        const senhaRegex = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?/~`|-]{1,20}$/;
        return senhaRegex.test(senha);
    };  

    const cpfSemFormatacao = cpf.replace(/[^\d]/g, ''); // Remove todos os caracteres não numéricos

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => { //Função para se enviar as informações captadas
        event.preventDefault();
 
        let formIsValid = true;
 
        //Verifica se está tudo correto com o form para se enviar
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
 
        if (formIsValid && isValid) { //Caso de bug, tire o isValid ou adicione o '||' no lugar do '&&'
            try { // Verifica se o usuário já existe
                const response = await axios.post('http://localhost:5555/usuarios/cadastrar', { //Coloca a URL do Route que vocês criaram pro cadastro
                'nome': nome,
                'cpf': cpfSemFormatacao,
                'email': email,
                'senha': senha,
                'tipoUsuario': 'U',
                'Turno': ''
                });
 
                if (response.data === 'Usuário já cadastrado') { //Caso o usuário ja exista, exibe um alerta
                    Swal.fire({
                        title: 'Error!',
                        text: 'E-mail já existente!',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        setEmail('');
                    });
                } else if (response.data === 'CPF inválido'){
                    Swal.fire({
                        title: 'Error!',
                        text: 'CPF já existente!',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        setCpf('');
                    });
                } else if (response.data === 'CPF já cadastrado'){
                    Swal.fire({
                        title: 'Error!',
                        text: 'CPF já cadastrado!',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        setCpf('');
                    });
                } else { //Mostrar sucesso caso o usuário não exista
                    success();
                    navigate('/login')
                };
            } catch (error) { //Caso o try n funcione na criação do cliente ele ira aparecer este erro
                console.log(error);
                warning('Erro criando cliente!');
            };
        } else { //Caso o formulario n esteja sendo enviado corretamente aparecera esta mensagem
            warning('Corrija os campos!');
        };
    };
 
    const warning = (message: string) => { //Função da mensagem de aviso que aparecera quando der algum erro
        Swal.fire({
            title: "Aviso!",
            text: message,
            icon: "warning",
        });
    };
 
    const success = () => { //Função da mensagem de sucesso quando conseguir criar o cliente
        Swal.fire({
            title: "Cadastro concluido!",
            text: "Informações cadastradas com sucesso!",
            icon: "success",
            confirmButtonText: "OK"
        });
    };
 
    return ( // Falta criar as divs de função de erro, para que quando der um erro no form eu colocar a função de {nomeError} ou qualquer um de outro campo ali existente
        <div className='auth-container-principal'>
 
        <Aside />
 
        <div className="auth-container">
 
        <form onSubmit={handleSubmit}>
            <div className="auth-form">
                <h2 className="auth-title">Crie sua conta</h2>
                <h3 className='auth-title2'>Cadastre seus dados</h3>
 
                <div className="auth-input-group">
                    <input
                        className={nome !== "" ? "has-val input" : "input"}
                        type="text"
                        value={nome}
                        onChange={handleNome}
                        placeholder="Nome"
                    />
                    <div className="">{nomeError}</div>
                    <label className="auth-input-label" htmlFor="nome">Digite seu nome</label>
                </div>

                <div className="auth-input-group">
                    <input
                        className={email !== "" ? "has-val input" : "input"}
                        type="email"
                        value={email}
                        onChange={handleEmail}
                        placeholder="Email"
                    />
                    <div className="">{emailError}</div>
                    <label className="auth-input-label" htmlFor="email">Digite seu e-mail</label>
                </div>

                <div className="auth-input-group">
                    <input
                        className={cpf !== "" ? "has-val input" : "input"}
                        type="text"
                        value={cpf}
                        onChange={handleCpf}
                        placeholder="CPF"
                    />
                    <div className="">{cpfError}</div>
                    <label className="auth-input-label" htmlFor="cpf">Digite seu CPF</label>
                </div>
 
                <div className="auth-input-group">
                    <input
                        className={senha !== "" ? "has-val input" : "input"}
                        type="password"
                        value={senha}
                        onChange={handleSenha}
                        placeholder="Senha"
                    />
                    <div className="">{senhaError}</div>
                    <label className="auth-input-label" htmlFor="Password">Digite sua senha</label>
                </div>
 
                <div className="auth-container-btn">
                    <button type="submit" value="Cadastrar" className="auth-btn">Cadastrar</button>
                </div>
            </div>
        </form>
        </div>
    </div>
    );
};