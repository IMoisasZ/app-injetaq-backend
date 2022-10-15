import Sequelize from 'sequelize'
import DBCONNECTION from '../connection/db.connection.js'

const Sector = DBCONNECTION.define(
	'sector',
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
	{ tableName: 'sector' },
)

Sector.sync()
export default Sector
