<h1 style="text-align: center;">📈 Relatório </h1>
<h2>📌Sprint 01</h2>

<h3>Product Backlog:</h3>
<p>Tarefas prioritárias para alinhar o trabalho com os objetivos do projeto.</p>

<h3>Wireframe Navegável:</h3>
<p>Protótipo navegável abrangente e funcional.</p>

<h3>Documentação no GitHub:</h3>
<p>Documentação completa no GitHub, incluindo informações sobre equipe e tecnologias.</p>

<h3>DoR (Definition of Ready):</h3>
<p>Lista de critérios que devem ser atendidos antes que uma tarefa possa ser iniciada.</p>

<h3>DoD (Definition of Done):</h3>
<p>Lista de critérios que definem quando uma tarefa está concluída e pronta para entrega.</p>

<h2>📌DoR (Definition of Ready): Sprint 02</h2>

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
          <td>Como cliente, quero cadastrar na a interface do sistema de Service Desk para inserir minhas credenciais (usuário, CPF, email e senha) para iniciar os tickets</td>
          <td>Criar uma interface de cadastro no sistema de Service Desk que solicite as credenciais do usuário, como usuário, CPF, email e senha.
              O processo de verificação do email deve ser incluído para confirmar a autenticidade do cadastro.</td>
          <td>8</td>
          <td>Criar interface de cadastro contendo os campos de usuário, cpf, email e senha</td>
          <td>Armazenar dados de cadastro</td>
          <td>Configuração das tabelas do usuário cliente</td>
        </tr>
        <tr>
          <td>Como administrador, quero poder cadastrar novos técnicos no sistema, para que eles possam realizar login, acessar, gerenciar e resolver chamados técnicos.</td>
          <td>Permitir que administradores acessem a seção de gestão de usuários no sistema e adicionem novos técnicos.</td>
          <td>8</td>
          <td>Criar página de cadastro de técnico dentro do acesso do administrador</td>
          <td>Armazenar dados de cadastro</td>
          <td>Configuração das tabelas do usuário técnico</td>
        </tr>      
        <tr>
          <td>Como técnico, quero poder realizar login no sistema de gestão de chamados, para que eu possa acessar, gerenciar e resolver chamados técnicos.</td>
          <td>Desenvolver uma interface de login para técnicos que solicite email e senha e conceda acesso ao painel de chamados.</td>
          <td>5</td>
          <td>Criar página de login contendo os campos de usuário e senha</td>
          <td>Armazenar dados de login técnico</td>
          <td>Configuração das tabelas do usuário técnico</td>
        </tr>
        <tr>
          <td>Como administrador, quero realizar login de forma segura no sistema, para que eu possa gerenciar o sistema de gestão de chamados e acessar dados confidenciais.</td>
          <td>Desenvolver uma interface de login segura para administradores que verifique as credenciais e conceda acesso ao painel administrativo.</td>
          <td>5</td>
          <td>Criar página de login contendo os campos de usuário e senha</td>
          <td>Armazenar dados de login adm</td>
          <td>Configuração das tabelas do usuário adm</td>
        </tr>
        <tr>
          <td>Como cliente, quero acessar a interface de login do sistema de Service Desk para inserir minhas credenciais, para acessar minha conta e ver meus tickets.</td>
          <td>Desenvolver uma página de login para clientes que solicite email e senha.</td>
          <td>5</td>
          <td>Criar página de login contendo os campos de usuário e senha</td>
          <td>Armazenar dados de login cliente</td>
          <td>Configuração das tabelas do usuário cliente</td>
        </tr>
        <tr>
          <td>Como cliente, quero clicar em um botão "Novo Ticket" para abrir um formulário onde posso preencher informações sobre um novo problema ou solicitação, incluindo título, descrição, categoria, e enviá-lo para a equipe de suporte, para buscar solução para um novo problema ou necessidade.</td>
          <td>Desenvolver um botão "Novo Ticket" na interface do usuário que abra um formulário para preenchimento das informações necessárias, validando os dados antes do envio.</td>
          <td>8</td>
          <td>Criar interface para cadastro de tickets com os campos já definidos na user story</td>
          <td>Criar função de abertura de ticket para inserir as informações do problema</td>
          <td>Configurar o banco de dados para armazenar os dados do ticket</td>
        </tr>
        <tr>
          <td>Como técnico, quero acessar uma página com a lista de todos os chamados, para que eu possa ver todos os chamados abertos e suas informações relevantes.</td>
          <td>Desenvolver uma página que liste todos os chamados abertos com suas informações relevantes.</td>
          <td>3</td>
          <td>Criar interface com todos os tickets abertos ao técnico</td>
          <td>Desenvolver consulta de tickets abertos para técnico</td>
          <td>Configuração de visualização dos tickets abertos ao técnico</td>
        </tr>
        <tr>
          <td>Como cliente, quero que o processo de login inclua uma etapa de verificação da existência do meu CPF, para assegurar que apenas CPFs válidos e registrados tenham acesso, aumentando assim a segurança da minha conta contra acessos indevidos.</td>
          <td>Incluir uma etapa de verificação do CPF no processo de login.</td>
          <td>3</td>
          <td>Criar função para validar o CPF no cadastro</td>
          <td>Criar um verificador de cpf para não inserir dados inválidos ou inexistente</td>
          <td>Configurar o banco de dados para armazenar os dados do CPF</td>
        </tr>
        <tr>
          <td>Como cliente, após logar com sucesso, quero ser redirecionado para minha página inicial  para visualizar todos os tickets anteriores que abri e verificar o status atual de cada um, para ter um panorama do meu histórico de atendimento.</td>
          <td>Após o login, redirecionar o cliente para uma página inicial que exiba todos os tickets anteriores abertos pelo cliente, listando-os de forma organizada e incluindo detalhes como título, data de abertura, categoria e status atual.</td>
          <td>3</td>
          <td>Criar página inicial com as informações de todos os tickets do usuário logado</td>
          <td>Desenvolver lógica para exibição de tickets do usuário logado</td>
          <td>Configurar permissões de visualização de tickets para usuário logado</td>
        </tr>
        <tr>
          <td>Como administrador, quero cadastrar soluções para problemas recorrentes no FAQ, para que o cliente possa resolver sem a abertura de chamado </td>
          <td>Desenvolver uma interface para administradores cadastrarem soluções de problemas recorrentes no FAQ, incluindo informações detalhadas sobre a solução e passos para implementação.</td>
          <td>3</td>
          <td>Criar interface do ADM poder gerenciar as perguntas do FAQ</td>
          <td>Desenvolver gestão de FAQ pelo ADM</td>
          <td>Configurar tabela do FAQ</td>
        </tr>
        <tr>
          <td>Como cliente, quero ter acesso a uma seção de FAQ que liste problemas comuns no sistema e suas soluções, para que eu possa rapidamente encontrar respostas e solucionar questões sem precisar contatar o suporte.</td>
          <td>Disponibilizar uma seção de FAQ destacada na interface do usuário, listando problemas comuns e suas soluções detalhadas, com instruções passo a passo para resolução.</td>
          <td>2</td>
          <td>Criar tela com as perguntas frequentes (FAQ) e definir quais são</td>
          <td>Implementar visualização e gestão de perguntas frequentes (FAQ)</td>
          <td>Configurar acesso à tabela de FAQ com as perguntas definidas</td>        </tr>
        <tr>
          <td>Como administrador, quero acessar os históricos completos dos chamados, Para que eu possa analisar as interações anteriores e melhorar continuamente o processo de suporte.</td>
          <td>Permitir que administradores acessem os históricos completos dos chamados, incluindo todos os detalhes, interações e resoluções.</td>
          <td>5</td>
          <td>Criar interface de histórico de adm (geral)</td>
          <td>Desenvolver funcionalidade para gerenciamento de histórico de administração geral</td>
          <td>Configurar o banco de dados geral do histórico de tickets</td>
        </tr>
        <tr>
          <td>Como cliente, quero acessar meu histórico completo de tickets</td>
          <td>Desenvolver uma funcionalidade que permita aos clientes acessar facilmente seu histórico completo de tickets após fazer login no sistema, incluindo detalhes como data de abertura, status e descrição do problema.</td>
          <td>3</td>
          <td>Criar interface com todo histórico de tickets do cliente logado</td>
          <td>Implementar funcionalidade para visualizar o histórico completo de tickets do cliente logado</td>
          <td>Configurar o banco de dados e as permissões de histórico a cada usuário</td>
        </tr>
        <tr>
          <td>Como administrador, quero cadastrar equipamentos no sistema, para que possamos manter um registro detalhado dos equipamentos utilizados pelos usuários.</td>
          <td>Implementar uma interface de cadastro de equipamentos para administradores, permitindo o registro detalhado dos equipamentos utilizados pelos usuários.</td>
          <td>3</td>
          <td>Criar interface para o cadastro de equipamentos</td>
          <td>Desenvolver lógica para cadastro e gestão de equipamentos</td>
          <td>Configurar banco de dados para armazenamento de dados de equipamentos</td>
        </tr>
        <tr>
          <td>Como administrador, quero poder cadastrar categorias e prioridade de chamados, para que os chamados possam ser organizados de forma eficiente e direcionados para as equipes corretas</td>
          <td>O sistema deve permitir que o administrador crie novas categorias e prioridades de chamados</td>
          <td>5</td>
          <td>Criar interfaces para cadastro e gestão de categorias e prioridades de chamados</td>
          <td>Desenvolver lógica para gerenciamento das categorias e prioridades</td>
          <td>Configurar banco de dados para armazenamento de dados das categorias e prioridades dos tickets</td>
        </tr>
    </tbody>
</table>

<h3>Mockups</h3>

<h3>Cliente</h3>
<img src="https://github.com/Sync-FATEC/API-DESK/raw/main/assets/53847691/9d698358-a8b8-48e3-855d-7a27a4322234">

<h3>Administrador</h3>
<img src="https://github.com/Sync-FATEC/API-DESK/raw/main/assets/53847691/a064a6e9-9f9c-436d-bc3e-2c5f90f4bc36">

<h3>Modelo de Dados</h3>
<img src="https://github.com/Sync-FATEC/API-DESK/blob/main/doc/docs_sprints/sprint01/BDLogico.jpg">
