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
('F', 'Tela do computador/notebook piscando ou sem imagem', 'Verifique se o cabo de vídeo está conectado firmemente ao computador e ao monitor. Tente usar outro monitor. Atualize os drivers de vídeo. Se nenhuma das soluções anteriores funcionar, entre em contato com o suporte técnico.', 1),
('F', 'Programa não abre', 'Tente reinstalar o programa. Verifique se o computador atende aos requisitos mínimos para executar o programa. Tente desativar outros programas que podem estar causando conflito. Se nenhuma das soluções anteriores funcionar.', 2),
('F', 'Computador com vírus ou malware', 'Instale um antivírus, se ainda não tiver um. Atualize o antivírus para a versão mais recente. Execute uma varredura completa do sistema com o antivírus. Se o antivírus encontrar alguma ameaça, siga as instruções para removê-la.', 2),
('F', 'Computador travando', 'Feche os programas que você não está usando ou reinicie o computador. Desfragmentar o disco rígido. Se nenhuma das soluções anteriores funcionar, entre em contato com o suporte técnico.', 1),
('F', 'Conexão lenta ou instável', 'Reinicie o modem e o roteador. Verifique se há cabos danificados ou soltos. Afaste o roteador de aparelhos eletrônicos que podem causar interferência. Reduza a quantidade de dispositivos conectados à rede.', 3),
('F', 'Sem conexão à internet', 'Certifique-se de que o roteador e o modem estejam ligados e funcionando corretamente. Verifique se os cabos de rede estão conectados corretamente no roteador, modem e computador. Se os cabos estiverem danificados.', 3),
('F', 'Erro de autenticação no computador/notebook', 'Certifique-se de escolher o usuário correto e digitar a senha corretamente. A senha pode ser maiúscula e minúscula, portanto, digite-a com cuidado. Se nenhuma das soluções anteriores funcionar.', 2),
('F', 'Impressora ligada, mas não imprime', 'Certifique-se de que o cabo USB (ou outro cabo de conexão) esteja conectado corretamente à impressora e ao computador. Certifique-se de que a impressora correta esteja selecionada como impressora padrão no seu computador.', 1),
('F', 'Impressora faz barulhos estranhos', 'Abra a impressora e verifique se há papel preso nos roletes ou em outras áreas da impressora. Limpe a impressora de acordo com as instruções do fabricante. Inspecione a impressora em busca de peças danificadas que possam estar causando barulho.', 1),
('F', 'TV com tela preta ou sem sinal', 'Certifique-se de que o cabo HDMI esteja conectado firmemente em ambas as portas (PC/notebook e TV) e que não esteja danificado. Experimente outro cabo HDMI se possível. Utilize o controle remoto da TV para alternar entre as entradas.', 1),
('F', 'Som ausente na TV', 'Verifique se o som está ligado no PC/notebook e na TV. Certifique-se de que a saída de áudio no PC/notebook esteja configurada para a porta HDMI. Verifique se a TV está configurada para receber som da entrada HDMI', 1),
('F', 'Problemas de imagem projetor', 'Ajuste o foco do projetor usando o anel de foco na lente. Certifique-se de que a resolução da fonte (computador, notebook, etc.) esteja compatível com a resolução nativa do projetor. Verifique a conexão entre o projetor e a fonte', 1),
('B', 'Teclado não funciona', 'Verifique se o teclado está corretamente conectado. Teste o teclado em outro computador para verificar se o problema é físico. Se não funcionar, considere substituir o teclado.', 1),
('B', 'Sobreaquecimento do computador', 'Certifique-se de que as saídas de ar não estão bloqueadas. Limpe os filtros de poeira e verifique se os ventiladores estão funcionando corretamente. Se o problema persistir, aplique pasta térmica nova ao processador.', 1),
('B', 'Erro de aplicação', 'Verifique se o software está atualizado. Tente reinstalar o aplicativo. Se o erro persistir, restaure o sistema para uma configuração anterior.', 2),
('B', 'Falha na atualização do sistema operacional', 'Verifique a conexão com a Internet e o espaço disponível em disco. Desative temporariamente o antivírus e tente atualizar novamente. Se falhar, utilize a ferramenta de reparo do sistema.', 2),
('B', 'Conexão de rede instável', 'Reinicie o roteador e o modem. Verifique se os cabos de rede estão bem conectados e sem danos. Teste a conexão em outro dispositivo para isolar o problema.', 3),
('B', 'Falha na conexão Wi-Fi', 'Verifique se o dispositivo está dentro do alcance do sinal Wi-Fi. Reinicie o roteador. Altere o canal de transmissão no setup do roteador para evitar interferências.', 3),
('B', 'Falha no disco rígido', 'Faça backup dos seus dados imediatamente se possível. Execute ferramentas de diagnóstico para verificar a saúde do disco. Se necessário, substitua o disco.', 1),
('B', 'Problemas com a placa de vídeo', 'Atualize os drivers da placa de vídeo. Verifique se há superaquecimento. Se o problema continuar, teste a placa em outro computador ou substitua-a.', 1),
('B', 'Sistema operacional não inicia', 'Verifique possíveis erros exibidos e busque soluções específicas. Tente iniciar em modo de segurança e realizar um reparo do sistema.', 2),
('B', 'Crashes frequentes em aplicativos', 'Atualize os aplicativos e o sistema operacional. Verifique conflitos entre software e execute diagnósticos de memória e CPU.', 2),
('B', 'Baixa velocidade de internet', 'Teste a velocidade da internet usando ferramentas online. Compare com a velocidade contratada. Se estiver consistentemente baixa, contate o provedor de serviços.', 3),
('B', 'Problema de DNS', 'Altere o servidor DNS nas configurações de rede para um servidor mais confiável como o Google DNS ou OpenDNS. Reinicie a rede após as alterações.', 3),
('T', 'Finalização de Ticket', 'Realizadas as execuções necessárias no equipamento. Por favor, verifique se o problema foi resolvido.', 1),
('T', 'Confirmação de Reparo', 'Confirmamos que o problema relacionado ao hardware foi resolvido. Solicitamos que continue a monitorar o equipamento e nos informe se houver qualquer outro problema.', 1),
('T', 'Agradecimento por Contato', 'Obrigado por entrar em contato com nosso suporte técnico. Seu problema de hardware foi resolvido, mas caso necessite de mais assistência, sinta-se à vontade para nos contactar novamente.', 1),
('T', 'Finalização de Ticket', 'As atualizações e correções necessárias foram aplicadas com sucesso. Por favor, confirme se tudo está operando normalmente.', 2),
('T', 'Verificação de Funcionamento', 'Todas as verificações de software foram concluídas e o sistema está funcional. Por favor, avise-nos se houver mais alguma questão.', 2),
('T', 'Encerramento com Agradecimento', 'Este ticket está sendo fechado após a resolução do seu problema de software. Agradecemos sua paciência e colaboração durante o processo.', 2),
('T', 'Finalização de Ticket', 'A rede foi restaurada e está estável. Continuaremos monitorando e qualquer anormalidade será prontamente tratada.', 3),
('T', 'Instruções de Monitoramento', 'A configuração de rede foi ajustada. Solicitamos que monitore a conectividade e nos informe se experimentar alguma instabilidade.', 3),
('T', 'Agradecimento e Disponibilidade', 'Agradecemos por usar nosso suporte de redes. Ficamos à disposição para futuras necessidades ou suporte adicional.', 3);


