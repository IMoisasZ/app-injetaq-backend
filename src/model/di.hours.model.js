import Sequelize from 'sequelize'
import DBCONNECTION from '../connection/db.connection.js'
import DIModel from './di.model.js'
import OperationModel from './operation.model.js'

const DIHours = DBCONNECTION.define(
	'di_hours',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		di_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		operation_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		quantity: {
			type: Sequelize.DECIMAL(10, 4),
			allowNull: false,
		},
		price: {
			type: Sequelize.DECIMAL(10, 4),
			allowNull: false,
		},
	},
	{ tableName: 'di_hours' },
)

export default DIHours

DIHours.sync()

DIHours.belongsTo(OperationModel, { foreignKey: 'operation_id' })
DIHours.hasMany(DIModel, { foreignKey: 'di_id', as: 'di_' })
