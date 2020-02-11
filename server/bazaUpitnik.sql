/*
SQLyog Community v13.1.2 (64 bit)
MySQL - 8.0.15 : Database - upitnik
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`upitnik` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

USE `upitnik`;

/*Table structure for table `komentari` */

DROP TABLE IF EXISTS `komentari`;

CREATE TABLE `komentari` (
  `idKomentar` int(11) NOT NULL AUTO_INCREMENT,
  `idKorisnik` int(11) NOT NULL,
  `idUpitnik` int(11) NOT NULL,
  `datum` varchar(45) NOT NULL,
  `komentar` varchar(120) NOT NULL,
  PRIMARY KEY (`idKomentar`),
  KEY `fk_komentari_korisnik1_idx` (`idKorisnik`),
  KEY `fk_komentari_upitnik1_idx` (`idUpitnik`),
  CONSTRAINT `fk_komentari_korisnik1` FOREIGN KEY (`idKorisnik`) REFERENCES `korisnik` (`idKorisnik`),
  CONSTRAINT `fk_komentari_upitnik1` FOREIGN KEY (`idUpitnik`) REFERENCES `upitnik` (`idUpitnik`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Table structure for table `korisnik` */

DROP TABLE IF EXISTS `korisnik`;

CREATE TABLE `korisnik` (
  `idKorisnik` int(11) NOT NULL AUTO_INCREMENT,
  `ime` varchar(16) NOT NULL,
  `lozinka` varchar(180) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `datumKreiranja` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `razina` int(11) DEFAULT NULL,
  PRIMARY KEY (`idKorisnik`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Table structure for table `odgovori` */

DROP TABLE IF EXISTS `odgovori`;

CREATE TABLE `odgovori` (
  `idOdgovori` int(11) NOT NULL AUTO_INCREMENT,
  `idKorisnik` int(11) DEFAULT NULL,
  `idOpcije` int(11) DEFAULT NULL,
  PRIMARY KEY (`idOdgovori`),
  KEY `fk_odgovori_korisnik1_idx` (`idKorisnik`),
  KEY `fk_odgovori_opcije1_idx` (`idOpcije`),
  CONSTRAINT `fk_odgovori_korisnik1` FOREIGN KEY (`idKorisnik`) REFERENCES `korisnik` (`idKorisnik`),
  CONSTRAINT `fk_odgovori_opcije1` FOREIGN KEY (`idOpcije`) REFERENCES `opcije` (`idOpcije`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Table structure for table `opcije` */

DROP TABLE IF EXISTS `opcije`;

CREATE TABLE `opcije` (
  `idOpcije` int(11) NOT NULL AUTO_INCREMENT,
  `idUpitnik` int(11) NOT NULL,
  `opcija` varchar(140) DEFAULT NULL,
  PRIMARY KEY (`idOpcije`),
  KEY `fk_table1_upitnik_idx` (`idUpitnik`),
  CONSTRAINT `fk_table1_upitnik` FOREIGN KEY (`idUpitnik`) REFERENCES `upitnik` (`idUpitnik`)
) ENGINE=InnoDB AUTO_INCREMENT=221 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Table structure for table `upitnik` */

DROP TABLE IF EXISTS `upitnik`;

CREATE TABLE `upitnik` (
  `idUpitnik` int(11) NOT NULL AUTO_INCREMENT,
  `upit` varchar(200) DEFAULT NULL,
  `sifra` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `idKorisnik` int(11) DEFAULT NULL,
  PRIMARY KEY (`idUpitnik`),
  UNIQUE KEY `sifra_UNIQUE` (`sifra`),
  KEY `fk_upitnik_korisnik1_idx` (`idKorisnik`),
  CONSTRAINT `fk_upitnik_korisnik1` FOREIGN KEY (`idKorisnik`) REFERENCES `korisnik` (`idKorisnik`)
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/* Procedure structure for procedure `deleteUpitnik` */

/*!50003 DROP PROCEDURE IF EXISTS  `deleteUpitnik` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteUpitnik`(id INT(15))
BEGIN 
delete from komentari
where idUpitnik = id;
DELETE FROM odgovori 
WHERE idOpcije IN (SELECT idOpcije FROM opcije WHERE idUpitnik = id);
DELETE FROM opcije
WHERE idUpitnik = id;
DELETE FROM upitnik
WHERE idUpitnik = id;
END */$$
DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
