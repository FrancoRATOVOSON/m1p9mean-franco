# MEAN Stack E-Kaly

## Introduction

Ce projet est réalisé dans le cadre d'un projet individuel universitaire MEAN Stack.

Les contraintes de réalisation et consignes sont dans le document pdf nommé `Projet-Mean-M1-P9.pdf`.

## Organisation générale

Comme l'application sera hébergée sur un dynos Heroku, nous allons, à terme, servir la page créé à partir de Angular avec notre serveur Express.

Dans une version avancée, nous aurions séparé le client en 2 versions: une pour les utilisateurs cliens et une autre (que nous pouvons imaginé comme étant hébergé avec un sous-domaine de l'application principale ou enveloppé dans un desktop app avec Electron ou Tauri...) comme dashboard pour les besoins d'administration. Mais pour cette fois ci, nous allons utiliser une architecture monolithique et séparer juste les parties dans un sous-domaine.

## Modélisation et architecture

En développement, nous allons créer 2 dossier, l'un pour le frontend et l'autre pour le serveur. Ainsi, dans chaque dossier se trouvera un README.md qui expliquera en profondeur les détails de conception.
