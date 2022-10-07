import Sequelize from 'sequelize'
import DBCONNECTION from '../connection/db.connection.js'

const Client = DBCONNECTION.define(
	'client',
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
		actived: {
			type: Sequelize.BOOLEAN,
			defaultValue: true,
		},
	},
	{ tableName: 'client' }
)
export default Client
Client.sync()
