-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 17 sep. 2021 à 19:00
-- Version du serveur :  10.4.19-MariaDB
-- Version de PHP : 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestionlabo`
--

-- --------------------------------------------------------

--
-- Structure de la table `laboratoire`
--

CREATE TABLE `laboratoire` (
  `code` varchar(64) NOT NULL,
  `acronyme` varchar(255) DEFAULT NULL,
  `adresse_officielle` varchar(255) DEFAULT NULL,
  `date_creation` date DEFAULT NULL,
  `denomination` varchar(255) DEFAULT NULL,
  `discipline` varchar(255) DEFAULT NULL,
  `domaine` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `institution` varchar(255) DEFAULT NULL,
  `nom_complet_en_anglais` varchar(255) DEFAULT NULL,
  `nom_complet_en_arabe` varchar(255) DEFAULT NULL,
  `site_web` varchar(255) DEFAULT NULL,
  `specialite` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `universite` varchar(255) DEFAULT NULL,
  `directeur_cin_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `dtype` varchar(31) NOT NULL,
  `id` int(11) NOT NULL,
  `cin` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `directeur_depuis` date DEFAULT NULL,
  `nom_directeur` varchar(255) DEFAULT NULL,
  `telephone_mobile` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`dtype`, `id`, `cin`, `email`, `grade`, `password`, `directeur_depuis`, `nom_directeur`, `telephone_mobile`) VALUES
('User', 2, NULL, 'admin@gmail.com', 'admin', 'admin', NULL, NULL, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `laboratoire`
--
ALTER TABLE `laboratoire`
  ADD PRIMARY KEY (`code`),
  ADD KEY `FK14x9yhpxji6om9r5bk2lfbrw8` (`directeur_cin_id`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
