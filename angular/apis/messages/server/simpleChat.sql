CREATE SCHEMA `simple_chat` ;

CREATE TABLE `simple_chat`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `username` VARCHAR(25) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,

  PRIMARY KEY (`id`)
);

CREATE TABLE `simple_chat`.`messages` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `message` VARCHAR(2047) NOT NULL,
  `userId` INT NOT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`userId`)
    REFERENCES `users` (`id`)
);