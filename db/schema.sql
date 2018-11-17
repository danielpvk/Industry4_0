CREATE DATABASE Industry4_0;
USE Industry4_0;



CREATE TABLE IF NOT EXISTS `Industry4_0`.`Device_type` (
  `IdDevice_type` INT NOT NULL,
  `Parameters_quantity` INT NULL,
  `Parameter1_name` VARCHAR(45) NULL,
  `Parameter1_min_val` FLOAT NULL,
  `Parameter1_max_val` FLOAT NULL,
  `Parameter2_name` VARCHAR(45) NULL,
  `Parameter2_min_val` FLOAT NULL,
  `Parameter2_max_val` FLOAT NULL,
  `Parameter3_name` VARCHAR(45) NULL,
  `Parameter3_min_val` FLOAT NULL,
  `Parameter3_max_val` FLOAT NULL,
  `Parameter4_name` VARCHAR(45) NULL,
  `Parameter4_min_val` FLOAT NULL,
  `Parameter4_max_val` FLOAT NULL,
  `Parameter5_name` VARCHAR(45) NULL,
  `Parameter5_min_val` FLOAT NULL,
  `Parameter5_max_val` FLOAT NULL,
  PRIMARY KEY (`IdDevice_type`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Industry4_0`.`Process` (
  `IdProcess` INT NOT NULL,
  `Process_name` VARCHAR(45) NULL,
  `Devices_quantity` INT NULL,
  `Device1_name` VARCHAR(45) NULL,
  `Device1_type` INT NULL,
  `IdDevice1` INT NULL,
  `Device2_name` VARCHAR(45) NULL,
  `Device2_type` INT NULL,
  `IdDevice2` INT NULL,
  `Device3_name` VARCHAR(45) NULL,
  `Device3_type` INT NULL,
  `IdDevice3` VARCHAR(45) NULL,
  `Device4_name` VARCHAR(45) NULL,
  `Device4_type` INT NULL,
  `IdDevice4` VARCHAR(45) NULL,
  `Device5_name` VARCHAR(45) NULL,
  `Device5_type` INT NULL,
  `IdDevice5` VARCHAR(45) NULL,
  PRIMARY KEY (`IdProcess`))
ENGINE = InnoDB;
