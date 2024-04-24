export type User = {
    usuarioID?: number;
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    tipoUsuario: string; 
    turno?: string | null; 
}
