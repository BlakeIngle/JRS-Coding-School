DROP SCHEMA IF EXISTS `urls`;
CREATE SCHEMA `urls` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `urls`.`urls` (
    `id` VARCHAR(15) UNIQUE NOT NULL,
    `url` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
);

CREATE TABLE `urls`.`users` (
    `id` VARCHAR(255) UNIQUE NOT NULL,
    `email` VARCHAR(255) UNIQUE NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
);

INSERT INTO `urls`.`urls` (`id`, `url`)
VALUES ('blake', 'http://blakes-animations.web.app');
