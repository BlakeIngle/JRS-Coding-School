DROP SCHEMA IF EXISTS `super_heroes`;

CREATE SCHEMA `super_heroes` ;

CREATE TABLE `super_heroes`.`heroes` (
  `id` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `realName` VARCHAR(45) NOT NULL DEFAULT 'unknown',
  `nemesis` VARCHAR(45) NOT NULL DEFAULT 'unknown',

  PRIMARY KEY (`id`)
);

CREATE TABLE `super_heroes`.`powers` (
  `id` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `power` VARCHAR(45) NOT NULL,
  `heroId` INT NOT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`heroId`)
    REFERENCES `heroes`(`id`)
);
