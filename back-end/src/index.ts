import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async () => {
    console.log('Conexão com o banco de dados estabelecida');
}).catch(error => {
    throw error
})