import DIService from '../service/di.service.js'

async function createDI(req, res, next) {
	try {
		const di = req.body
		if (!di.di) res.status(400).json({ error: 'A DI deve ser informada!' })
		if (!di.client_id)
			res.status(400).json({ error: 'O cliente deve ser informado!' })
		res.send(await DIService.createDI(di))
		logger.info(`POST - /di - ${JSON.stringify(di)}`)
	} catch (error) {
		next(error)
	}
}

async function updateDI(req, res, next) {
	try {
		const di = req.body
		if (!di.di) res.status(400).json({ error: 'A DI deve ser informada!' })
		if (!di.client_id)
			res.status(400).json({ error: 'O cliente deve ser informado!' })
		res.send(await DIService.updateDI(di))
		logger.info(`PATCH - /di - ${JSON.stringify(di)}`)
	} catch (error) {
		next(error)
	}
}

async function getAllDI(req, res, next) {
	try {
		res.send(await DIService.getAllDI())
		logger.info(`GET - /di - ALL DI's`)
	} catch (error) {
		next(error)
	}
}

async function getDI(req, res, next) {
	try {
		res.send(await DIService.getDI(req.params.id))
		logger.info(`GET - /di/${req.params.id}`)
	} catch (error) {
		next(error)
	}
}

async function changeStatusDI(req, res, next) {
	try {
		const { id, status } = req.body
		res.send(await DIService.changeStatusDI(id, status))
		logger.info(`PUT /di - ${JSON.stringify(req.body)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	createDI,
	updateDI,
	getAllDI,
	getDI,
	changeStatusDI,
}
