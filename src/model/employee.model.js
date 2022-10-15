import Sequelize from 'sequelize';
import DBCONNECTION from '../connection/db.connection.js';

const Employee = DBCONNECTION.define(
  'employee',
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
    actived: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  { tableName: 'employee' }
);

Employee.sync();

export default Employee;
