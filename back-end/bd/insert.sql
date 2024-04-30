-- Inserts para a tabela Categorias
INSERT INTO Categorias (categoria, tipoTecnico)
VALUES ('Hardware', '1'),
       ('Software', '2'),
       ('Redes', '3');

-- Inserts para a tabela salas
INSERT INTO salas (numeroSala, indentificacao)
VALUES (101, 'Sala de Reuniões'),
       (102, 'Laboratório de Informática'),
       (103, 'Sala de Servidores');

-- Inserts para a tabela equipamentos
INSERT INTO equipamentos (equipamento, sla, prioridade, salaID, categoriaID)
VALUES ('Computador', 3, 'Alta', 1, 1),
       ('Roteador', 2, 'Média', 2, 3),
       ('Impressora', 4, 'Baixa', 3, 1);

-- Inserts para a tabela mensagens
INSERT INTO mensagens (tipoMensagem, titulo, mensagem, categoriaID)
VALUES ('F', 'Manutenção Programada', 'Haverá uma manutenção na rede na próxima semana.', 3),
       ('B', 'Atualização de Software', 'Será realizada uma atualização nos sistemas na sexta-feira.', 2),
       ('F', 'Manutenção Programada', 'Haverá uma manutenção na rede na próxima semana.', 3),
       ('T', 'Manutenção Programada', 'Haverá uma manutenção na rede na próxima semana.', 3);