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

CREATE TABLE `personaggi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUtenti` int(11) DEFAULT NULL,
  `nome` varchar(40) DEFAULT NULL,
  `imageurl` varchar(2000) DEFAULT NULL,
  `classe` varchar(40) DEFAULT NULL,
  `razza` varchar(40) DEFAULT NULL,
  `livello` int(11) DEFAULT NULL,
  `hp` int(11) DEFAULT NULL,
  `iniziativa` double DEFAULT NULL,
  `armorClass` int(11) DEFAULT NULL,
  `forza` int(11) DEFAULT NULL,
  `destrezza` int(11) DEFAULT NULL,
  `costituzione` int(11) DEFAULT NULL,
  `intelligenza` int(11) DEFAULT NULL,
  `saggezza` int(11) DEFAULT NULL,
  `carisma` int(11) DEFAULT NULL,
  `allineamento` varchar(1000) DEFAULT NULL,
  `background` varchar(1000) DEFAULT NULL,
  `equipaggiamento` varchar(1000) DEFAULT NULL,
  `carattere` varchar(1000) DEFAULT NULL,
  `ideali` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idUtenti` (`idUtenti`),
  CONSTRAINT `personaggi_ibfk_1` FOREIGN KEY (`idUtenti`) REFERENCES `utenti` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci


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

alter table personaggi modify column imageurl varchar(2000);