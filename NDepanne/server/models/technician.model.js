const sequelize = require("../dbConfig/db");
const { Model, DataTypes } = require("sequelize");

class Technician extends Model {}

Technician.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING(20),
    },
    skills: {
      type: DataTypes.TEXT,
    },
    availability: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "Technician",
  }
);

module.exports = Technician;
