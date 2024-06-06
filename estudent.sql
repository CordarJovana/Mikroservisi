-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 30, 2023 at 05:23 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `estudent`
--

-- --------------------------------------------------------

--
-- Table structure for table `archive`
--

CREATE TABLE `archive` (
  `id` int(11) NOT NULL,
  `createdAt` bigint(20) DEFAULT NULL,
  `fromModel` varchar(255) DEFAULT NULL,
  `originalRecord` longtext DEFAULT NULL,
  `originalRecordId` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ispit`
--

CREATE TABLE `ispit` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `datum` datetime DEFAULT NULL,
  `ispitniRok` int(11) DEFAULT NULL,
  `predmet` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `ispit`
--

INSERT INTO `ispit` (`createdAt`, `updatedAt`, `id`, `datum`, `ispitniRok`, `predmet`) VALUES
(NULL, NULL, 4, '2023-06-16 16:30:00', 4, 1),
(NULL, NULL, 5, '2023-06-17 16:30:00', 4, 2),
(NULL, NULL, 6, '2023-06-18 16:30:00', 4, 5),
(NULL, NULL, 7, '2023-06-19 16:30:00', 4, 6),
(NULL, NULL, 8, '2023-06-20 16:30:00', 4, 3),
(NULL, NULL, 9, '2023-06-21 16:30:00', 4, 4),
(NULL, NULL, 10, '2023-06-22 16:30:00', 4, 7),
(NULL, NULL, 11, '2023-06-23 16:30:00', 4, 8),
(NULL, NULL, 12, '2023-08-17 16:34:34', 6, 1),
(NULL, NULL, 13, '2023-08-18 16:34:34', 6, 2),
(NULL, NULL, 14, '2023-08-19 16:34:34', 6, 5),
(NULL, NULL, 15, '2023-08-20 16:34:34', 6, 6),
(NULL, NULL, 16, '2023-08-21 16:34:34', 6, 3),
(NULL, NULL, 17, '2023-08-22 16:34:34', 6, 4),
(NULL, NULL, 18, '2023-08-23 16:34:34', 6, 7),
(NULL, NULL, 19, '2023-08-24 16:34:34', 6, 8),
(NULL, NULL, 20, '2023-09-07 16:36:47', 7, 1),
(NULL, NULL, 21, '2023-09-08 16:36:47', 7, 2),
(NULL, NULL, 22, '2023-09-09 16:36:47', 7, 5),
(NULL, NULL, 23, '2023-09-10 16:36:47', 7, 6),
(NULL, NULL, 24, '2023-09-11 16:36:47', 7, 3),
(NULL, NULL, 25, '2023-09-12 16:36:47', 7, 4),
(NULL, NULL, 26, '2023-09-13 16:36:47', 7, 7),
(NULL, NULL, 27, '2023-09-14 16:36:47', 7, 8),
(NULL, NULL, 28, '2023-06-20 16:45:24', 4, 9),
(NULL, NULL, 29, '2023-06-21 16:45:24', 4, 10),
(NULL, NULL, 30, '2023-06-23 16:45:24', 4, 11),
(NULL, NULL, 31, '2023-06-24 16:45:24', 4, 12),
(NULL, NULL, 32, '2023-08-19 16:47:15', 6, 9),
(NULL, NULL, 33, '2023-08-20 16:47:15', 6, 10),
(NULL, NULL, 34, '2023-08-21 16:47:15', 6, 11),
(NULL, NULL, 35, '2023-08-22 16:47:15', 6, 12),
(NULL, NULL, 36, '2023-09-08 16:48:32', 7, 9),
(NULL, NULL, 37, '2023-09-09 16:48:32', 7, 10),
(NULL, NULL, 38, '2023-09-10 16:48:32', 7, 11),
(NULL, NULL, 39, '2023-09-11 16:48:32', 7, 12);

-- --------------------------------------------------------

--
-- Table structure for table `ispitnirok`
--

CREATE TABLE `ispitnirok` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `naziv` varchar(255) DEFAULT NULL,
  `datumPocetka` datetime DEFAULT NULL,
  `datumKraja` datetime DEFAULT NULL,
  `datumPocetkaPrijave` datetime DEFAULT NULL,
  `datumZavrsetkaPrijave` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `ispitnirok`
--

INSERT INTO `ispitnirok` (`createdAt`, `updatedAt`, `id`, `naziv`, `datumPocetka`, `datumKraja`, `datumPocetkaPrijave`, `datumZavrsetkaPrijave`) VALUES
(NULL, NULL, 1, 'Јануарски', '2023-01-15 17:42:37', '2023-01-31 17:42:37', '2023-01-01 17:42:37', '2023-01-15 17:42:37'),
(NULL, NULL, 2, 'Фебруарски', '2023-02-15 17:42:37', '2023-02-28 17:42:37', '2023-02-01 17:42:37', '2023-02-15 17:42:37'),
(NULL, NULL, 3, 'Априлски', '2023-04-10 17:42:37', '2023-04-26 17:42:37', '2023-04-01 17:42:37', '2023-04-08 17:42:37'),
(NULL, NULL, 4, 'Јунски', '2023-06-14 17:42:37', '2023-06-30 17:42:37', '2023-06-01 17:42:37', '2023-06-10 17:42:37'),
(NULL, NULL, 5, 'Јулски', '2023-07-14 17:42:37', '2023-07-30 17:42:37', '2023-07-01 17:42:37', '2023-07-10 17:42:37'),
(NULL, NULL, 6, 'Август', '2023-08-16 17:42:37', '2023-09-01 17:42:37', '2023-07-29 17:42:37', '2023-08-15 17:42:37'),
(NULL, NULL, 7, 'Септембарски', '2023-09-07 17:42:37', '2023-09-14 17:42:37', '2023-09-01 17:42:37', '2023-09-06 17:42:37'),
(NULL, NULL, 8, 'Октобарски', '2023-09-25 17:42:37', '2023-09-30 17:42:37', '2023-09-15 17:42:37', '2023-09-18 17:42:37');

-- --------------------------------------------------------

--
-- Table structure for table `nastava`
--

CREATE TABLE `nastava` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `profesor` int(11) DEFAULT NULL,
  `predmet` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `nastava`
--

INSERT INTO `nastava` (`createdAt`, `updatedAt`, `id`, `profesor`, `predmet`) VALUES
(NULL, NULL, 4, 2, 1),
(NULL, NULL, 5, 2, 2),
(NULL, NULL, 6, 2, 5),
(NULL, NULL, 7, 2, 6),
(NULL, NULL, 8, 5, 3),
(NULL, NULL, 9, 5, 4),
(NULL, NULL, 10, 6, 9),
(NULL, NULL, 11, 6, 10),
(NULL, NULL, 12, 4, 11),
(NULL, NULL, 13, 4, 12),
(NULL, NULL, 14, 3, 7),
(NULL, NULL, 15, 1, 8);

-- --------------------------------------------------------

--
-- Table structure for table `obavestenja`
--

CREATE TABLE `obavestenja` (
  `id` int(11) NOT NULL,
  `datumPocetka` date NOT NULL,
  `datumZavrsetka` date NOT NULL,
  `naslov` varchar(255) NOT NULL,
  `tekst` varchar(255) NOT NULL,
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `obavestenja`
--

INSERT INTO `obavestenja` (`id`, `datumPocetka`, `datumZavrsetka`, `naslov`, `tekst`, `createdAt`, `updatedAt`) VALUES
(1, '2023-06-19', '2023-09-30', 'Ново радно време Студенске службе', 'Услед предстојећих празника Студентска служба ће радити од 12:00ч до 14:00ч од понедељка до среде.', 0, 0),
(2, '2023-06-21', '2023-09-30', 'Отварање нових просторија за студенте', 'Од понедељка, 17.04.2023., нове простоје на трећем спрату зграде 2 ће бити отворене за све студенте.', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ocena`
--

CREATE TABLE `ocena` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `ocena` double DEFAULT NULL,
  `profesor` int(11) DEFAULT NULL,
  `prijava` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `ocena`
--

INSERT INTO `ocena` (`createdAt`, `updatedAt`, `id`, `ocena`, `profesor`, `prijava`) VALUES
(NULL, NULL, 3, 10, 5, 13),
(NULL, NULL, 4, 5, 6, 15),
(NULL, NULL, 5, 5, 2, 14);

-- --------------------------------------------------------

--
-- Table structure for table `praksa`
--

CREATE TABLE `praksa` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `nazivKompanije` varchar(255) DEFAULT NULL,
  `pib` double DEFAULT NULL,
  `datumOd` datetime DEFAULT NULL,
  `datumDo` datetime DEFAULT NULL,
  `studentId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `predavanje`
--

CREATE TABLE `predavanje` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `student` int(11) DEFAULT NULL,
  `predmet` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `predavanje`
--

INSERT INTO `predavanje` (`createdAt`, `updatedAt`, `id`, `student`, `predmet`) VALUES
(NULL, NULL, 4, 1, 2),
(NULL, NULL, 5, 1, 5),
(NULL, NULL, 6, 1, 10),
(NULL, NULL, 7, 1, 12),
(NULL, NULL, 8, 1, 7);

-- --------------------------------------------------------

--
-- Table structure for table `predmet`
--

CREATE TABLE `predmet` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `nazivPredmeta` varchar(255) DEFAULT NULL,
  `espb` double DEFAULT NULL,
  `izborni` tinyint(1) DEFAULT NULL,
  `semestar` int(11) DEFAULT NULL,
  `website` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `predmet`
--

INSERT INTO `predmet` (`createdAt`, `updatedAt`, `id`, `nazivPredmeta`, `espb`, `izborni`, `semestar`, `website`) VALUES
(NULL, NULL, 1, 'Математика 1', 6, 0, 1, 'http://math.fon.bg.ac.rs/kursevi/matematika1'),
(NULL, NULL, 2, 'Математика 1', 6, 0, 2, 'http://math.fon.bg.ac.rs/kursevi/matematika1'),
(NULL, NULL, 3, 'Менаџмент', 6, 0, 1, 'http://men.fon.bg.ac.rs/'),
(NULL, NULL, 4, 'Менаџмент', 6, 0, 2, 'http://men.fon.bg.ac.rs/'),
(NULL, NULL, 5, 'Математика 2', 6, 0, 3, 'http://math.fon.bg.ac.rs/kursevi/matematika2'),
(NULL, NULL, 6, 'Математика 2', 6, 0, 4, 'http://math.fon.bg.ac.rs/kursevi/matematika2'),
(NULL, NULL, 7, 'Програмирање 1', 6, 0, 3, 'http://silab.fon.bg.ac.rs/predmeti/osnovne-studije/programiranje-1/'),
(NULL, NULL, 8, 'Социологија', 4, 0, 4, 'http://hr.fon.bg.ac.rs/sociologija/'),
(NULL, NULL, 9, 'Економија', 6, 0, 1, 'http://ekonomija.fon.bg.ac.rs/'),
(NULL, NULL, 10, 'Економија', 6, 0, 2, 'http://ekonomija.fon.bg.ac.rs/'),
(NULL, NULL, 11, 'Производни системи', 6, 0, 3, 'http://imi.fon.bg.ac.rs/proizvodni-sistemi/'),
(NULL, NULL, 12, 'Производни системи', 6, 0, 4, 'http://imi.fon.bg.ac.rs/proizvodni-sistemi/');

-- --------------------------------------------------------

--
-- Table structure for table `prijava`
--

CREATE TABLE `prijava` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `datumPrijave` datetime DEFAULT NULL,
  `student` int(11) DEFAULT NULL,
  `ispit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `prijava`
--

INSERT INTO `prijava` (`createdAt`, `updatedAt`, `id`, `datumPrijave`, `student`, `ispit`) VALUES
(NULL, NULL, 13, '2023-06-02 16:58:49', 1, 9),
(NULL, NULL, 14, '2023-06-05 17:02:16', 1, 5),
(NULL, NULL, 15, '2023-06-05 17:02:16', 1, 29);

-- --------------------------------------------------------

--
-- Table structure for table `profesor`
--

CREATE TABLE `profesor` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `ime` varchar(255) DEFAULT NULL,
  `prezime` varchar(255) DEFAULT NULL,
  `jmbg` varchar(255) DEFAULT NULL,
  `zvanje` varchar(255) DEFAULT NULL,
  `mail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `profesor`
--

INSERT INTO `profesor` (`createdAt`, `updatedAt`, `id`, `ime`, `prezime`, `jmbg`, `zvanje`, `mail`) VALUES
(NULL, NULL, 1, 'Петар', 'Петровић', '23821328193279', 'ДР', 'petar.petrovic@fon.bg.ac.rs'),
(NULL, NULL, 2, 'Јован', 'Јовановић', '498274702109', 'МР', 'jovan.jovanovic@fon.bg.ac.rs'),
(NULL, NULL, 3, 'Живојин', 'Живојиновић', '2844691289', 'ДР', 'zivojin.zivojinovic@fon.bg.ac.rs'),
(NULL, NULL, 4, 'Марко', 'Марковић', '2204761837', 'ДР', 'marko.markovic@fon.bg.ac.rs'),
(NULL, NULL, 5, 'Ана', 'Анић', '23456378', 'МР', 'ana.anic@fon.bg.ac.rs'),
(NULL, NULL, 6, 'Петра', 'Петрић', '456789', 'ДР', 'petra.petric@fon.bg.ac.rs');

-- --------------------------------------------------------

--
-- Table structure for table `semestar`
--

CREATE TABLE `semestar` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `godinaStudija` double DEFAULT NULL,
  `brojSemestra` double DEFAULT NULL,
  `smer` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `semestar`
--

INSERT INTO `semestar` (`createdAt`, `updatedAt`, `id`, `godinaStudija`, `brojSemestra`, `smer`) VALUES
(NULL, NULL, 1, 1, 1, 'Менаџмент'),
(NULL, NULL, 2, 1, 1, 'ИСИТ'),
(NULL, NULL, 3, 1, 2, 'ИСИТ'),
(NULL, NULL, 4, 1, 2, 'Менаџмент'),
(NULL, NULL, 5, 2, 2, 'Менаџмент'),
(NULL, NULL, 6, 2, 1, 'Менаџмент'),
(NULL, NULL, 7, 2, 2, 'ИСИТ'),
(NULL, NULL, 8, 2, 1, 'ИСИТ');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `ime` varchar(255) DEFAULT NULL,
  `prezime` varchar(255) DEFAULT NULL,
  `indeks` varchar(255) DEFAULT NULL,
  `korisnickoIme` varchar(255) DEFAULT NULL,
  `sifra` varchar(255) DEFAULT NULL,
  `semestar` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`createdAt`, `updatedAt`, `id`, `ime`, `prezime`, `indeks`, `korisnickoIme`, `sifra`, `semestar`) VALUES
(NULL, NULL, 1, 'Ивона', 'Петровић', '2017-0246', '20170246', '20170246', 2),
(NULL, NULL, 2, 'Јована', 'Чордар', '2017-0066', '20170066', '20170066', 2),
(NULL, NULL, 3, 'Нина', 'Мандић', '2017-0123', '20170123', '20170123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sv20`
--

CREATE TABLE `sv20` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `jmbg` double DEFAULT NULL,
  `maternjiJezik` varchar(255) DEFAULT NULL,
  `vrstaSrednjeSkole` varchar(255) DEFAULT NULL,
  `drzavaSrednjeSkole` varchar(255) DEFAULT NULL,
  `opstinaSrednjeSkole` varchar(255) DEFAULT NULL,
  `nazivSrednjeSkole` varchar(255) DEFAULT NULL,
  `godinaZavrsetkaSrednjeSkole` double DEFAULT NULL,
  `bracniStatus` varchar(255) DEFAULT NULL,
  `drzavaPrebivalista` varchar(255) DEFAULT NULL,
  `opstinaPrebivalista` varchar(255) DEFAULT NULL,
  `mestoPrebivalista` varchar(255) DEFAULT NULL,
  `adresaPrebivalista` varchar(255) DEFAULT NULL,
  `kontaktTelefon` varchar(255) DEFAULT NULL,
  `drzavaTokomStudija` varchar(255) DEFAULT NULL,
  `opstinaTokomStudija` varchar(255) DEFAULT NULL,
  `adresaTokomStudija` varchar(255) DEFAULT NULL,
  `tipSmestajaTokomStudija` varchar(255) DEFAULT NULL,
  `nacinIzdrzavanjaTokomStudija` varchar(255) DEFAULT NULL,
  `zaposlenje` tinyint(1) DEFAULT NULL,
  `izdrzavanjeDrugogLica` varchar(255) DEFAULT NULL,
  `zaposlenjeRoditelja` tinyint(1) DEFAULT NULL,
  `zanimanjeRoditelja` varchar(255) DEFAULT NULL,
  `skolskaSpremaRoditelja` varchar(255) DEFAULT NULL,
  `potrebanVidPodrske` varchar(255) DEFAULT NULL,
  `student` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `archive`
--
ALTER TABLE `archive`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `ispit`
--
ALTER TABLE `ispit`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `FK_ISPIT_ISPITNI_ROK` (`ispitniRok`),
  ADD KEY `FK_ISPIT_PREDMET` (`predmet`);

--
-- Indexes for table `ispitnirok`
--
ALTER TABLE `ispitnirok`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `nastava`
--
ALTER TABLE `nastava`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `FK_NASTAVA_PREDMET` (`predmet`),
  ADD KEY `FK_NASTAVA_PROFESOR` (`profesor`);

--
-- Indexes for table `obavestenja`
--
ALTER TABLE `obavestenja`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ocena`
--
ALTER TABLE `ocena`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `FK_OCENA_PRIJAVA` (`prijava`),
  ADD KEY `FK_OCENA_PROFESOR` (`profesor`);

--
-- Indexes for table `praksa`
--
ALTER TABLE `praksa`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `pib` (`pib`);

--
-- Indexes for table `predavanje`
--
ALTER TABLE `predavanje`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `FK_PREDAVANJE_PREDMET` (`predmet`),
  ADD KEY `FK_PREDAVANJE_STUDENT` (`student`);

--
-- Indexes for table `predmet`
--
ALTER TABLE `predmet`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `FK_PREDMET_SEMESTAR` (`semestar`);

--
-- Indexes for table `prijava`
--
ALTER TABLE `prijava`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `FK_PRIJAVA_STUDENT` (`student`),
  ADD KEY `FK_PRIJAVA_ISPIT` (`ispit`);

--
-- Indexes for table `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `jmbg` (`jmbg`);

--
-- Indexes for table `semestar`
--
ALTER TABLE `semestar`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `indeks` (`indeks`),
  ADD UNIQUE KEY `korisnickoIme` (`korisnickoIme`),
  ADD UNIQUE KEY `sifra` (`sifra`),
  ADD KEY `FK_STUDENT_SEMESTAR` (`semestar`);

--
-- Indexes for table `sv20`
--
ALTER TABLE `sv20`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `jmbg` (`jmbg`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `archive`
--
ALTER TABLE `archive`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ispit`
--
ALTER TABLE `ispit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `ispitnirok`
--
ALTER TABLE `ispitnirok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `nastava`
--
ALTER TABLE `nastava`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `obavestenja`
--
ALTER TABLE `obavestenja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ocena`
--
ALTER TABLE `ocena`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `praksa`
--
ALTER TABLE `praksa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `predavanje`
--
ALTER TABLE `predavanje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `predmet`
--
ALTER TABLE `predmet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `prijava`
--
ALTER TABLE `prijava`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1511112;

--
-- AUTO_INCREMENT for table `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `semestar`
--
ALTER TABLE `semestar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sv20`
--
ALTER TABLE `sv20`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ispit`
--
ALTER TABLE `ispit`
  ADD CONSTRAINT `ispit_ibfk_1` FOREIGN KEY (`ispitniRok`) REFERENCES `ispitnirok` (`id`),
  ADD CONSTRAINT `ispit_ibfk_2` FOREIGN KEY (`predmet`) REFERENCES `predmet` (`id`);

--
-- Constraints for table `nastava`
--
ALTER TABLE `nastava`
  ADD CONSTRAINT `nastava_ibfk_1` FOREIGN KEY (`predmet`) REFERENCES `predmet` (`id`),
  ADD CONSTRAINT `nastava_ibfk_2` FOREIGN KEY (`profesor`) REFERENCES `profesor` (`id`);

--
-- Constraints for table `ocena`
--
ALTER TABLE `ocena`
  ADD CONSTRAINT `ocena_ibfk_1` FOREIGN KEY (`prijava`) REFERENCES `prijava` (`id`),
  ADD CONSTRAINT `ocena_ibfk_2` FOREIGN KEY (`profesor`) REFERENCES `profesor` (`id`);

--
-- Constraints for table `predavanje`
--
ALTER TABLE `predavanje`
  ADD CONSTRAINT `predavanje_ibfk_1` FOREIGN KEY (`predmet`) REFERENCES `predmet` (`id`),
  ADD CONSTRAINT `predavanje_ibfk_2` FOREIGN KEY (`student`) REFERENCES `student` (`id`);

--
-- Constraints for table `predmet`
--
ALTER TABLE `predmet`
  ADD CONSTRAINT `predmet_ibfk_1` FOREIGN KEY (`semestar`) REFERENCES `semestar` (`id`);

--
-- Constraints for table `prijava`
--
ALTER TABLE `prijava`
  ADD CONSTRAINT `prijava_ibfk_1` FOREIGN KEY (`student`) REFERENCES `student` (`id`),
  ADD CONSTRAINT `prijava_ibfk_2` FOREIGN KEY (`ispit`) REFERENCES `ispit` (`id`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`semestar`) REFERENCES `semestar` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
