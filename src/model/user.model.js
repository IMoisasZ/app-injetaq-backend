import Sequelize from 'sequelize'
import DBCONNECTION from '../connection/db.connection.js'

const User = DBCONNECTION.define(
	'user',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		lastName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		role: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		actived: {
			type: Sequelize.BOOLEAN,
			defaultValue: true,
		},
	},
	{ tableName: 'user' },
)

export default User

User.sync()
