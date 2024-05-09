export type IAnotacao = {
    dataAnotacao: string;
    anotacao: string;
    usuario: {
        nome: string;
        cpf: string;
        email: string;
        senha: string;
        tipoUsuario: string;
        turno: string | null;
        usuarioID: number;
    };
    anotacoesID: number;
};