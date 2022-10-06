import express from 'express'
import cors from 'cors'
import winston from 'winston'

// routes import
import ClientRoute from './src/router/client.route.js'
import SectorRoute from './src/router/sector.route.js'
import OperationRoute from './src/router/operation.route.js'

// create variable app
const app = express()

// cors
app.use(cors())

// json
app.use(express.json())

// set routes
app.use('/client', ClientRoute)
app.use('/sector', SectorRoute)
app.use('/operation', OperationRoute)

// winston(log)
const { combine, timestamp, label, printf } = winston.format
const myformat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level} ${message}`
})
global.logger = winston.createLogger({
	level: 'silly',
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'app-injetaq' }),
	],
	format: combine(label({ label: 'app-injetaq' }), timestamp(), myformat),
})

// erro padrão
app.use((err, req, res, next) => {
	global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
	res.status(400).send({ erros: err.message })
})

export default app
