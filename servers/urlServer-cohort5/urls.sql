DROP SCHEMA IF EXISTS `short_urls`;
CREATE SCHEMA `short_urls`;

CREATE TABLE `short_urls`.`users` (
  `id` VARCHAR(45) UNIQUE NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,

  PRIMARY KEY (`id`)
);

CREATE TABLE `short_urls`.`urls` (
    `id` VARCHAR(16) UNIQUE NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `userId` VARCHAR(45) NOT NULL,

    PRIMARY KEY(`id`),
    FOREIGN KEY (`userId`)
        REFERENCES `users`(`id`)
);

