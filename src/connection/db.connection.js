import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env

const DBCONNECTION = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	host: 'localhost',
	dialect: 'mysql',
	define: {
		timestamps: true,
	},
})

export default DBCONNECTION
