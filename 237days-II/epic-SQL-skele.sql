-- ez egy tablazat letrehozas

CREATE TABLE `ferrilata`.`items`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR
(45) NULL,
  `expiryDate` DATETIME NULL,
  `highestBid` INT NULL,
  `highestBidderName` VARCHAR
(45) NULL DEFAULT 'No bids yet.',
  PRIMARY KEY
(`id`));



-- ugyanebbe a tablazatba beletoltok infokat

USE ferrilata;

INSERT INTO items
    (title,expirydate,highestBid,highestBidderName)
VALUES
    ("Book 1","2018-03-04",4213,"Rachel");
INSERT INTO items
    (title,expirydate,highestBid,highestBidderName)
VALUES
    ("Mouse","2025-03-04",3124,"John");
INSERT INTO items
    (title,expirydate,highestBid,highestBidderName)
VALUES
    ("Laptop","2025-03-04",8382,"Juliet");
INSERT INTO items
    (title,expirydate,highestBid,highestBidderName)
VALUES
    ("Book 2","2025-03-04",10,"Richard");



--------------- masik feladat questions vizsgan volt (griseus orientation link itt alatta)
--------- https://github.com/adamcsigas/griseus-orientation-normal-exam/blob/master/full-stack.md

update cohorts set name='Lagopus' where id=2;

INSERT INTO apprentices
    (name,cohort_id)
VALUES('Doris
D
. Steves',
(SELECT id
FROM cohorts
WHERE name='Vulpes')
) 


----------------- orientation vizsga 2 tablazat volt feladat 

CREATE DATABASE reportedTickets;
USE reportedTickets;

CREATE TABLE reportedTickets(
id INT AUTO_INCREMENT NOT NULL,
reporter VARCHAR (50) ,
manufacturer VARCHAR (50) ,
serialNumber INT ,
descript VARCHAR(100) ,
date DATE,
PRIMARY KEY (id));

CREATE TABLE reporters(
    rep_id INT AUTO_INCREMENT NOT NULL,
    reporter VARCHAR(50),
    PRIMARY KEY (rep_id)
);

INSERT INTO reporters
    (reporter)
VALUES
    ("Egg");
INSERT INTO reporters
    (reporter)
VALUES
    ("Brian");
INSERT INTO reporters
    (reporter)
VALUES
    ("Tom");


---------------- orientation vizsga 2 tablazat volt 

USE reportedTickets;

INSERT INTO reportedTickets
    (reporter,manufacturer,serialNumber,descript,date)
VALUES
    ("1","dell",123456789,"screen pixel error", ("2018-01-16"));

INSERT INTO reportedTickets
    (reporter,manufacturer,serialNumber,descript,date)
VALUES
    ("2","dell",987654321,"touchpad is not working",("2018-01-17"));

INSERT INTO reportedTickets
    (reporter,manufacturer,serialNumber,descript,date)
VALUES
    ("3","lenovo",462587618,"doesn't boot",("2018-01-19"));






