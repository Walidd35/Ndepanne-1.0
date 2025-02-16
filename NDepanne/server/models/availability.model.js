const sequelize = require("../dbConfig/db");
const { Model, DataTypes } = require("sequelize");

class Availability extends Model {}

Availability.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    technician_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Technicians',
        key: 'id',
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time_start: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    time_end: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Availability",
  }
);

module.exports = Availability;