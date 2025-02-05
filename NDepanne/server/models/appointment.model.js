const sequelize = require("../dbConfig/db");
const { Model, DataTypes } = require("sequelize");

class Appointment extends Model {}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    client_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Client',
        key: 'id',
      },
    },
    service_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Service',
        key: 'id',
      },
    },
    technician_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Technician',
        key: 'id',
      },
    },
    address: {
      type: DataTypes.STRING,
    },
    referenceProduit: {
      type: DataTypes.STRING,
    },
    productDetail: {
      type: DataTypes.TEXT,
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      defaultValue: 'pending',
    },
    notes: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "Appointment",
  }
);

module.exports = Appointment;