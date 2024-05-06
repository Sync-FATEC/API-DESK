import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Anotacoes } from "../entity/anotacoes";
import { ticketsRepositorio } from "./tickets";
import { usuariosRepositorio } from "./usuarios";

export const anotacoesRepositorio = AppDataSource.getRepository(Anotacoes)

export const criarAnotacoes = async (anotacao: string, ticketsID: number, usuarioID: number) => {
    try {
        const dataAnotacao = new Date();
        const ticket = await ticketsRepositorio.findOne({ where: {ticketsID: ticketsID} });
        const usuario = await usuariosRepositorio.findOne({ where: {usuarioID: usuarioID} });

        if (!ticket || !usuario) {
            console.log('Ticket inexistente ou usuário inexistente');
            return 'Ticket inexistente ou usuário inexistente'
        }

        const anotacoes = new Anotacoes(dataAnotacao, anotacao, ticket, usuario);
        await anotacoesRepositorio.save(anotacoes);
        console.log('Anotação criada com sucesso');
        return anotacoes
    } catch (error) {
        console.error('Erro na criação de uma nova anotação', error);
        return 'Erro na criação de uma nova anotação'
    }
}

export const deleteAnotacoes = async (anotacoesID: number) => {
    try {
        const anotacoes = await anotacoesRepositorio.findOne({ where: {anotacoesID: anotacoesID} });
        if (anotacoes) {
            await anotacoesRepositorio.remove(anotacoes);
            console.log('Anotação removida com sucesso');
            return 1
        } else {
            console.log('Anotação inexistente');
            return 'Anotação inexistente'
        }
    } catch (error) {
        console.error('Erro na exclusão de uma anotação\n', error);
        return 'Erro na exclusão de uma anotação'
    }
}