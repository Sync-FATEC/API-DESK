import axios from 'axios'

export const useApi = () => ({
    validateToken: async (id: string) => {
        try {
            const response = await axios.get('http://localhost:5555/usuarios/procurar', {
                params: {
                    id: id
                }
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    signin: async (email: string, senha: string) => {
        try {
            const response = await axios.post('http://localhost:5555/usuarios/autenticar', {
                email: email,
                senha: senha
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    ,
    logout: async () => {
        return { status: true };
    }
});
