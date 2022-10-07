import express from 'express'
import cors from 'cors'
import winston from 'winston'

// routes import
import ClientRoute from './src/router/client.route.js'
// create variable app
const app = express()

// cors
app.use(cors())
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE',
	)
	res.header(
		'Access-Control-Allow-Headers',
		'x-access-token, Origin, X-Requested-With, Content-Type, Accept',
	)
	next()
})

// json
app.use(express.json())

// set routes
app.use('/client', ClientRoute)

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
