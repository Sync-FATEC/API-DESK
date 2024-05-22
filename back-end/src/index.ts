import { AppDataSource } from "./data-source";
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';

import usuario from './routes/usuario';
import categoria from './routes/categoria';
import mensagens from './routes/mensagens';
import salas from './routes/salas';
import equipamentos from './routes/equipamentos';
import tickets from './routes/tickets';
import anotacoes from './routes/anotacoes';
import { Server } from 'socket.io';

const app = express()
const port = 5555


AppDataSource.initialize().then(async () => {
    console.log('Conexão com o banco de dados estabelecida');
    
    app.use(express.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/usuarios', usuario);
    app.use('/categorias', categoria);
    app.use('/mensagens', mensagens);
    app.use('/salas', salas);
    app.use('/equipamentos', equipamentos);
    app.use('/tickets', tickets);
    app.use('/anotacoes', anotacoes);
    const server = http.createServer(app);
    const io = new Server(server, {
        cors: {
            origin: '*',
        }
    });

    io.on('connection', (socket) => {
        console.log('Novo cliente conectado');

        socket.on('joinRoom', (room) => {
            socket.join(room);

        });

        socket.on('sendMessage', (message, room, tipoUsuario, nome, data) => {
            io.to(room).emit('message', message, tipoUsuario, nome, data);
            console.log(data);
            
            console.log('Mensagem enviada');
            
        });

        socket.on('disconnect', () => {
            console.log('Cliente desconectado');
        });
    });

    server.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}).catch(error => {
    throw error;
});