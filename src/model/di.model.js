import Sequelize, { INTEGER } from 'sequelize'
import DBCONNECTION from '../connection/db.connection.js'
import DIHoursModel from './di.hours.model.js'
import DIMaterial from './di.material.model.js'
import ClientModel from './client.model.js'

const DI = DBCONNECTION.define(
	'di',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		di: {
			type: INTEGER,
			allowNull: false,
			unique: true,
		},
		op: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		description: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		number: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		part_name: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		part_number: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		client_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		start: {
			type: Sequelize.DATE,
			allowNull: true,
		},
		finish: {
			type: Sequelize.DATE,
			allowNull: true,
		},
		budget_number: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		order_number: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		status: {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: 'PENDENTE',
		},
	},
	{ tableName: 'di' },
)

export default DI

DI.sync()

DI.belongsTo(ClientModel, { foreignKey: 'client_id' })
DI.hasMany(DIHoursModel, { foreignKey: 'di_id' })
DI.hasMany(DIMaterial, { foreignKey: 'di_id' })
