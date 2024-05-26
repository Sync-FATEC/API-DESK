<h1 style="text-align: center;">📈 Relatório </h1>
<h2>📌Sprint 02</h2>
<ul>
   <li><strong>Cadastro de Usuários e Técnicos:</strong>
      <ul>
         <li>Criada interface de cadastro para clientes e técnicos.</li>
         <li>Implementada lógica de armazenamento dos dados de cadastro.</li>
         <li>Configuração das tabelas no banco de dados para cada tipo de usuário.</li>
      </ul>
   </li>
   <li><strong>Login Seguro:</strong>
      <ul>
         <li>Desenvolvimento de páginas de login seguro para administradores e técnicos.</li>
         <li>Armazenamento dos dados de login para cada tipo de usuário.</li>
         <li>Configuração das tabelas no banco de dados para armazenamento dos dados de login.</li>
      </ul>
   </li>
   <li><strong>Novo Ticket:</strong>
      <ul>
         <li>Criação de botões para abrir novos tickets.</li>
         <li>Implementação de funcionalidades para processar essas ações.</li>
         <li>Configuração do banco de dados para armazenar os dados dos tickets.</li>
      </ul>
   </li>
   <li><strong>Visualização de Tickets:</strong>
      <ul>
         <li>Desenvolvimento de páginas para listar todos os tickets abertos.</li>
         <li>Implementação de consultas e lógica para exibir os tickets relevantes para técnicos e clientes.</li>
         <li>Configuração de permissões para visualização de tickets conforme o tipo de usuário.</li>
      </ul>
   </li>
   <li><strong>Histórico:</strong>
      <ul>
         <li>Adição de funcionalidades para clientes acompanharem o status dos seus tickets.</li>
         <li>Desenvolvimento de páginas para exibir o histórico completo de tickets para clientes e administradores.</li>
         <li>Configuração do banco de dados e permissões para acesso aos históricos.</li>
      </ul>
   </li>
   <li><strong>FAQ e Cadastro de Equipamentos:</strong>
      <ul>
         <li>Implementação de interfaces para administradores cadastrarem soluções de problemas recorrentes no FAQ e equipamentos no sistema.</li>
         <li>Desenvolvimento de funcionalidades para gestão do FAQ e dos equipamentos.</li>
         <li>Configuração do banco de dados para armazenamento dos dados do FAQ e equipamentos.</li>
      </ul>
   </li>
</ul>
<h2>📌DoR (Definition of Ready): Sprint 03</h2>

<table>
    <thead>
        <tr>
            <th>User Story</th>
            <th>Critério de aceitação</th>
            <th>Estimativa em horas</th>
            <th>Tarefa Front</th>
            <th>Tarefa Back</th>
            <th>Tarefas BD</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Como cliente, quero poder adicionar mais informações ou fazer perguntas adicionais sobre o ticket por meio de anotações na interface do ticket</td>
            <td>Permitir que clientes adicionem informações adicionais ou façam perguntas diretamente através da interface do ticket.</td>
            <td>8</td>
            <td>Criar anotação na interface do sistema para adicionar informações e perguntas aos tickets</td>
            <td>Desenvolver lógica para receber e armazenar as novas anotações nos tickets existentes</td>
            <td>Configurar tabelas para suportar o armazenamento de anotações adicionais por ticket</td>
        </tr>
        <tr>
            <td>Como técnico, quero poder adicionar mais informações ou fazer perguntas adicionais sobre o ticket por meio de anotações na interface do ticket</td>
            <td>Permitir que técnicos adicionem informações adicionais ou façam perguntas diretamente através da interface do ticket.</td>
            <td>8</td>
            <td>Criar anotação na interface do sistema para adicionar informações e perguntas aos tickets</td>
            <td>Desenvolver lógica para receber e armazenar as novas anotações nos tickets existentes</td>
            <td>Configurar tabelas para suportar o armazenamento de anotações adicionais por ticket</td>
        </tr>
        <tr>
<<<<<<< HEAD
            <td>Como técnico, quero poder escalar chamados para um técnico de nível superior ou a um técnico específico, para chamados que requerem mais conhecimento.</td>
            <td>Implementar uma funcionalidade de escalonamento de chamados para técnicos de nível superior  ou a um técnico específico para sempre existir um técnico responsável, quando necessário, permitindo a seleção do técnico apropriado com base na área de conhecimento necessária.</td>
            <td>3</td>
            <td>Criar botão para mudar o escalamento do nível do chamado</td>
            <td>Criar função para realizar o escalamento de chamados para outro nível do suporte e a outro técnico</td>
=======
            <td>Como técnico, quero poder escalar chamados para um técnico de nível superior, para chamados que requerem mais conhecimento</td>
            <td>Implementar uma funcionalidade de escalonamento de chamados para técnicos de nível superior quando necessário, permitindo a seleção do técnico apropriado com base na área de conhecimento necessária.</td>
            <td>3</td>
            <td>Criar botão para mudar o escalamento do nível do chamado</td>
            <td>Criar função para realizar o escalamento de chamados para outro nível do suporte</td>
>>>>>>> sprint03
            <td>Configurar o banco de dados para armazenar os dados do ticket</td>
        </tr>
        <tr>
            <td>Como técnico, Quero poder filtrar chamados por prioridade, para que eu possa priorizar e resolver primeiro os chamados mais críticos.</td>
            <td>Funcionalidade de Filtragem por Prioridade: O sistema deve permitir que os técnicos filtrem chamados por prioridade (alta, média, baixa) na interface de gerenciamento de chamados.</td>
            <td>8</td>
            <td>Desenvolver filtros na interface de visualização de tickets para selecionar chamados por prioridade.</td>
            <td>Implementar lógica de filtragem de dados baseada em prioridade.</td>
            <td>Implementar lógica de filtragem de dados baseada em prioridade.</td>
        </tr>
        <tr>
            <td>Como administrador, quero poder gerenciar os acessos de técnico</td>
            <td>Gerenciamento de Acessos e Permissões: O administrador deve ter a capacidade de gerenciar os acessos do técnico, podendo editar as informações, como turno, categoria ou excluí-lo.</td>
            <td>8</td>
            <td>Criar painéis de controle para gestão de acessos e edição de informações dos técnicos</td>
            <td>Desenvolver lógica para a gestão das informações dos técnicos</td>
            <td>Configurar estruturas para gerenciar informações dos técnicos</td>
        </tr>
        <tr>
            <td>Como cliente, após abrir um ticket, quero acompanhar seu status na interface do sistema para ver se está "Aberto", "Em atendimento", "Pendente" e "Finalizado", além de quaisquer atualizações feitas pela equipe de suporte, para estar informado sobre o progresso do meu pedido.</td>
            <td>Visualização do Status do Ticket: Após abrir um ticket, o cliente deve poder visualizar seu status atual na interface do sistema, que pode ser "Abertos", "Em atendimento", "Pendente" e "Finalizados". Atualizações da Equipe de Suporte: Qualquer atualização feita pela equipe de suporte no ticket, incluindo mudanças de status ou comentários adicionais, deve ser visível para o cliente. Notificações de Atualização: O cliente deve receber notificações automáticas (na interface do sistema) sobre quaisquer mudanças ou atualizações no status do ticket.</td>
            <td>5</td>
            <td>Criar botão para mudar o status do ticket</td>
            <td>Implementar função para atualização de status do ticket</td>
            <td>Configurar gatilhos no bd para atualização de status do ticket</td>
        </tr>
        <tr>
            <td>Como técnico, quero poder atualizar o status dos chamados, para que o tempo de SLA seja gerenciado com base no tempo que o ticket permanece em atendimento, garantindo uma resposta e resolução dentro dos prazos acordados.</td>
            <td>Atualização de Status: Os técnicos devem ser capazes de atualizar o status dos chamados (por exemplo, "Aberto", "Atendendo", "Finalizado") diretamente no sistema. Registro Automático de Tempo: O sistema deve registrar automaticamente o tempo que cada chamado leva para mudar de status, especialmente do momento em que é aberto até ser marcado como resolvido. Avisos de SLA: Deve haver avisos ou alertas automáticos quando um chamado estiver próximo de ultrapassar os tempos de SLA estabelecidos, permitindo uma gestão proativa do tempo de resposta e resolução.</td>
            <td>8</td>
            <td>Implementar opções para técnicos mudarem o status dos chamados através da interface.</td>
            <td>Implementar opções para técnicos mudarem o status dos chamados através da interface.</td>
            <td>Adaptar o modelo de dados para registrar mudanças de status e tempos associados.</td>
        </tr>
        <tr>
            <td>Como administrador, quero definir e ajustar os tempos de SLA para diferentes tipos de chamados, para que possamos garantir um atendimento ágil e dentro das expectativas dos usuários.</td>
            <td>Definição de SLA por Tipo de Chamado: O administrador deve poder definir SLAs específicos para diferentes tipos de chamados, considerando a complexidade e a urgência associadas a cada um. Interface de Configuração de SLA: Deve existir uma interface intuitiva e de fácil uso para que o administrador possa definir e ajustar os SLAs, permitindo modificações rápidas conforme necessário.</td>
            <td>3</td>
            <td>Criar interface para configuração e ajuste dos SLAs para diferentes tipos de chamados</td>
            <td>Implementar lógica para gerenciar e aplicar os SLAs configurados.</td>
            <td>Configurar estruturas para armazenar as configurações de SLA.</td>
        </tr>
        <tr>
            <td>Como administrador, quero adicionar conteúdos relevantes à base de conhecimento, para que atendentes e técnicos tenham acesso a informações que auxiliem na resolução de chamados.</td>
            <td>O sistema deve fornecer uma interface simples e intuitiva para que o administrador possa adicionar novos conteúdos à base de conhecimento. Deve ser possível categorizar os conteúdos e adicionar tags relevantes para facilitar a busca e o acesso rápido por parte de atendentes e técnicos.</td>
            <td>2</td>
            <td>Criar interface para inserir e gerenciar o conteúdo na base de conhecimento.</td>
            <td>Implementar lógica para o armazenamento do conteúdo da base de conhecimento.</td>
            <td>Configurar banco de dados para armazenamento de dados da base de conhecimento.</td>
        </tr>
        <tr>
            <td>Como administrador, quero ter a capacidade de gerenciar e ajustar os turnos dos técnicos, para que eu possa assegurar uma cobertura eficiente do serviço e atender às demandas de trabalho de maneira equilibrada.</td>
            <td>O sistema deve permitir que o administrador visualize os turnos de todos os técnicos de forma clara e organizada. Deve ser possível ajustar os turnos dos técnicos manualmente, alterando as horas de início e término conforme necessário. Os ajustes nos turnos devem ser refletidos imediatamente no calendário de trabalho dos técnicos.</td>
            <td>8</td>
            <td>Criar botão para a programação e ajuste dos turnos dos técnicos.</td>
            <td>Desenvolver lógica para gerenciamento de escalas e turnos.</td>
            <td>Desenvolver lógica para gerenciamento de escalas e turnos.</td>
        </tr>
        <tr>
            <td>Como administrador, quero criar templates de mensagens de finalização de solução do serviço, para que a equipe possa agilizar a resolução de chamados comuns.</td>
            <td>O sistema deve permitir que o administrador crie e edite templates de mensagens de finalização de solução.</td>
            <td>1</td>
            <td>Criar interface para criação e gestão de templates de respostas e finalização.</td>
            <td>Implementar funcionalidades para armazenar e aplicar os templates criados.</td>
            <td>Configurar tabelas para armazenar os templates de respostas e mensagens de finalização.</td>
        </tr>
<<<<<<< HEAD
       <tr>
            <td>Como técnico, quero poder selecionar um ticket para atendimento, para que eu possa assumir a responsabilidade de resolver o problema reportado pelo cliente de forma eficiente e organizada.</td>
            <td>Ao selecionar um ticket para atendimento, este deve ser automaticamente marcado como "em atendimento" e atribuído a mim como o técnico responsável.</td>
            <td>6</td>
            <td>Criar interface para visualização do técnico responsável pelo ticket.</td>
            <td>Criar função para visualizar o técnico responsável pelo ticket.</td>
            <td>Configurar o banco de dados para armazenar os dados do ticket.</td>
        </tr>
=======
>>>>>>> sprint03
    </tbody>
</table>



<h3>Mockups</h3>

<h3>Cliente</h3>
<img src="https://github.com/Sync-FATEC/API-DESK/raw/main/assets/53847691/b2ce4c36-0c07-4937-88b3-49ca70fc5621">

<h3>Administrador</h3>
<img src="https://github.com/Sync-FATEC/API-DESK/raw/main/assets/53847691/b3407cce-b442-4061-92f3-be1d2a7db891">

<h3>Modelo de Dados</h3>
<img src="https://github.com/Sync-FATEC/API-DESK/blob/main/doc/docs_sprints/sprint02/BDLogico.jpg">
