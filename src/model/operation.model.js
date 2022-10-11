import Sequelize from 'sequelize'
import DBCONNECTION from '../connection/db.connection.js'

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
	{ tableName: 'operation' },
)

export default Operation

Operation.sync({ alter: true })

Operation.associate = (models) => {
	Operation.belongsTo(models.Sector, { foreignKey: 'sector_id' })
}
