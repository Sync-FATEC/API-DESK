create database api;
use api;

create table Usuarios (
	usuarioID int primary key auto_increment,
    nome varchar(255) not null,
    cpf varchar(11) unique not null,
    email varchar(255) unique not null,
    senha varchar(255) not null,
    tipoUsuario varchar(1) default 1,
    turno varchar(5) default NULL
);

create table Categorias (
	categoriaID int primary key auto_increment,
    categoria varchar(255) not null,
    tipoTecnico varchar(1) not null
);

create table salas (
	salaID int primary key auto_increment,
    numeroSala int unique not null,
    identificacao varchar(255) not null
);

create table equipamentos (
	equipamentosID int primary key auto_increment,
    equipamento varchar(255) not null,
    sla int not null,
    prioridade varchar(50) not null,
    salaID int not null,
    categoriasID int not null,
    foreign key (salaID) references salas(salaID),
    foreign key (categoriasID) references Categorias(categoriaID)
);

create table mensagens (
	mensagemID int primary key auto_increment,
    tipoMensagem varchar(1) not null,
    titulo varchar(255) not null,
    mensagem varchar(255),
    categoriaID int not null,
    foreign key (categoriaID) references categorias(categoriaID)
);

create table tickets (
	ticketsID int primary key auto_increment,
    dataAbertura datetime not null,
    dataFechamento datetime,
    titulo varchar(255) not null,
    descricao varchar(255) not null,
    status varchar(1) default '1',
    prioridade varchar(50) not null,
    categoriaID int not null,
    equipamentosID int not null,
    salaID int not null,
    usuarioID int not null,
    tipoTecnico varchar(1) not null,
    tecnicoID int default null,
    foreign key (categoriaID) references categorias(categoriaID),
    foreign key (equipamentosID) references equipamentos(equipamentosID),
    foreign key (salaID) references salas(salaID),
    foreign key (usuarioID) references usuarios(usuarioID)
    foreign key (tecnicoID) references usuarios(usuarioID)
);

create table anotacoes (
    anotacoesID int primary key auto_increment,
    dataAnotacao datetime not null,
    anotacao varchar(255) not null,
    ticketsID int not null,
    usuarioID int not null,
    foreign key (ticketsID) references tickets(ticketsID),
    foreign key (usuarioID) references usuarios(usuarioID)
); 