export default interface IMensagens {
    mensagemID: number;
    tipoMensagem: string;
    titulo: string;
    mensagem: string;
    categoria: {
        categoria: string;
        tipoTecnico: string;
        categoriaID: number;
    };
}