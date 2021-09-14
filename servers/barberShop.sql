CREATE TABLE `barber_shop`.`locations` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `address` VARCHAR(255) NOT NULL UNIQUE,
  `phone` BIGINT NOT NULL UNIQUE,

  PRIMARY KEY (`id`)
);

CREATE TABLE `barber_shop`.`services` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `description` VARCHAR(255) NOT NULL UNIQUE,
  `duration` TIME NOT NULL,

  PRIMARY KEY (`id`)
);

CREATE TABLE `barber_shop`.`barbers` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `location` INT NOT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`location`) 
    REFERENCES `locations`(`id`)
);

CREATE TABLE `barber_shop`.`appointments` (
  `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `barber` INT NOT NULL,
  `time` DATETIME NOT NULL,
  `location` INT NOT NULL,
  `service` INT NOT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`barber`) 
        REFERENCES `barbers`(`id`),
  FOREIGN KEY (`location`) 
        REFERENCES `locations`(`id`),
  FOREIGN KEY (`service`) 
        REFERENCES `services`(`id`)
);

INSERT INTO `barber_shop`.`services` 
    (`description`, `duration`) 
VALUES 
    ('haircut', '003000'),
    ('shave', '003000'),
    ('haircut & shave', '010000'),
    ('buzzcut', '001500'),
    ('buzzcut & shave', '004500');

INSERT INTO `barber_shop`.`locations` 
    (`address`, `phone`) 
VALUES 
    ('123 Main Street, Charleston', '5551234567'),
    ('456 Side Road, North Charleston', '5557654321'),
    ('789 Ocean Avenue, Mount Pleasant', '5553215678');

INSERT INTO `barber_shop`.`barbers` 
    (`firstName`, `lastName`, `location`) 
VALUES 
    ('Sleve', 'McDichael', '1'),
    ('Bobson', 'Dugnutt', '1'),
    ('Mike', 'Truk', '1'),
    ('Todd', 'Bonzalez', '1'),

    ('Anatoli', 'Smorin', '2'),
    ('Rey', 'McSriff', '2'),
    ('Willie', 'Dustice', '2'),
    ('Karl', 'Dandleton', '2'),

    ('Onson', 'Sweemey', '3'),
    ('Shown', 'Furcotte', '3'),
    ('Scott', 'Dourque', '3'),
    ('Mike', 'Sernandez', '3');

INSERT INTO `barber_shop`.`appointments` 
	(`barber`, `time`, `service`) 
VALUES 
	('1', '2021-09-08 12:00:00', '1');

SELECT appointments.id, appointments.time, 
		    services.duration, services.description, 
        barbers.firstName, barbers.lastName,
        locations.address
FROM appointments
INNER JOIN services
	ON appointments.service = services.id
INNER JOIN barbers
	ON appointments.barber = barbers.id
INNER JOIN locations
	ON barbers.location = locations.id;