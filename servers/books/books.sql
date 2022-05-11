CREATE SCHEMA `books` ;

CREATE TABLE `books`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `title` VARCHAR(255) NOT NULL,
  `author` VARCHAR(255) NOT NULL,
  `coverImage` VARCHAR(255) NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `books`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `username` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `favoriteBook` INT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`favoriteBook`)
        REFERENCES `books`(`id`)
);

CREATE TABLE `books`.`list_items` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `userId` INT NOT NULL,
  `bookId` INT NOT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`userId`)
        REFERENCES `users`(`id`),
  FOREIGN KEY (`bookId`)
        REFERENCES `books`(`id`)
);

CREATE TABLE `books`.`reading_list` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
	FOREIGN KEY (userId) REFERENCES users(id),

  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `userId_UNIQUE` (`userId` ASC) VISIBLE
);

CREATE TABLE `books`.`reading_list_items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `listId` INT NOT NULL,
  `bookId` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`listId`) references `reading_list`(`id`),
  FOREIGN KEY (`bookId`) references `books`(`id`),
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);


INSERT INTO `books`.`books` (`title`, `author`, `coverImage`) 
VALUES 
    ('Green Eggs And Ham', 'Dr. Seuss', 'https://images-na.ssl-images-amazon.com/images/I/712nTmzFFRL.jpg'),
    ('Harry Potter and the Goblet of Fire', 'J.K. Rowling', 'https://m.media-amazon.com/images/I/71ykU-RQ0nL._AC_SL1000_.jpg'),
    ('Reap the Savage Wind', 'Ellen Tanner Marsh', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566718532l/6845379._SY475_.jpg'),
    ('The Hunger Games', 'Suzanne Collins', 'https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg'),
    ('The Hobbit', 'J.R.R. Tolkien', 'https://images-na.ssl-images-amazon.com/images/I/710+HcoP38L.jpg'),
    ('One Fish Two Fish Red Fish Blue Fish', 'Dr. Seuss', 'https://images-na.ssl-images-amazon.com/images/I/81SpSNXaFfL.jpg'),
    ('The Cat In The Hat', 'Dr. Seuss', 'https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL.jpg');

SELECT id, title, author, cover
    FROM books;

SELECT users.id, username, 
	author, title, coverImage, 
    books.id as bookId
  FROM books.users
  LEFT JOIN books.books
    ON books.users.favoriteBook = books.books.id
  WHERE users.id = 12;

SELECT bookId as id, author,
	title, coverImage
  FROM list_items
  INNER JOIN books
    ON list_items.bookId = books.id
  WHERE userId = 11;