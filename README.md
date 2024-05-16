<h1 align="center">SYNC - Gestão de Chamadas de Serviços </h1>
<h2>:mortar_board: Sobre o Projeto</h2>
<div align="justify">
Desenvolver uma solução completa para aprimorar a Gestão de Chamadas de Serviços, com foco em funcionalidades essenciais como cadastros, registro de chamados e gerenciamento do SLA. Além disso, o objetivo principal é proporcionar uma gestão eficaz e melhorar a experiência do usuário na otimização do planejamento, acompanhamento e controle do atendimento a chamadas de serviços.</div>

<h2>:movie_camera: MVP </h2>

<h3>Cliente</h3>
<img src="https://github.com/Sync-FATEC/API-DESK/raw/main/assets/53847691/9d698358-a8b8-48e3-855d-7a27a4322234" 
alt="MVP">

<h3>Administrador</h3>
<img src="https://github.com/Sync-FATEC/API-DESK/raw/main/assets/53847691/a064a6e9-9f9c-436d-bc3e-2c5f90f4bc36" 
alt="MVP">

<h2>💻Tecnologias: </h2>

<div align="center">
  <img src="https://img.shields.io/badge/Microsoft-666666?style=for-the-badge&logo=microsoft&logoColor=white&color=000000">
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white&color=000000">
  <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white&color=000000">
  <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white&color=000000">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white&color=000000" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white&color=000000" />
  <img src="https://img.shields.io/badge/react-4A154B?style=for-the-badge&logo=react&logoColor=white&color=000000" />
  <img src="https://img.shields.io/badge/Mysql-7289DA?style=for-the-badge&logo=mysql&logoColor=white&color=000000">
  <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white&color=000000">
  <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white&color=000000">

</div>

<h2>Requisitos do Parceiro</h2>

<table>
  <tr>
    <th>Número </th>
    <th>Requisito do Parceiro</th>
  </tr>
  <tr>
    <td align="center">1</td>
    <td align="center">Cadastros de Usuários, Técnicos, Equipamentos e Horários</td>
  </tr>
  <tr>
    <td align="center">2</td>
    <td align="center">Usuários devem ter perfis diferentes (administrador, suporte, cliente)</td>
  </tr>
  <tr>
    <td align="center">3</td>
    <td align="center">Registro de chamados</td>
  </tr>
  <tr>
    <td align="center">4</td>
    <td align="center">Acompanhamento de chamados (Aberto, Em processo, finalizado e Concluído)</td>
  </tr>
  <tr>
    <td align="center">5</td>
    <td align="center">Cadastro de soluções para problemas conhecidos</td>
  </tr>
  <tr>
    <td align="center">6</td>
    <td align="center">SLA (Acordo de Nível de Serviço)</td>
  </tr>
  <tr>
    <td align="center">7</td>
    <td align="center">Base de conhecimento (FAQ)</td>
  </tr>
</table>

<h2>:clipboard: Backlog do Produto</h2>

<table>
  <thead>
    <tr>
      <th>Rank</th>
      <th>Prioridade</th>
      <th>User Story</th>
      <th>Estimativa</th>
      <th>Sprint</th>
      <th>Req. Parceiro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>ALTA</td>
      <td>Como cliente, quero cadastrar na a interface do sistema de Service Desk para inserir minhas credenciais (usuário, CPF, email e senha) para iniciar os tickets</td>
      <td>8</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
      <td>ALTA</td>
      <td>Como administrador, quero poder cadastrar novos técnicos no sistema, para que eles possam realizar login, acessar, gerenciar e resolver chamados técnicos.</td>
      <td>8</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3</td>
      <td>ALTA</td>
      <td>Como técnico, quero poder realizar login no sistema de gestão de chamados, para que eu possa acessar, gerenciar e resolver chamados técnicos.</td>
      <td>5</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>4</td>
      <td>ALTA</td>
      <td>Como administrador, quero realizar login de forma segura no sistema, para que eu possa gerenciar o sistema de gestão de chamados e acessar dados confidenciais.</td>
      <td>5</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>5</td>
      <td>ALTA</td>
      <td>Como cliente, quero acessar a interface de login do sistema de Service Desk para inserir minhas credenciais, para acessar minha conta e ver meus tickets.</td>
      <td>5</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>6</td>
      <td>ALTA</td>
      <td>Como técnico, quero acessar uma página com a lista de todos os chamados, para que eu possa ver todos os chamados abertos e suas informações relevantes.</td>
      <td>3</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>7</td>
      <td>ALTA</td>
      <td>Como cliente, quero que o processo de login inclua uma etapa de verificação da existência do meu CPF, para assegurar que apenas CPFs válidos e registrados tenham acesso, aumentando assim a segurança da minha conta contra acessos indevidos.</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>8</td>
      <td>ALTA</td>
      <td>Como cliente, após logar com sucesso, quero ser redirecionado para minha página inicial  para visualizar todos os tickets anteriores que abri e verificar o status atual de cada um, para ter um panorama do meu histórico de atendimento.</td>
      <td>3</td>
      <td>2</td>
      <td>3</td>
    </tr>
        <tr>
      <td>9</td>
      <td>ALTA</td>
      <td>Como cliente, quero clicar em um botão "Novo Ticket" para abrir um formulário onde posso preencher informações sobre um novo problema ou solicitação, incluindo título, descrição, categoria, e enviá-lo para a equipe de suporte, para buscar solução para um novo problema ou necessidade.</td>
      <td>8</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <td>10</td>
      <td>ALTA</td>
      <td>Como administrador, quero cadastrar soluções para problemas recorrentes no FAQ, para que o cliente possa resolver sem a abertura de chamado</td>
      <td>3</td>
      <td>2</td>
      <td>7</td>
    </tr>
    <tr>
      <td>11</td>
      <td>ALTA</td>
      <td>Como cliente, quero ter acesso a uma seção de FAQ que liste problemas comuns no sistema e suas soluções, para que eu possa rapidamente encontrar respostas e solucionar questões sem precisar contatar o suporte.</td>
      <td>2</td>
      <td>2</td>
      <td>7</td>
    </tr>
    <tr>
      <td>12</td>
      <td>MÉDIA</td>
      <td>Como administrador, quero acessar os históricos completos dos chamados, Para que eu possa analisar as interações anteriores e melhorar continuamente o processo de suporte.</td>
      <td>5</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>13</td>
      <td>MÉDIA</td>
      <td>Como cliente, quero acessar meu histórico completo de tickets</td>
      <td>3</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>14</td>
      <td>MÉDIA</td>
      <td>Como administrador, quero cadastrar equipamentos no sistema, para que possamos manter um registro detalhado dos equipamentos utilizados pelos usuários.</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>15</td>
      <td>MÉDIA</td>
      <td>Como administrador, quero poder cadastrar categorias e prioridade de chamados, para que os chamados possam ser organizados de forma eficiente e direcionados para as equipes corretas.</td>
      <td>5</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>16</td>
      <td>MÉDIA</td>
      <td>Como técnico, quero poder escalar chamados para um técnico de nível superior ou a um técnico específico, para chamados que requerem mais conhecimento.</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
    </tr>
    <tr>
      <td>17</td>
      <td>MÉDIA</td>
      <td>Como cliente, após abrir um ticket, quero acompanhar seu status na interface do sistema para ver se está "Aberto", "Em atendimento", "Pendente" e "Finalizado", além de quaisquer atualizações feitas pela equipe de suporte, para estar informado sobre o progresso do meu pedido.</td>
      <td>5</td>
      <td>3</td>
      <td>3</td>
    </tr>
      <td>18</td>
      <td>MÉDIA</td>
      <td>Como cliente, quero poder adicionar mais informações ou fazer perguntas adicionais sobre o ticket por meio de  anotações na interface do ticket</td>
      <td>8</td>
      <td>3</td>
      <td>3</td>
    </tr>
    <tr>
      <td>19</td>
      <td>MÉDIA</td>
      <td>Como técnico, quero poder adicionar mais informações ou fazer perguntas adicionais sobre o ticket por meio de  anotações na interface do ticket</td>
      <td>8</td>
      <td>3</td>
      <td>3</td>
    </tr>
    <tr>
      <td>20</td>
      <td>MÉDIA</td>
      <td>Como técnico, Quero poder filtrar chamados por prioridade, para que eu possa priorizar e resolver primeiro os chamados mais críticos.</td>
      <td>8</td>
      <td>3</td>
      <td>3</td>
    </tr>
    <tr>
      <td>21</td>
      <td>MÉDIA</td>
      <td>Como administrador, quero poder gerenciar os acessos de técnico</td>
      <td>8</td>
      <td>3</td>
      <td>2</td>
    </tr>
    <tr>
      <td>22</td>
      <td>MÉDIA</td>
      <td>Como técnico, quero poder atualizar o status dos chamados, para que o tempo de SLA seja gerenciado com base no tempo que o ticket permanece em atendimento, garantindo uma resposta e resolução dentro dos prazos acordados.</td>
      <td>8</td>
      <td>3</td>
      <td>6</td>
    </tr>
    <tr>
      <td>23</td>
      <td>MÉDIA</td>
      <td>Como administrador, quero definir e ajustar os tempos de SLA para diferentes tipos de chamados, para que possamos garantir um atendimento ágil e dentro das expectativas dos usuários.</td>
      <td>3</td>
      <td>3</td>
      <td>6</td>
    </tr>
    <tr>
      <td>24</td>
      <td>MÉDIA</td>
      <td>Como administrador, quero adicionar conteúdos relevantes à base de conhecimento, para que atendentes e técnicos tenham acesso a informações que auxiliem na resolução de chamados.</td>
      <td>2</td>
      <td>3</td>
      <td>5</td>
    </tr>
    <tr>
      <td>25</td>
      <td>BAIXA</td>
      <td>Como administrador, quero ter a capacidade de gerenciar e ajustar os turnos dos técnicos, para que eu possa assegurar uma cobertura eficiente do serviço e atender às demandas de trabalho de maneira equilibrada.</td>
      <td>8</td>
      <td>3</td>
      <td>1</td>
    </tr>
    <tr>
      <td>26</td>
      <td>BAIXA</td>
      <td>Como administrador, quero criar templates de mensagens de finalização de solução do serviço de acordo com a categoria do problema, para que a equipe possa agilizar a resolução de chamados comuns.</td>
      <td>1</td>
      <td>3</td>
      <td>3</td>
    </tr>
    <tr>
      <td>27</td>
      <td>BAIXA</td>
      <td>Como técnico, quero poder selecionar um ticket para atendimento, para que eu possa assumir a responsabilidade de resolver o problema reportado pelo cliente de forma eficiente e organizada.</td>
      <td>8</td>
      <td>3</td>
      <td>3</td>
    </tr>
    <tr>
      <td>28</td>
      <td>BAIXA</td>
      <td>Como administrador do sistema, quero ter acesso a gráficos detalhados das avaliações dos usuários, para que eu possa visualizar tendências, identificar áreas de melhoria e tomar decisões baseadas em dados para aprimorar nossos serviços ou produtos.</td>
      <td>8</td>
      <td>4</td>
      <td>3</td>
    </tr>
    <tr>
      <td>29</td>
      <td>BAIXA</td>
      <td>Como administrador, quero acessar um dashboard com relatórios detalhados por meio de gráficos, para que eu possa analisar o desempenho do serviço de suporte, a eficiência da equipe e monitorar o SLA.</td>
      <td>5</td>
      <td>4</td>
      <td>6</td>
    </tr>
    <tr>
      <td>30</td>
      <td>BAIXA</td>
      <td>Como usuário, caso eu esqueça a minha senha quero que tenha um campo de redefinir a mesma</td>
      <td>5</td>
      <td>4</td>
      <td>1</td>
    </tr>
  </tbody>
</table>

<h3>Modelo de Dados</h3>
<img src="https://github.com/Sync-FATEC/API-DESK/blob/main/doc/docs_sprints/sprint02/BDLogico.jpg">

<h2>DoR (Definition of Ready):</h2>

<h3>User Stories</h3>
<ul>
    <li>Definidas e compreendidas por todos.</li>
    <li>Pequenas o suficiente para serem feitas em um sprint.</li>
</ul>

<h3>Critério de Aceitação</h3>
<ul>
    <li>Mensurável e testável.</li>
    <li>Descreve claramente quando a funcionalidade está completa.</li>
</ul>

<h3>Estimativa</h3>
<ul>
    <li>Cada história foi estimada pela equipe.</li>
    <li>Estimativas discutidas e acordadas por todos.</li>
</ul>

<h3>Tarefas</h3>
<ul>
    <li>Tarefas identificadas e documentadas para cada história.</li>
    <li>Cada tarefa tem um responsável definido.</li>
</ul>

<h3>Modelo de Dados</h3>
<ul>
    <li>Modelo de dados definido e documentado.</li>
    <li>Campos, tipos de dados e relações claramente especificados.</li>
</ul>

<h3>Mockups</h3>
<ul>
    <li>Mockups criados e revisados pela equipe.</li>
    <li>Refletem critérios de aceitação e necessidades dos usuários.</li>
</ul>

<h2>DoD (Definition of Done):</h2>

<h3>Código</h3>
<ul>
    <li>Completo e implementa todos os critérios de aceitação.</li>
    <li>Todos os testes escritos e passando com sucesso.</li>
</ul>

<h3>Mockups</h3>
<ul>
    <li>Mockups na interface funcionam conforme esperado.</li>
    <li>Experiência do usuário corresponde aos critérios definidos.</li>
</ul>
<h3>Manual do Usuário (Online)</h3>
<ul>
    <li>O manual do usuário está completo e disponível online.</li>
    <li>Inclui instruções passo a passo sobre como usar todas as funcionalidades do produto.</li>
</ul>

<h3>Guia de Instalação</h3>
<ul>
    <li>O guia de instalação detalha todos os passos necessários para configurar e instalar o software em diferentes plataformas ou ambientes.</li>
    <li>Inclui requisitos de sistema, dependências e configurações de software/hardware.</li>
</ul>

<h2>:pushpin: Relatórios </h2>
<table>
  <thead>
    <tr>
      <th>Sprint</th>
      <th>Data</th>
      <th>Documentos</th>
      <th>Status</th>
    </tr>
  </thead>
 <tbody>
  <tr>
    <td align="center">01</td>
    <td>14/04/2023</td>
    <td align="center"><a href="https://github.com/Sync-FATEC/API-DESK/blob/main/doc/docs_sprints/sprint01/sprint01.md">Relatório</a></td> 
    <td align="center">🔄</td>
  </tr>
  <tr>
    <td align="center">02</td>
    <td>05/05/2023</td>
    <td align="center"><a href="https://github.com/Sync-FATEC/API-DESK/blob/main/doc/docs_sprints/sprint02/sprint02.md">Relatório</a></td> 
    <td align="center">🔄</td>
  </tr>
  <tr>
    <td align="center">03</td>
    <td>26/05/2023</td>
    <td></td>
    <td align="center">🔄</td>
  </tr>
  <tr>
    <td align="center">04</td>
    <td>16/06/2023</td>
    <td></td>
    <td align="center">🔄</td>
  </tr>
</tbody>
</table>


<h2>:hammer_and_wrench: Como instalar</h2>
  <h3>Passo 1: Instale as Dependências</h3>
  <p>Certifique-se de ter o Node.js e o MySQL instalados no seu sistema.</p>
  <p>Para baixar o Node.js <a href="https://nodejs.org/">https://nodejs.org/</a>.</p>
  <p>Para baixar o MySQL <a href="https://www.mysql.com/downloads/">https://www.mysql.com/downloads/</a>.</p>
  <h3>Passo 2: Abra o Terminal</h3>
  <p>Pesquise por "Terminal" na barra de tarefas do seu dispositivo e abra o terminal.</p>
  <h3>Passo 3: Clone o Repositório</h3>
  <pre><code>git clone https://github.com/Sync-FATEC/API-DESK</code></pre>

  <h3>Passo 4: Instale as Dependências do Backend</h3>
  <p>No terminal, navegue até a pasta "back-end" dentro do diretório clonado:</p>
  <pre><code>cd API-DESK/back-end</code></pre>
  <p>Em seguida, execute o comando para instalar as dependências:</p>
  <pre><code>npm install</code></pre>

  <h3>Passo 5: Configure o Banco de Dados</h3>
  <p>Abra o arquivo "data-source.ts" localizado em "API-DESK/back-end/src" e altere as credenciais do banco de dados conforme necessário:</p>
  <pre><code>export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "sua-senha",
    database: "api",
    synchronize: true,
    logging: false,
    entities: [Usuarios, Tickets, Salas, Mensagens, Equipamentos, Categorias],
    migrations: [],
    subscribers: []
});</code></pre>

  <h3>Passo 6: Instale as Dependências do Frontend</h3>
  <p>Navegue até a pasta "front-end" dentro do diretório clonado:</p>
  <pre><code>cd ../front-end</code></pre>
  <p>Em seguida, execute o comando para instalar as dependências:</p>
  <pre><code>npm install</code></pre>

  <h3>Passo 7: Inicie a Aplicação</h3>
  <p>Para iniciar a aplicação, ainda dentro da pasta "front-end" e "back-end", execute:</p>
  <pre><code>npm start</code></pre>

  <p>Agora você pode acessar sua aplicação em um navegador no endereço indicado.</p>

<h2>:busts_in_silhouette: Membros:</h2>
<table>
    <thead>
        <tr>
            <th>Foto</th>
            <th>Função</th>
            <th>Nome</th>
            <th>LinkedIn</th>
            <th>GitHub</th>
        </tr>
    </thead>
    <tbody>
      <tr>
    <td>
        <a href="https://github.com/Ana-Laura-Moratelli">
            <img src="https://avatars.githubusercontent.com/u/127795446?v=4" alt="fotoperfil" width="45">
        </a>
    </td>
    <td>Product Owner</td>
    <td>Ana Laura Moratelli</td>
    <td>
        <a href="https://www.linkedin.com/in/anamoratelli">
            <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=000000' />
        </a>
    </td>
    <td>
        <a href="https://github.com/Ana-Laura-Moratelli">
            <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=000000' />
        </a>
    </td>
</tr>
        <tr>
            <td>
                <a href="https://github.com/maiconsso">
                    <img src="https://avatars.githubusercontent.com/u/53847691?s=400&u=f3a98c19b124cc997a5ddcab63ae00f590d81a19&v=4"alt="fotoperfil" width="45">
                </a>
            </td>
            <td>Scrum Master</td>
            <td>Michael Souza</td>
            <td>
                <a href="https://www.linkedin.com/in/michael-ssouza/">
                    <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=000000' />
                </a>
            </td>
            <td>
                <a href="https://github.com/maiconsso">
                    <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=000000' />
                </a>
            </td>
        </tr>
<tr>
    <td>
        <a href="https://github.com/SavioMessias">
            <img src="https://avatars.githubusercontent.com/u/126280277?v=4" alt="fotoperfil" width="45">
        </a>
    </td>
    <td>Scrum Team</td>
    <td>Savio Messias</td>
    <td>
        <a href="https://www.linkedin.com/in/kayquemessias">
            <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=000000' />
        </a>
    </td>
    <td>
        <a href="https://github.com/SavioMessias">
            <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=000000' />
        </a>
    </td>
</tr>
      <tr>
    <td>
        <a href="https://github.com/ClaudioJaymeDiniz">
            <img src="https://avatars.githubusercontent.com/u/142222453?v=4" alt="fotoperfil" width="45">
        </a>
    </td>
    <td>Scrum Team</td>
    <td>Claudio Jayme Diniz</td>
    <td>
        <a href="https://www.linkedin.com/in/claudio-jayme/">
            <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=000000' />
        </a>
    </td>
    <td>
        <a href="https://github.com/ClaudioJaymeDiniz">
            <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=000000' />
        </a>
    </td>
</tr>
        <tr>
            <td>
                <a href="https://github.com/filipecolla">
                    <img src="https://avatars.githubusercontent.com/u/74216966?v=4" alt="fotoperfil" width="45">
                </a>
            </td>
            <td>Scrum Team</td>
            <td>Filipe Colla</td>
            <td>
                <a href="https://www.linkedin.com/in/filipe-colla/">
                    <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=000000' />
                </a>
            </td>
            <td>
                <a href="https://github.com/filipecolla">
                    <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=000000' />
                </a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://github.com/henrique0401">
                    <img src="https://avatars.githubusercontent.com/u/142222260?v=4" alt="fotoperfil" width="45">
                </a>
            </td>
            <td>Scrum Team</td>
            <td>Henrique Ramos</td>
            <td>
                <a href="https://www.linkedin.com/in/henrique-ramos-a8a459290/">
                    <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=000000' />
                </a>
            </td>
            <td>
                <a href="https://github.com/henrique0401">
                    <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=000000' />
                </a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://github.com/joaogabgr">
                    <img src="https://avatars.githubusercontent.com/u/104585766?v=4" alt="fotoperfil" width="45">
                </a>
            </td>
            <td>Scrum Team</td>
            <td>João Gabriel Solis</td>
            <td>
                <a href="https://www.linkedin.com/in/joaoggbs/">
                    <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=000000' />
                </a>
            </td>
            <td>
                <a href="https://github.com/joaogabgr">
                    <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=000000' />
                </a>
            </td>
        </tr>
<tr>
    <td>
        <a href="https://github.com/ZduardoPereira">
            <img src="https://avatars.githubusercontent.com/u/127692036?v=4" alt="fotoperfil" width="45">
        </a>
    </td>
    <td>Scrum Team</td>
    <td>José Eduardo Fernandes Pereira</td>
    <td>
        <a href="https://www.linkedin.com/in/jos%C3%A9-eduardo-fernandes-pereira-b26517284/">
            <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=000000' />
        </a>
    </td>
    <td>
        <a href="https://github.com/ZduardoPereira">
            <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=000000' />
        </a>
    </td>
</tr>
    </tbody>
</table>
