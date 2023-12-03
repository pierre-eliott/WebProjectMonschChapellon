# API de Stations de Recharge

*10/12/2023, Pierre-Eliott Monsch - Léa Chapellon*

Cette API sert de système de gestion des stations de recharge en offrant des fonctionnalités pour manipuler et récupérer les données des stations.

## Installation

Pour utiliser cette API, suivez ces étapes :

1. Clonez le dépôt.
2. Installez les dépendances avec `npm install`.
3. Configurez les variables d'environnement, y compris `PORT`.

## Lancement de l'Application

Pour démarrer l'application, exécutez `npm start`.

## Endpoints 

`POST /stations`

Crée une nouvelle station.

Exemple de corps de requête :
```JSON
{
  "n_amenageur": "Nom de l'aménageur",
  "n_operateur": "Nom de l'opérateur",
  "id_station": "ID de la station",
  "n_station": "Nom de la station",
  "ad_station": "Adresse de la station",
  "code_insee": 12345,
  "xlongitude": 12.345,
  "ylatitude": 67.89,
  "nbre_pdc": 3,
  "id_pdc": "ID du PDC",
  "puiss_max": 50,
  "type_prise": "Type de prise",
  "acces_recharge": "Accès",
  "accessibilite": "Accessibilité",
  "observations": "Observations",
  "date_maj": "2023-11-30",
  "region": "Région",
  "departement": "Département",
  "isFavorite": false
}
```

`GET /stations`

Récupère toutes les stations.

`POST /stations/search`

Recherche des stations par nom.

Exemple de corps de requête :
```JSON
{
  "name": "Nom de la station"
}
```

`POST /stations/fav`

Ajoute ou supprime une station des favoris.

Exemple de corps de requête :
```JSON
{
  "id": 1
}
```

## Modèles
Station représente la structure d'une station.

Champs :

- `id` (number)
- `n_amenageur` (string)
- `n_operateur` (string)
- `id_station` (string)
- `n_station` (string)
- `ad_station` (string)
- `code_insee` (number)
- `xlongitude` (number)
- `ylatitude` (number)
- `nbre_pdc` (number)
- `id_pdc` (string)
- `puiss_max` (number)
- `type_prise` (string)
- `acces_recharge` (string)
- `accessibilite` (string)
- `observations` (string)
- `date_maj` (string - Format Date)
- `region` (string)
- `departement` (string)
- `isFavorite` (boolean)

## Interface Station API

Définit la structure des données de la station récupérées depuis l'API.

Référez-vous au code pour la structure complète des interfaces Station et StationAPI.
