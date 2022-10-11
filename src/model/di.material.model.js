import Sequelize from 'sequelize'
import DBCONNECTION from '../connection/db.connection.js'
import MaterialModel from './material.model.js'
import DI from './di.model.js'

const DIMaterial = DBCONNECTION.define(
	'di_material',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		di: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		material_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		quantity: {
			type: Sequelize.DECIMAL,
			allowNull: false,
		},
		price: {
			type: Sequelize.DECIMAL,
			allowNull: false,
		},
	},
	{ tableName: 'di_material' },
)

export default DIMaterial

DIMaterial.sync()

DIMaterial.belongsTo(MaterialModel, { foreignKey: 'material_id' })
DIMaterial.belongsTo(DI, { foreignKey: 'di' })
