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









