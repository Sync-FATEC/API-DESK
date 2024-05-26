<h1 style="text-align: center;">📈 Relatório </h1>
<h2>📌 Sprint 03</h2>
    <ul>
        <li><strong>Adicionar Anotações aos Tickets:</strong>
            <ul>
                <li>Permitir que clientes e técnicos adicionem informações ou façam perguntas adicionais diretamente na interface do ticket.</li>
            </ul>
        </li>
        <li><strong>Escalonamento de Chamados:</strong>
            <ul>
                <li>Implementar funcionalidade de escalonamento de chamados para técnicos de nível superior ou específicos, permitindo a seleção do técnico apropriado com base na área de conhecimento necessária.</li>
            </ul>
        </li>
        <li><strong>Filtragem de Chamados por Prioridade:</strong>
            <ul>
                <li>Desenvolver filtros na interface de visualização de tickets para selecionar chamados por prioridade, com lógica de filtragem de dados baseada nessa prioridade.</li>
            </ul>
        </li>
        <li><strong>Gerenciamento de Acessos de Técnico:</strong>
            <ul>
                <li>Criar painéis de controle para gestão de acessos e edição de informações dos técnicos, incluindo a lógica para gestão das informações e configuração de estruturas para armazenamento.</li>
            </ul>
        </li>
        <li><strong>Visualização e Atualização de Status de Ticket:</strong>
            <ul>
                <li>Permitir que clientes visualizem o status do ticket na interface do sistema e que técnicos atualizem o status dos chamados, com registro automático de tempo e alertas de SLA.</li>
            </ul>
        </li>
        <li><strong>Definição de SLA por Tipo de Chamado:</strong>
            <ul>
                <li>Criar uma interface para configuração e ajuste dos SLAs para diferentes tipos de chamados, com lógica para gerenciar e aplicar os SLAs configurados.</li>
            </ul>
        </li>
        <li><strong>Gerenciamento da Base de Conhecimento:</strong>
            <ul>
                <li>Desenvolver uma interface para inserir e gerenciar o conteúdo na base de conhecimento, com lógica para armazenamento do conteúdo e configuração do banco de dados.</li>
            </ul>
        </li>
        <li><strong>Gerenciamento de Turnos dos Técnicos:</strong>
            <ul>
                <li>Permitir que o administrador visualize e ajuste os turnos dos técnicos, com lógica para gerenciamento de escalas e turnos.</li>
            </ul>
        </li>
        <li><strong>Criação de Templates de Mensagens:</strong>
            <ul>
                <li>Criar uma interface para criação e gestão de templates de respostas e finalização, com funcionalidades para armazenar e aplicar os templates criados.</li>
            </ul>
        </li>
        <li><strong>Seleção de Ticket para Atendimento:</strong>
            <ul>
                <li>Desenvolver uma interface para visualização do técnico responsável pelo ticket e uma função para atribuição automática do ticket ao técnico selecionado.</li>
            </ul>
        </li>
    </ul>

<h2>📌DoR (Definition of Ready): Sprint 04</h2>

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
            <td>Como administrador, quero ter acesso a gráficos detalhados das quantidades de atendimentos por categoria, níveis do técnico e prioridade, para que eu possa visualizar tendências, identificar áreas de melhoria e tomar decisões baseadas em dados para aprimorar nossos serviços ou produtos.</td>
            <td>O administrador deve poder acessar uma seção específica do dashboard onde os gráficos detalhados estão localizados. Os gráficos devem exibir dados por categoria e níveis do técnico e prioridade.</td>
            <td>8</td>
            <td>Desenvolver a interface do usuário para exibir os gráficos e Integrar uma biblioteca de gráficos para exibir dados detalhados de atendimentos por categoria e níveis do técnico.</td>
            <td>Criar endpoints que forneçam dados de atendimentos por categoria e níveis do técnico para os gráficos.</td>
            <td>Garantir que o banco de dados tenha a estrutura necessária para armazenar e consultar dados de atendimentos por categoria e níveis do técnico.</td>
        </tr>
        <tr>
            <td>Como administrador, quero acessar um dashboard com relatórios detalhados por meio de gráficos, para que eu possa analisar o desempenho do serviço de suporte, a eficiência da equipe e monitorar o SLA.</td>
            <td>O sistema deve fornecer um dashboard acessível ao administrador, exibindo relatórios detalhados por meio de gráficos. O dashboard deve incluir um acompanhamento do SLA (Acordo de Nível de Serviço), exibindo o percentual de chamados resolvidos dentro do prazo estabelecido.</td>
            <td>5</td>
            <td>Desenvolver a interface do usuário para exibir os gráficos e Integrar uma biblioteca de gráficos para exibir dados detalhados do SLA.</td>
            <td>Criar endpoints que forneçam dados do SLA para os gráficos.</td>
            <td>Garantir que o banco de dados tenha a estrutura necessária para armazenar e consultar dados do SLA.</td>
        </tr>
        <tr>
            <td>Como usuário, caso eu esqueça a minha senha quero que tenha um campo de redefinir a mesma.</td>
            <td>Deve haver uma opção clara e acessível na tela de login para redefinir a senha. Ao selecionar a opção de redefinir a senha, o usuário receberá um link no seu e-mail cadastrado para iniciar o processo de redefinição de senha.</td>
            <td>5</td>
            <td>Adicionar o link "Esqueceu a senha?" abaixo dos campos de login.</td>
            <td>Desenvolver um endpoint que receba o e-mail do usuário e envie um link de redefinição de senha.</td>
            <td>Garantir que a tabela de usuários possa lidar com solicitações de redefinição de senha.</td>
        </tr>
    </tbody>
</table>




<h3>Mockups</h3>

<h3>Cliente</h3>
<img src="https://github.com/Sync-FATEC/API-DESK/raw/main/assets/53847691/cc1cda5f-9079-4f71-bea0-bc397a4f935e">

<h3>Administrador</h3>
<img src="https://github.com/Sync-FATEC/API-DESK/raw/main/assets/53847691/2931e1f5-18c1-479d-8dd7-dacdc27050f1">

<h3>Técnico</h3>
<img src="https://github.com/Sync-FATEC/API-DESK/raw/main/assets/53847691/1887efb0-21e2-4b24-8ac6-3648549e1ae1">

<h3>Modelo de Dados</h3>
<img src="https://github.com/Sync-FATEC/API-DESK/blob/main/doc/docs_sprints/sprint02/BDLogico.jpg">
