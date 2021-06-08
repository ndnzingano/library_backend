-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2021 at 01:47 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` varchar(36) NOT NULL,
  `title` text NOT NULL,
  `authorFirstName` varchar(300) NOT NULL,
  `authorLastName` varchar(300) NOT NULL,
  `isbn` int(30) NOT NULL,
  `pagesNr` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `authorFirstName`, `authorLastName`, `isbn`, `pagesNr`) VALUES
('0e029875-1f39-4ce6-9ded-369f1743499c', 'Dracula', 'Bram', 'Stoker', 8767933, 500),
('609f752b-152e-486a-95a9-d0fa8f380881', 'Seven Husbands of Evelyn Hugo', 'Taylor', 'Jenkins Reed', 1408898659, 300),
('76bca266-d042-4ed6-a0df-19990e946343', 'Jane Eyre', 'Charlotte', 'Brontë', 1234567, 450),
('dec3c50d-9157-49fd-84aa-fe4300611c5f', 'Pride and Prejudice', 'Jane', 'Austen', 1408898659, 300);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` varchar(36) NOT NULL,
  `book` varchar(36) NOT NULL,
  `user` varchar(36) NOT NULL,
  `startDate` date NOT NULL DEFAULT current_timestamp(),
  `finishDate` date NOT NULL DEFAULT current_timestamp(),
  `rating` int(2) NOT NULL,
  `review` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `book`, `user`, `startDate`, `finishDate`, `rating`, `review`) VALUES
('f98b0396-ff1e-49ca-9578-0580eb1a0d1b', '0e029875-1f39-4ce6-9ded-369f1743499c', '5cd3d3ef-74ea-4917-b0c6-2ef0f278d8fa', '2019-12-31', '2020-01-25', 5, 'spooky');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `firstName` text NOT NULL,
  `lastName` text NOT NULL,
  `email` text NOT NULL,
  `password` varchar(30) NOT NULL,
  `birthday` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `birthday`) VALUES
('5cd3d3ef-74ea-4917-b0c6-2ef0f278d8fa', 'Nadine', 'Zingano', 'nadine.zingano@gmail.com', '123nadine', '1993-06-06'),
('9c6010e0-9d16-431d-a163-b1a369fc9a89', 'Tales', 'Teste', 'tales@gmail.com', '123tales', '2000-06-22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_book` (`book`),
  ADD KEY `reviews_user` (`user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_book` FOREIGN KEY (`book`) REFERENCES `books` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_user` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
