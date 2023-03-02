SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`list` (
  `id` INT NOT NULL,
  `name` VARCHAR(64) NOT NULL,
  `created_date` TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`list_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`list_items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `quantity` INT UNSIGNED NOT NULL DEFAULT 1,
  `category` ENUM('Fruit', 'Vegetables', 'Meat', 'Dairy', 'Chemicals', 'Drinks', 'Textiles', 'Baked goods', 'Other') NOT NULL DEFAULT 'Other',
  `list_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `list_items_list_idx` (`list_id` ASC),
  CONSTRAINT `list_items_list`
    FOREIGN KEY (`list_id`)
    REFERENCES `mydb`.`list` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
