const sequelize = require("../dbConfig/db");
const { Model, DataTypes } = require("sequelize");

class Client extends Model {}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telephone: {
      type: DataTypes.STRING(20),
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Roles',
        key: 'role_id',
      },
    },
  },
  {
    sequelize,
    modelName: "Client",
  }
);

module.exports = Client;
