import { AppDataSource } from "./data-source";
import express from 'express';
import bodyParser from 'body-parser';

import usario from './routes/usuario';
import categoria from './routes/categoria'
import mensagens from './routes/mensagens'
import salas from './routes/salas'

const app = express();
const port = 5555;
app.use(express.json());

AppDataSource.initialize().then(async () => {
    console.log('Conexão com o banco de dados estabelecida');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/usuarios', usario);
    app.use('/categorias', categoria);
    app.use('/mensagens', mensagens);
    app.use('/salas', salas);

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}).catch(error => {
    throw error
})