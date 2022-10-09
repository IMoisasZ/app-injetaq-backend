import Sequelize from 'sequelize'
import DBCONNECTION from '../connection/db.connection.js'

const Material = DBCONNECTION.define(
	'material',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
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
	{ tableName: 'material' },
)

export default Material

Material.sync()
