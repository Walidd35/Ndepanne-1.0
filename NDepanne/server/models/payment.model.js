const sequelize = require("../dbConfig/db");
const { Model, DataTypes } = require("sequelize");

class Payment extends Model {}

Payment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    appointment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Appointmentsls',
        key: 'id',
      },
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    payment_method: {
      type: DataTypes.STRING(50),
    },
    status: {
      type: DataTypes.STRING(50),
      defaultValue: 'pending',
    },
  },
  {
    sequelize,
    modelName: "Payment",
  }
);

module.exports = Payment;