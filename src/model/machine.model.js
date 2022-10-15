import Sequelize from 'sequelize';
import DBCONNECTION from '../connection/db.connection.js';

const Machine = DBCONNECTION.define(
  'machine',
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
    type: {
      type: Sequelize.STRING,
      defaultValue: 'padrao',
    },
    actived: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  { tableName: 'machine' }
);

Machine.sync();

export default Machine;
