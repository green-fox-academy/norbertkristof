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