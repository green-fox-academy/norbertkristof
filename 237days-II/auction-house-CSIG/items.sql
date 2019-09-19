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