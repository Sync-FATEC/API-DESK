Create database API;
Use API;

create table Usuarios (
    usuarioID int primary key auto_increment,
    nome varchar(255),
    cpf varchar(11) unique,
    email varchar(255) unique,
    senha varchar(255),
    tipoUsuario ENUM('1', '2', '3', '4', '5'),
    turno ENUM('1', '2', '3') default NULL
);

create table Categorias (
    categoriaID int primary key auto_increment,
    categoria varchar(255)
);

create table salas (
    salaID int primary key auto_increment,
    numeroSala int,
    indentificacao varchar(255)
);

create table equipamentos (
    equipamentosID int primary key auto_increment,
    tipoEquipamento varchar(255),
    equipamento varchar(255),
    sla timestamp,
    prioridade int,
    salaID int,
    categoriaID int,
    foreign key (salaID) references salas(salaID),
    foreign key (categoriaID) references Categorias(categoriaID)
);

create table mensagens (
    mensagemID int primary key auto_increment,
    tipoMensagem ENUM('1', '2', '3'),
    titulo varchar(255),
    mensagem varchar(255),
    categoriaID int,
    foreign key (categoriaID) references categorias(categoriaID)
);

create table tickets (
    ticketsID int primary key auto_increment,
    dataAbertura datetime,
    dataFechamento datetime,
    titulo varchar(255),
    descricao varchar(255),
    status ENUM('1', '2', '3', '4'),
    categoriaID int,
    equipamentosID int,
    salaID int,
    foreign key (categoriaID) references categorias(categoriaID),
    foreign key (equipamentosID) references equipamentos(equipamentosID),
    foreign key (salaID) references salas(salaID)
);