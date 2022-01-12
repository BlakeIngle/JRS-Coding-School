CREATE SCHEMA `books` ;

CREATE TABLE `books`.`books` (
  `id` BIGINT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `author` VARCHAR(255) NOT NULL,
  `publisher` VARCHAR(255) NULL,
  `year` INT NULL,
  `cover` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

CREATE TABLE `books`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NULL,
  `favoriteBook` BIGINT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`favoriteBook`)
        REFERENCES `books`(`id`)
);

INSERT INTO `books`.`books` (`id`, `title`, `author`, `cover`) 
    VALUES ('9780394800165', 'Green Eggs And Ham', 'Dr. Seuss', 'https://en.wikipedia.org/wiki/Green_Eggs_and_Ham#/media/File:Green_Eggs_and_Ham.jpg');

insert into books (id, title, author) 
    values 
    (123, 'The Cat In The Hat', 'Dr. Seuss'),
    (456, 'One Fish Two Fish Red Fish Blue Fish', 'Dr. Seuss');


SELECT id, title, author, cover
    FROM books;
