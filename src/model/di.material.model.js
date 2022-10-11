import Sequelize from 'sequelize'
import DBCONNECTION from '../connection/db.connection.js'
import MaterialModel from './material.model.js'

const DIMaterial = DBCONNECTION.define(
	'di_material',
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
		material_id: {
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
	{ tableName: 'di_material' },
)

export default DIMaterial

DIMaterial.sync()

DIMaterial.belongsTo(MaterialModel, { foreignKey: 'material_id' })
