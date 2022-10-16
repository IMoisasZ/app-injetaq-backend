import Sequelize from 'sequelize';
import DBCONNECTION from '../connection/db.connection.js';
import WorkstationConnectOperation from './workstationConnectOperation.model.js';

const Workstation = DBCONNECTION.define(
  'workstation',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    actived: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  { tableName: 'workstation' }
);

Workstation.sync();

export default Workstation;
