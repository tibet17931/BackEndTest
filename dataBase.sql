-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 29, 2020 at 04:17 PM
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
-- Database: `backendtest`
--

-- --------------------------------------------------------

--
-- Table structure for table `order_tb`
--

CREATE TABLE `order_tb` (
  `order_id` int(20) NOT NULL,
  `pro_id` int(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` enum('waiting','success','cancel','') NOT NULL,
  `createDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_tb`
--

INSERT INTO `order_tb` (`order_id`, `pro_id`, `user_id`, `status`, `createDate`) VALUES
(1, 6, 27, 'waiting', '2020-06-29 13:29:09'),
(2, 6, 27, 'cancel', '2020-06-29 13:30:11'),
(3, 6, 27, 'waiting', '2020-06-29 13:30:49');

-- --------------------------------------------------------

--
-- Table structure for table `product_tb`
--

CREATE TABLE `product_tb` (
  `pro_id` int(20) NOT NULL,
  `pro_brand` varchar(100) NOT NULL,
  `pro_name` varchar(200) NOT NULL,
  `pro_detail` varchar(500) NOT NULL,
  `createDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_tb`
--

INSERT INTO `product_tb` (`pro_id`, `pro_brand`, `pro_name`, `pro_detail`, `createDate`) VALUES
(6, 'dell', 'mobilesmile', 'asdasdasd', '2020-06-29 19:55:03');

-- --------------------------------------------------------

--
-- Table structure for table `user_tb`
--

CREATE TABLE `user_tb` (
  `user_id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `firstname` varchar(200) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `age` int(10) NOT NULL,
  `address` varchar(500) NOT NULL,
  `phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_tb`
--

INSERT INTO `user_tb` (`user_id`, `username`, `password`, `firstname`, `lastname`, `age`, `address`, `phone`) VALUES
(25, 'yeen', '123456', 'tibet', 'pppp', 16, '205/1446 sadd', '0830549085'),
(26, 'yeen007', '123456', 'tibet', 'pppp', 25, '205/1446 sadd', '0830549085'),
(27, 'tibet17931', '123456', 'tibet', 'pppp', 25, '205/1446 sadd', '0830549085');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `order_tb`
--
ALTER TABLE `order_tb`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `product_tb`
--
ALTER TABLE `product_tb`
  ADD PRIMARY KEY (`pro_id`);

--
-- Indexes for table `user_tb`
--
ALTER TABLE `user_tb`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `order_tb`
--
ALTER TABLE `order_tb`
  MODIFY `order_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_tb`
--
ALTER TABLE `product_tb`
  MODIFY `pro_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user_tb`
--
ALTER TABLE `user_tb`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
