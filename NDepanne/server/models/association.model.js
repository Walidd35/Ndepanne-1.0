const Client = require('./client.model');
const Role = require('./role.model');
const Service = require('./service.model');
const Technician = require('./technician.model');
const Appointment = require('./appointment.model');
const Availability = require('./availability.model');
const Payment = require('../models/payment.model');
const sequelize = require('sequelize')


Client.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(Client, { foreignKey: 'role_id' });

Client.hasMany(Appointment, { foreignKey: 'client_id' });
Appointment.belongsTo(Client, { foreignKey: 'client_id' });

Service.hasMany(Appointment, { foreignKey: 'service_id' });
Appointment.belongsTo(Service, { foreignKey: 'service_id' });

Technician.hasMany(Appointment, { foreignKey: 'technician_id' }); 
Appointment.belongsTo(Technician, { foreignKey: 'technician_id' });

Technician.hasMany(Availability, { foreignKey: 'technician_id' });
Availability.belongsTo(Technician, { foreignKey: 'technician_id' });

Appointment.hasOne(Payment, { foreignKey: 'appointment_id' });
Payment.belongsTo(Appointment, { foreignKey: 'appointment_id' });


module.exports = {
  sequelize,
  Client,
  Role,
  Service,
  Technician,
  Appointment,
  Availability,
  Payment,
}; 