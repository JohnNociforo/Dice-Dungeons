-- Active: 1726214362471@@172.18.0.1@3306
create database dicedragons;
use dicedragons;

-- TABELLA UTENTI --
-- Utenti:
-- ID
-- Nome Utente
-- Email
-- Password

create table utenti
(
	id int primary key auto_increment,
	username varchar (40),
    email varchar (60),
    password varchar (20)
);

-- TABELLA PERSONAGGI --
-- (METODO UPDATE X UTENTE PER MODIFICARE LE STATS)
-- ID
-- Foreign Key
-- Nome
-- Razza / Specie
-- Livello ( da 1 a 100 modificabile)
-- HP
-- Iniziativa
-- Armor Class
-- Forza
-- Destrezza
-- Costituzione
-- Intelligenza
-- Saggezza
-- Carisma
-- TEXT AREA (VARCHAR 1000) Per appunti.
-- Lingue Conosciute

create table personaggi
(
	id int primary key auto_increment,
    idUtenti int,
    foreign key(idUtenti)
    references utenti(id)
    on delete set null
    on update cascade,
	nome varchar (40),
    classe varchar (40),
    razza varchar (40),
    livello int,
    hp int, 
    iniziativa double,
	armorClass int,
    forza int,
    destrezza int,
    costituzione int,
    intelligenza int,
    saggezza int,
    carisma int,
    allineamento varchar(1000),
    background varchar(1000),
    equipaggiamento varchar(1000),
    carattere varchar(1000),
    ideali varchar(1000)
);

insert into utenti
(id,username,email,password)
values
(1,"GLADIATORE","gladiatore@gmail.com","topolino");

-- GLI HP VANNO DA 0 A 100 -- 
-- PUNTEGGI MASSIMO 20, NON ANDARE OLTRE --
insert into personaggi
(id,idUtenti,nome,classe,razza,livello,hp,iniziativa,armorClass,forza,destrezza,costituzione,intelligenza,saggezza,carisma,appunti,lingueConosciute)
values
(1,1,"Mostro della Palude Oscura","BARBARO","GOBLIN",10,100,2,0,20,15,10,10,6,15,"Il mostro ha l'abilità di scomparire durante il turno avversario", "CELESTIALE"),
(2,1,"Babadouck","RANGER","ARACOKRA",5,100,2,0,20,15,10,10,6,15,"E' dotato di ali e può volare 3 volte al giorno", "ABISSALE, DRAGONICO");

-- CHECK TABELLE -- 
select * from utenti;
select * from personaggi;

-- delete from personaggi where id=1;

select *
from utenti, personaggi
where personaggi.idUtenti=utenti.id;

drop table personaggi;


