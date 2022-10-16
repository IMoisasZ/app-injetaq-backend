import Sequelize from 'sequelize';
import DBCONNECT from '../connection/db.connection.js';
import OperationModel from './operation.model.js';

const WorkstationConnectOperation = DBCONNECT.define(
  'workstationConnectOperation',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    workstation_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    operation_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { tableName: 'wokstationConnectOperation' }
);

WorkstationConnectOperation.sync();

export default WorkstationConnectOperation;

WorkstationConnectOperation.belongsTo(OperationModel, {
  foreignKey: 'operation_id',
});
