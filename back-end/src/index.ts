import { AppDataSource } from "./data-source";
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import usario from './routes/usuario';
import categoria from './routes/categoria'
import mensagens from './routes/mensagens'
import salas from './routes/salas'
import equipamentos from './routes/equipamentos'
import tickets from './routes/tickets'

const app = express();
const port = 5555;
app.use(express.json());

AppDataSource.initialize().then(async () => {
    console.log('Conexão com o banco de dados estabelecida');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors())
    app.use('/usuarios', usario);
    app.use('/categorias', categoria);
    app.use('/mensagens', mensagens);
    app.use('/salas', salas);
    app.use('/equipamentos', equipamentos);
    app.use('/tickets', tickets);

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}).catch(error => {
    throw error
})