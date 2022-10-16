import Sequelize from 'sequelize';
import DBCONNECTION from '../connection/db.connection.js';

const AppointmentCode = DBCONNECTION.define(
  'appointmentCode',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    actived: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  { tableName: 'appointmentCode' }
);

AppointmentCode.sync();

export default AppointmentCode;
