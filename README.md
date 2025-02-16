# Ndepanne 1.0
# Application de Prise de RDV 'Services Techniques'

Cette application est un système de gestion pour des services techniques, permettant la gestion des rendez-vous, des techniciens, des clients et des paiements.

## 🚀 Prérequis

- Docker
- Docker Compose
- Node.js (pour le développement local)
- Git

## 📦 Installation

1. Clonez le repository
```bash
git clone  https://github.com/Walidd35/Ndepanne-1.0
cd server
```

2. Créez un fichier `.env` à la racine du projet avec les variables suivantes :
```env
DB_HOST=db
DB_USER=votre_user
DB_PASSWORD=votre_password
DB_NAME=votre_db_name
MYSQL_ROOT_PASSWORD=votre_root_password
MYSQL_DATABASE=votre_db_name
MYSQL_USER=votre_user
MYSQL_PASSWORD=votre_password
JWT-SECRET=votreclésecretejwt
```

3. Démarrez l'application avec Docker Compose
```bash
docker-compose up --build
```

L'application sera accessible à l'adresse : `http://localhost:3000`

## 🏗️ Structure de la Base de Données

La base de données sera automatiquement créée et synchronisée au démarrage avec les tables suivantes :
- Roles (rôles utilisateurs)
- Clients (informations des clients)
- Services (services disponibles)
- Technicians (informations des techniciens)
- Appointments (rendez-vous)
- Availabilities (disponibilités des techniciens)
- Payments (paiements)

## 🛠️ Développement

Pour développer localement :

1. Les modifications du code sont automatiquement prises en compte grâce à Nodemon
2. Les volumes Docker permettent de persister les données de la base
3. Le code source est synchronisé entre votre machine locale et le container

## 📝 API Endpoints

[à venir]

## 🔒 Sécurité

Par défaut, deux rôles sont créés :
- admin
- client

## 🐳 Commandes Docker utiles

```bash
# Démarrer l'application
docker-compose up

# Démarrer en arrière-plan
docker-compose up -d

# Arrêter l'application
docker-compose down

# Voir les logs
docker-compose logs -f

# Reconstruire les images
docker-compose build

# Supprimer les volumes (réinitialiser la DB)
docker-compose down -v
```

## 🔄 Synchronisation de la Base de Données

La base de données est automatiquement synchronisée au démarrage :
1. Les tables sont créées si elles n'existent pas
2. Les relations entre les tables sont établies
3. Les rôles par défaut sont créés

Aucune action supplémentaire n'est nécessaire pour initialiser la base de données.

## 💡 Contribution

1. Forkez le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 License

[MIT]

