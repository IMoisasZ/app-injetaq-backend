import Sequelize from 'sequelize';
import DBCONNECTION from '../connection/db.connection.js';
import SectorModel from './sector.model.js';

const Operation = DBCONNECTION.define(
  'operation',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    sector_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    actived: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  { tableName: 'operation' }
);

export default Operation;

Operation.sync();

Operation.belongsTo(SectorModel, { foreignKey: 'sector_id' });
