-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema preciojustodb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema preciojustodb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `preciojustodb` DEFAULT CHARACTER SET utf8 ;
USE `preciojustodb` ;

-- -----------------------------------------------------
-- Table `preciojustodb`.`carrito-compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `preciojustodb`.`carrito-compras` (
  `idcarrito-compras` INT NOT NULL AUTO_INCREMENT,
  `fecha-creacion` DATE NOT NULL,
  `cantidad-productos` INT NOT NULL,
  `precio-total` DECIMAL(10,0) NOT NULL,
  PRIMARY KEY (`idcarrito-compras`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `preciojustodb`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `preciojustodb`.`categorias` (
  `idcategorias` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idcategorias`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `preciojustodb`.`sucursal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `preciojustodb`.`sucursal` (
  `idsucursal` INT NOT NULL,
  `sucursal` VARCHAR(45) NOT NULL,
  `ubicacion` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`idsucursal`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `preciojustodb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `preciojustodb`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  `correo electronico` VARCHAR(45) NOT NULL,
  `carrito-compras_idcarrito-compras` INT NOT NULL,
  PRIMARY KEY (`idusuario`, `carrito-compras_idcarrito-compras`),
  INDEX `fk_usuario_carrito-compras1_idx` (`carrito-compras_idcarrito-compras` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `preciojustodb`.`orden-de-compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `preciojustodb`.`orden-de-compra` (
  `idorden-de-compra` INT NOT NULL AUTO_INCREMENT,
  `fecha orden` DATE NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `precio-total` DECIMAL(10,0) NOT NULL,
  `cantidad-productos` INT NOT NULL,
  `usuario_idusuario` INT NOT NULL,
  `sucursal_idsucursal` INT NOT NULL,
  PRIMARY KEY (`idorden-de-compra`, `usuario_idusuario`, `sucursal_idsucursal`),
  INDEX `fk_orden-de-compra_usuario1_idx` (`usuario_idusuario` ASC) VISIBLE,
  INDEX `fk_orden-de-compra_sucursal1_idx` (`sucursal_idsucursal` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `preciojustodb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `preciojustodb`.`productos` (
  `idproductos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(100) NOT NULL,
  `precio` DECIMAL(10,0) NOT NULL,
  `descripcion` VARCHAR(300) NOT NULL,
  `cantidad` INT NOT NULL,
  `categorias_idcategorias` INT NOT NULL,
  `sucursal_idsucursal` INT NOT NULL,
  `carrito-compras_idcarrito-compras` INT NOT NULL,
  `orden-de-compra_idorden-de-compra` INT NOT NULL,
  `orden-de-compra_usuario_idusuario` INT NOT NULL,
  `orden-de-compra_sucursal_idsucursal` INT NOT NULL,
  PRIMARY KEY (`idproductos`, `categorias_idcategorias`, `sucursal_idsucursal`, `carrito-compras_idcarrito-compras`, `orden-de-compra_idorden-de-compra`, `orden-de-compra_usuario_idusuario`, `orden-de-compra_sucursal_idsucursal`),
  INDEX `fk_productos_categorias_idx` (`categorias_idcategorias` ASC) VISIBLE,
  INDEX `fk_productos_sucursal1_idx` (`sucursal_idsucursal` ASC) VISIBLE,
  INDEX `fk_productos_carrito-compras1_idx` (`carrito-compras_idcarrito-compras` ASC) VISIBLE,
  INDEX `fk_productos_orden-de-compra1_idx` (`orden-de-compra_idorden-de-compra` ASC, `orden-de-compra_usuario_idusuario` ASC, `orden-de-compra_sucursal_idsucursal` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
