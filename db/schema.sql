-- Fri Oct  2 18:53:15 2020
-- Model: New Model    Version: 1.0

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema shopping_cart
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `shopping_cart` ;

-- -----------------------------------------------------
-- Schema shopping_cart
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `shopping_cart` DEFAULT CHARACTER SET utf8 ;
USE `shopping_cart` ;

-- -----------------------------------------------------
-- Table `shopping_cart`.`user_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`user_type` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`user_type` (
  `type` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`type`))
ENGINE = InnoDB;

INSERT INTO `shopping_cart`.`user_type` (`type`) VALUES ('ADMIN');
INSERT INTO `shopping_cart`.`user_type` (`type`) VALUES ('CUSTOMER');

-- -----------------------------------------------------
-- Table `shopping_cart`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`user` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`user` (
  `id` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `phone_number` VARCHAR(10) NOT NULL,
  `user_type` VARCHAR(10) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk__user_type__user_idx` (`user_type` ASC) VISIBLE,
  CONSTRAINT `fk__user_type__user`
    FOREIGN KEY (`user_type`)
    REFERENCES `shopping_cart`.`user_type` (`type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_cart`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`category` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `shopping_cart`.`sub_category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`sub_category` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`sub_category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `category_id_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `shopping_cart`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `shopping_cart`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`product` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sub_category_id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `price` FLOAT NULL,
  `description` TEXT NOT NULL,
  `features` MEDIUMTEXT NULL,
  `discount_percentage` INT NULL,
  `image_url` VARCHAR(150) NOT NULL,
  `brand_name` VARCHAR(45) NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `sub_category_id_idx` (`sub_category_id` ASC) VISIBLE,
  CONSTRAINT `fk__sub_category__product`
    FOREIGN KEY (`sub_category_id`)
    REFERENCES `shopping_cart`.`sub_category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `shopping_cart`.`product_review`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`product_review` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`product_review` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `user_id` VARCHAR(255) NOT NULL,
  `rating` SMALLINT(6) NOT NULL,
  `title` VARCHAR(100) NULL,
  `content` TEXT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk__product__product__review`
    FOREIGN KEY (`product_id`)
    REFERENCES `shopping_cart`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk__product__user`
    FOREIGN KEY (`user_id`)
    REFERENCES `shopping_cart`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_cart`.`user_address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`user_address` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`user_address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(45) NULL,
  `address_1` VARCHAR(100) NOT NULL,
  `address_2` VARCHAR(100) NULL,
  `pincode` VARCHAR(6) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `land_mark` VARCHAR(45) NULL,
  `gps_coordinates` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk__user__user_address`
    FOREIGN KEY (`user_id`)
    REFERENCES `shopping_cart`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_cart`.`payment_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`payment_type` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`payment_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_cart`.`order_status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`order_status` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`order_status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `shopping_cart`.`order`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`order` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(45) NOT NULL,
  `delivery_address_id` INT NOT NULL,
  `payment_type_id` INT NOT NULL,
  `order_status_id` INT NOT NULL,
  `date` DATETIME NOT NULL,
  `amount` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `address_id_idx` (`delivery_address_id` ASC) VISIBLE,
  INDEX `payment_type_idx` (`payment_type_id` ASC) VISIBLE,
  INDEX `order_status_idx` (`order_status_id` ASC) VISIBLE,
  CONSTRAINT `fk__user__order`
    FOREIGN KEY (`user_id`)
    REFERENCES `shopping_cart`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk__user_address__order`
    FOREIGN KEY (`delivery_address_id`)
    REFERENCES `shopping_cart`.`user_address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk__payment__order`
    FOREIGN KEY (`payment_type_id`)
    REFERENCES `shopping_cart`.`payment_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk__order_status__order`
    FOREIGN KEY (`order_status_id`)
    REFERENCES `shopping_cart`.`order_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `shopping_cart`.`tag`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`tag` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`tag` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tag_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `shopping_cart`.`product_warehouse`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`product_warehouse` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`product_warehouse` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `address` VARCHAR(200) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `pincode` VARCHAR(6) NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `shopping_cart`.`product_stock`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`product_stock` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`product_stock` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `warehouse_id` INT NOT NULL,
  `stock_count` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  INDEX `warehouse_id_idx` (`warehouse_id` ASC) VISIBLE,
  CONSTRAINT `fk__product__product_stock`
    FOREIGN KEY (`product_id`)
    REFERENCES `shopping_cart`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk__warehouse__product_stock`
    FOREIGN KEY (`warehouse_id`)
    REFERENCES `shopping_cart`.`product_warehouse` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `shopping_cart`.`order_items`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`order_items` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`order_items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `order_id_idx` (`order_id` ASC) VISIBLE,
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk__order__order_items`
    FOREIGN KEY (`order_id`)
    REFERENCES `shopping_cart`.`order` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk__product__order_items`
    FOREIGN KEY (`product_id`)
    REFERENCES `shopping_cart`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `shopping_cart`.`cart`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`cart` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `user_id` VARCHAR(45) NOT NULL,
  `quantity` INT NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `shopping_cart`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `shopping_cart`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `shopping_cart`.`filter_key`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`filter_key` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`filter_key` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `key` VARCHAR(45) NOT NULL,
  `filter_column_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_cart`.`filter`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`filter` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`filter` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sub_category_id` INT NOT NULL,
  `filter_key_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `sub_category_id_idx` (`sub_category_id` ASC) VISIBLE,
  INDEX `filter_key_id_idx` (`filter_key_id` ASC) VISIBLE,
  CONSTRAINT `fk__sub_category__filter`
    FOREIGN KEY (`sub_category_id`)
    REFERENCES `shopping_cart`.`sub_category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk__filter_key__filter`
    FOREIGN KEY (`filter_key_id`)
    REFERENCES `shopping_cart`.`filter_key` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_cart`.`product_tag`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`product_tag` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`product_tag` (
  `product_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  INDEX `fk__product_tag__tag_idx` (`tag_id` ASC) VISIBLE,
  PRIMARY KEY (`product_id`, `tag_id`),
  CONSTRAINT `fk__product_tag__product`
    FOREIGN KEY (`product_id`)
    REFERENCES `shopping_cart`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk__product_tag__tag`
    FOREIGN KEY (`tag_id`)
    REFERENCES `shopping_cart`.`tag` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `shopping_cart`.`product_filters`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`product_filters` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`product_filters` (
  `id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `filter_1` VARCHAR(45) NULL,
  `filter_2` VARCHAR(45) NULL,
  `filter_3` VARCHAR(45) NULL,
  `filter_4` VARCHAR(45) NULL,
  `filter_5` VARCHAR(45) NULL,
  `filter_6` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk__product__product_filters_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk__product__product_filters`
    FOREIGN KEY (`product_id`)
    REFERENCES `shopping_cart`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_cart`.`featured_product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_cart`.`featured_product` ;

CREATE TABLE IF NOT EXISTS `shopping_cart`.`featured_product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk__product__featured_product_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk__product__featured_product`
    FOREIGN KEY (`product_id`)
    REFERENCES `shopping_cart`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
