-- Inserts para a tabela Categorias
INSERT INTO Categorias (categoria, tipoTecnico)
VALUES ('Hardware', '1'),
       ('Software', '2'),
       ('Redes', '3');

-- Inserts para a tabela salas
INSERT INTO salas (numeroSala, identificacao)
VALUES (101, 'Sala de Reuniões'),
       (102, 'Laboratório de Informática'),
       (103, 'Sala de Servidores');

-- Inserts para a tabela equipamentos
INSERT INTO equipamentos (equipamento, sla, prioridade, salaID, categoriasID)
VALUES 
	   ('Computador', 3, 'Alta', 1, 1),
	   ('Desktop', 3, 'Média', 1, 2),
	   ('Roteador', 3, 'Baixa', 1, 3),
       ('Computador', 3, 'Alta', 2, 1),
	   ('Desktop', 3, 'Média', 2, 2),
	   ('Roteador', 3, 'Baixa', 2, 3),
       ('Computador', 3, 'Alta', 3, 1),
	   ('Desktop', 3, 'Média', 3, 2),
	   ('Roteador', 3, 'Baixa', 3, 3);


INSERT INTO mensagens (tipoMensagem, titulo, mensagem, categoriaID)
VALUES 
('B', 'Tela do computador/notebook piscando ou sem imagem', 'Verifique se o cabo de vídeo está conectado firmemente ao computador e ao monitor. Tente usar outro monitor. Atualize os drivers de vídeo. Se nenhuma das soluções anteriores funcionar, entre em contato com o suporte técnico.', 1),
('B', 'Programa não abre', 'Tente reinstalar o programa. Verifique se o computador atende aos requisitos mínimos para executar o programa. Tente desativar outros programas que podem estar causando conflito. Se nenhuma das soluções anteriores funcionar.', 2),
('B', 'Computador com vírus ou malware', 'Instale um antivírus, se ainda não tiver um. Atualize o antivírus para a versão mais recente. Execute uma varredura completa do sistema com o antivírus. Se o antivírus encontrar alguma ameaça, siga as instruções para removê-la.', 2),
('B', 'Computador travando', 'Feche os programas que você não está usando ou reinicie o computador. Desfragmentar o disco rígido. Se nenhuma das soluções anteriores funcionar, entre em contato com o suporte técnico.', 1),
('B', 'Conexão lenta ou instável', 'Reinicie o modem e o roteador. Verifique se há cabos danificados ou soltos. Afaste o roteador de aparelhos eletrônicos que podem causar interferência. Reduza a quantidade de dispositivos conectados à rede.', 3),
('B', 'Sem conexão à internet', 'Certifique-se de que o roteador e o modem estejam ligados e funcionando corretamente. Verifique se os cabos de rede estão conectados corretamente no roteador, modem e computador. Se os cabos estiverem danificados.', 3),
('B', 'Erro de autenticação no computador/notebook', 'Certifique-se de escolher o usuário correto e digitar a senha corretamente. A senha pode ser maiúscula e minúscula, portanto, digite-a com cuidado. Se nenhuma das soluções anteriores funcionar.', 2),
('B', 'Impressora ligada, mas não imprime', 'Certifique-se de que o cabo USB (ou outro cabo de conexão) esteja conectado corretamente à impressora e ao computador. Certifique-se de que a impressora correta esteja selecionada como impressora padrão no seu computador.', 1),
('B', 'Impressora faz barulhos estranhos', 'Abra a impressora e verifique se há papel preso nos roletes ou em outras áreas da impressora. Limpe a impressora de acordo com as instruções do fabricante. Inspecione a impressora em busca de peças danificadas que possam estar causando barulho.', 1),
('B', 'TV com tela preta ou sem sinal', 'Certifique-se de que o cabo HDMI esteja conectado firmemente em ambas as portas (PC/notebook e TV) e que não esteja danificado. Experimente outro cabo HDMI se possível. Utilize o controle remoto da TV para alternar entre as entradas.', 1),
('B', 'Som ausente na TV', 'Verifique se o som está ligado no PC/notebook e na TV. Certifique-se de que a saída de áudio no PC/notebook esteja configurada para a porta HDMI. Verifique se a TV está configurada para receber som da entrada HDMI', 1),
('B', 'Problemas de imagem projetor', 'Ajuste o foco do projetor usando o anel de foco na lente. Certifique-se de que a resolução da fonte (computador, notebook, etc.) esteja compatível com a resolução nativa do projetor. Verifique a conexão entre o projetor e a fonte', 1);