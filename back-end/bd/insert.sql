-- Inserir alguns usuários
INSERT INTO Usuarios (nome, cpf, email, senha, tipoUsuario, turno)
VALUES
('João', '12345678901', 'joao@example.com', 'senha123', 'A', 'M'),
('Maria', '98765432101', 'maria@example.com', 'senha456', '1', 'T'),
('Pedro', '55544433322', 'pedro@example.com', 'senha789', 'U', NULL);
 
-- Inserir algumas categorias
INSERT INTO Categorias (categoria, tipoTecnico)
VALUES
('Hardware', '1'),
('Software', '2'),
('Redes', '3');
 
-- Inserir algumas salas
INSERT INTO Salas (numeroSala, indentificacao)
VALUES
(101, 'Sala de Reuniões'),
(102, 'Sala de Treinamento'),
(103, 'Sala de Servidores');
 
-- Inserir alguns equipamentos
INSERT INTO Equipamentos (tipoEquipamento, equipamento, sla, prioridade, salaID, categoriaID)
VALUES
('Notebook', 'Dell Latitude', NOW(), 1, 1, 1),
('Projetor', 'BenQ MX550', NOW(), 2, 2, 1),
('Switch', 'Cisco Catalyst 2960', NOW(), 3, 3, 3);
 
-- Inserir algumas mensagens
INSERT INTO Mensagens (tipoMensagem, titulo, mensagem, categoriaID)
VALUES
('1', 'Aviso Importante', 'Manutenção programada para hoje às 20:00', 2),
('2', 'Atualização de Software', 'Será realizada uma atualização de software amanhã às 3:00', 2),
('3', 'Problema de Rede', 'O servidor de email está fora do ar', 3);
 
-- Inserir alguns tickets
-- Inserir alguns tickets
INSERT INTO Tickets (dataAbertura, dataFechamento, titulo, descricao, status, categoriaID, equipamentosID, salaID, usuarioID, tipoTecnico)
VALUES
('2024-04-20 10:00:00', NULL, 'Problema de Conexão', 'Usuário relatou problemas de conexão à internet.', 'A', 3, 1, 1, 1, 'A'),
('2024-04-21 09:30:00', NULL, 'Problema com Impressora', 'Impressora não está imprimindo.', 'A', 1, 2, 2, 2, 'A'),
('2024-04-21 11:15:00', NULL, 'Solicitação de Licença', 'Usuário solicita licença para software específico.', 'A', 2, 3, NULL, NULL, 'A');