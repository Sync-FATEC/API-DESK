<h1 style="text-align: center;">📈 Relatório </h1>
<h2>📌Sprint 01</h2>

<h3>Product Backlog:</h3>
<p>Para manter nosso trabalho alinhado com os objetivos do projeto, estamos criando uma lista de tarefas prioritárias. Isso nos permite planejar nossas atividades de forma eficaz e priorizar aquelas de maior relevância.</p>

<h3>Wireframe Navegável:</h3>
<p>Nosso objetivo principal é concluir o desenvolvimento e entregar um protótipo navegável abrangente, garantindo que todas as páginas planejadas estejam totalmente funcionais.</p>

<h3>Documentação no GitHub:</h3>
<p>Preparamos uma documentação completa no GitHub. Ela abrange informações detalhadas sobre nossa equipe, as tecnologias que planejamos usar e também inclui um guia útil para o desenvolvimento do projeto.</p>

<h2>📌Backlog da Sprint 2</h2>

<table>
    <thead>
        <tr>
            <th>User Story</th>
            <th>Critério de aceitação</th>
            <th>Estimativa em horas</th>
            <th>Tarefas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align='center'>Como cliente, quero cadastrar na a interface do sistema de Service Desk para inserir minhas credenciais (usuário, CPF, email e senha) para iniciar os tickets</td>
            <td>Criar uma interface de cadastro no sistema de Service Desk que solicite as credenciais do usuário, como usuário, CPF, email e senha.
                O processo de verificação do email deve ser incluído para confirmar a autenticidade do cadastro.</td>
            <td>8</td>
            <td align="center">Cadastro de Cliente na Interface</td>
        </tr>
        <tr>
            <td align='center'>Como administrador, quero poder cadastrar novos técnicos no sistema, para que eles possam realizar login, acessar, gerenciar e resolver chamados técnicos.</td>
            <td>Permitir que administradores acessem a seção de gestão de usuários no sistema e adicionem novos técnicos.</td>
            <td>8</td>
            <td align="center">Cadastro de Técnicos</td>
        </tr>      
        <tr>
            <td align='center'>Como técnico, quero poder realizar login no sistema de gestão de chamados, para que eu possa acessar, gerenciar e resolver chamados técnicos.</td>
            <td>Desenvolver uma interface de login para técnicos que solicite email e senha e conceda acesso ao painel de chamados.</td>
            <td>5</td>
            <td align="center">Login do Técnico</td>
        </tr>
        <tr>
            <td align='center'>Como administrador, quero realizar login de forma segura no sistema, para que eu possa gerenciar o sistema de gestão de chamados e acessar dados confidenciais.</td>
            <td>Desenvolver uma interface de login segura para administradores que verifique as credenciais e conceda acesso ao painel administrativo.</td>
            <td>5</td>
            <td align="center">Login Seguro do Administrador</td>
        </tr>
        <tr>
            <td align='center'>Como cliente, quero acessar a interface de login do sistema de Service Desk para inserir minhas credenciais, para acessar minha conta e ver meus tickets.</td>
            <td>Desenvolver uma página de login para clientes que solicite email e senha.</td>
            <td>5</td>
            <td align="center">Login do Cliente </td>
        </tr>
        <tr>
            <td align='center'>Como cliente, quero clicar em um botão "Novo Ticket" para abrir um formulário onde posso preencher informações sobre um novo problema ou solicitação, incluindo título, descrição, categoria, e enviá-lo para a equipe de suporte, para buscar solução para um novo problema ou necessidade.</td>
            <td>Desenvolver um botão "Novo Ticket" na interface do usuário que abra um formulário para preenchimento das informações necessárias, validando os dados antes do envio.</td>
            <td>8</td>
            <td align="center">Botão "Novo Ticket"</td>
        </tr>
        <tr>
            <td align='center'>Como técnico, quero acessar uma página com a lista de todos os chamados, para que eu possa ver todos os chamados abertos e suas informações relevantes.</td>
            <td>Desenvolver uma página que liste todos os chamados abertos com suas informações relevantes.</td>
            <td>3</td>
            <td align="center">Lista de Chamados para Técnico </td>
        </tr>
        <tr>
            <td align='center'>Como cliente, quero que o processo de login inclua uma etapa de verificação da existência do meu CPF, para assegurar que apenas CPFs válidos e registrados tenham acesso, aumentando assim a segurança da minha conta contra acessos indevidos.</td>
            <td>Incluir uma etapa de verificação do CPF no processo de login.</td>
            <td>3</td>
            <td align="center">Verificação de CPF no Login</td>
        </tr>
        <tr>
    <td align='center'>Como técnico, quero poder escalar chamados para um técnico de nível superior, para chamados que requerem mais conhecimento</td>
    <td>Implementar uma funcionalidade de escalonamento de chamados para técnicos de nível superior quando necessário, permitindo a seleção do técnico apropriado com base na área de conhecimento necessária.</td>
    <td>3</td>
    <td align="center">Escalonamento de Chamados</td>
</tr>
  <tr>
      <td align='center'>Como cliente, após logar com sucesso, quero ser redirecionado para minha página inicial  para visualizar todos os tickets anteriores que abri e verificar o status atual de cada um, para ter um panorama do meu histórico de atendimento.</td>
      <td>Após o login, redirecionar o cliente para uma página inicial que exiba todos os tickets anteriores abertos pelo cliente, listando-os de forma organizada e incluindo detalhes como título, data de abertura, categoria e status atual.</td>
      <td>3</td>
      <td align="center">Redirecionamento pós-Login para Cliente</td>
  </tr>
  <tr>
      <td align='center'>Como cliente, após abrir um ticket, quero acompanhar seu status na interface do sistema para ver se está "Aberto", "Em atendimento", "Pendente" e "Finalizado", além de quaisquer atualizações feitas pela equipe de suporte, para estar informado sobre o progresso do meu pedido.</td>
      <td>Permitir que clientes visualizem o status atual de seus tickets na interface do sistema, incluindo atualizações feitas pela equipe de suporte, e receber notificações automáticas sobre mudanças ou atualizações no status do ticket.</td>
      <td>5</td>
      <td align="center">Acompanhamento de Status do Ticket</td>
  </tr>
  <tr>
      <td align='center'>Como administrador, quero cadastrar soluções para problemas recorrentes no FAQ, para que o cliente possa resolver sem a abertura de chamado </td>
      <td>Desenvolver uma interface para administradores cadastrarem soluções de problemas recorrentes no FAQ, incluindo informações detalhadas sobre a solução e passos para implementação.</td>
      <td>3</td>
      <td align="center">Cadastro de Soluções no FAQ</td>
  </tr>
  <tr>
      <td align='center'>Como cliente, quero ter acesso a uma seção de FAQ que liste problemas comuns no sistema e suas soluções, para que eu possa rapidamente encontrar respostas e solucionar questões sem precisar contatar o suporte.</td>
      <td>Disponibilizar uma seção de FAQ destacada na interface do usuário, listando problemas comuns e suas soluções detalhadas, com instruções passo a passo para resolução.</td>
      <td>2</td>
      <td align="center">Seção de FAQ para Clientes</td>
  </tr>
  <tr>
      <td align='center'>Como administrador, quero acessar os históricos completos dos chamados, Para que eu possa analisar as interações anteriores e melhorar continuamente o processo de suporte.</td>
      <td>Permitir que administradores acessem os históricos completos dos chamados, incluindo todos os detalhes, interações e resoluções.</td>
      <td>5</td>
      <td align="center">Acesso ao Histórico Completo para Administrador</td>
  </tr>
  <tr>
      <td align='center'>Como cliente, quero acessar meu histórico completo de tickets</td>
      <td>Desenvolver uma funcionalidade que permita aos clientes acessar facilmente seu histórico completo de tickets após fazer login no sistema, incluindo detalhes como data de abertura, status e descrição do problema.</td>
      <td>3</td>
      <td align="center">Acesso ao Histórico de Tickets para Cliente</td>
  </tr>
  <tr>
      <td align='center'>Como administrador, quero cadastrar equipamentos no sistema, para que possamos manter um registro detalhado dos equipamentos utilizados pelos usuários.</td>
      <td>Implementar uma interface de cadastro de equipamentos para administradores, permitindo o registro detalhado dos equipamentos utilizados pelos usuários.</td>
      <td>3</td>
      <td align="center">Cadastro de Equipamentos </td>
  </tr>
  <tr>
      <td align='center'>Como novo usuário, quero um guia de instalação fácil de seguir para instalar o software rapidamente e sem erros.</td>
      <td>Disponibilizar um guia de instalação em formato digital com instruções passo a passo sobre como baixar e instalar o software em diferentes sistemas operacionais, incluindo requisitos mínimos de sistema.</td>
      <td>1</td>
      <td align="center">Guia de Instalação</td>
  </tr>
    </tbody>
</table>

<h2>Documentação de Requisitos (DoR) Sprint 02</h2>
<ul>
    <li>
        <h3>Clientes:</h3>
        <ul>
            <li>Funcionalidades para cadastro, login, abertura e acompanhamento de tickets.</li>
            <li>Validação de CPF para segurança.</li>
        </ul>
    </li>
    <li>
        <h3>Técnicos:</h3>
        <ul>
            <li>Acesso e gerenciamento de chamados.</li>
            <li>Capacidade de escalonamento para casos complexos.</li>
        </ul>
    </li>
    <li>
        <h3>Administradores:</h3>
        <ul>
            <li>Controle sobre cadastros e segurança de acesso.</li>
            <li>Gerenciamento de informações do sistema, incluindo FAQs e registros de equipamentos.</li>
        </ul>
    </li>
    <li>
        <h3>Priorização de:</h3>
        <ul>
            <li>Segurança.</li>
            <li>Usabilidade.</li>
            <li>Desempenho.</li>
            <li>Escalabilidade.</li>
        </ul>
    </li>
</ul>
