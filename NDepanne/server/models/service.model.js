const sequelize = require("../dbConfig/db");
const { Model, DataTypes } = require("sequelize");

class Service extends Model {}

Service.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Service",
  }
);

module.exports = Service;