import OperationService from '../service/operation.service.js'

async function createOperation(req, res, next) {
	try {
		const operation = req.body
		if (!operation.description)
			res.status(400).json({ error: 'Operação não informada!' })
		if (!operation.sector_id)
			res.status(400).json({ error: 'Setor não informado!' })
		res.send(await OperationService.createOperation(operation))
		logger.info(`POST - /operation - ${JSON.stringify(operation)}`)
	} catch (error) {
		next(error)
	}
}

async function updateOperation(req, res, next) {
	try {
		const operation = req.body
		console.log(operation)
		if (!operation.description)
			res.status(400).json({ error: 'Operação não informada!' })
		if (!operation.sector_id)
			res.status(400).json({ error: 'Setor não informado!' })
		res.send(await OperationService.updateOperation(operation))
		logger.info(`PATCH - /operation - ${JSON.stringify(operation)}`)
	} catch (error) {
		next(error)
	}
}

async function getOperations(req, res, next) {
	try {
		res.send(await OperationService.getOperations())
		logger.info(`GET - /operation - ALL OPERATIONS`)
	} catch (error) {
		next(error)
	}
}

async function getOperation(req, res, next) {
	try {
		res.send(await OperationService.getOperation(req.params.id))
		logger.info(`GET - /operation/${req.params.id}`)
	} catch (error) {
		next(error)
	}
}

async function disableEnableOperation(req, res, next) {
	try {
		const { id, actived } = req.body
		res.send(await OperationService.disableEnableOperation(id, actived))
		logger.info(`PUT - /operation - ${JSON.stringify(req.body)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	createOperation,
	updateOperation,
	getOperations,
	getOperation,
	disableEnableOperation,
}
