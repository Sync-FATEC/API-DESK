export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: 3, name: 'José', email: 'jose@gmail.com', tipoUsuario: 'U' }
        };
    },
    signin: async (email: string, password: string) => {
        return {
            user: { id: 3, name: 'José', email: 'jose@gmail.com', tipoUsuario: 'U' },
            token: '123456789'
        };
    },
    logout: async () => {
        return { status: true };
    }
});
