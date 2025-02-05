"use strict";

require("dotenv").config(); 
const http = require("http");
const app = require("./app");

const  sequelize  = require('./dbConfig/db');
// const Role = require('./models/roles.model')
// Fonction pour normaliser le port
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val; // Retourne la valeur si ce n'est pas un nombre
  if (port >= 0) return port; // Retourne le port s'il est valide
  return false; 
};


const port = normalizePort(process.env.PORT || "3000");
app.set("port", port); 

// Fonction de gestion des erreurs serveur
const errorHandler = (error) => {
  if (error.syscall !== "listen") throw error;

  const address = server.address();
  const bind = typeof address === "string" ? `pipe ${address}` : `port ${port}`;

  switch (error.code) {
    case "EACCES":
      console.error(`${bind} nécessite des privilèges élevés.`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} est déjà en cours d'utilisation.`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// Création du serveur HTTP
const server = http.createServer(app);

// Gestion des évent du serveur
server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? `pipe ${address}` : `port ${port}`;
  console.log(`Le serveur est en écoute sur ${bind}`);
});

// Init les rôles
// async function initializeRoles() {
//   try {
//     // Vérifier si des rôles existent déjà
//     const count = await Role.count();
//     if (count === 0) {
//       // Insérer les rôles par défaut
//       const roles = ["client", "admin"];
//       for (const roleName of roles) {
//         await Role.create({ name: roleName });
//       }
//       console.log("Rôles initialisés :", roles);
//     } else {
//       console.log("Les rôles existent déjà.");
//     }
//   } catch (err) {
//     console.error("Erreur lors de l'initialisation des rôles :", err);
//   }
// }

// Synchronisation de la base de données
const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false  });
    console.log("Tables synchronisées avec succès.");
    server.listen(port);
  } catch (error) {
    console.error("Erreur lors de la synchronisation de la base de données :", error);
  }
};

// Test de connexion à la base de données
sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion à la base de données réussie.");
    syncDatabase();
    // initializeRoles()
  })
  .catch((err) => {
    console.error("Échec de la connexion à la base de données :", err);
  });



module.exports = server; 
