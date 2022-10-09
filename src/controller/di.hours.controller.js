import DIHoursService from '../service/di.hours.service.js'

async function includeDIHours(req, res, next) {
	try {
		const di_hours = req.body
		if (!di_hours.operation_id)
			res.status(400).json({ error: 'A operação deve ser informada!' })
		if (!di_hours.quantity)
			res.status(400).json({ error: 'A qanitdade deve ser informada!' })
		if (!di_hours.price)
			res.status(400).json({ error: 'O preço deve ser informado!' })
		res.send(await DIHoursService.includeDIHours(di_hours))
		logger.info(`POST - /di_hours - ${JSON.stringify(di_hours)}`)
	} catch (error) {
		next(error)
	}
}

async function updateDIHours(req, res, next) {
	try {
		const di_hours = req.body
		if (!di_hours.operation_id)
			res.status(400).json({ error: 'A operação deve ser informada!' })
		if (!di_hours.quantity)
			res.status(400).json({ error: 'A qanitdade deve ser informada!' })
		if (!di_hours.price)
			res.status(400).json({ error: 'O preço deve ser informado!' })
		res.send(await DIHoursService.updateDIHours(di_hours))
		logger.info(`POST - /di_hours - ${JSON.stringify(di_hours)}`)
	} catch (error) {
		next(error)
	}
}

async function getAllDIHours(req, res, next) {
	console.debug('controller', req.params.di_id)
	try {
		res.send(await DIHoursService.getAllDIHours(req.params.di_id))
		logger.info(`GET - /di_hours/${JSON.stringify(req.params.di_id)}`)
	} catch (error) {
		next(error)
	}
}

async function getDIHours(req, res, next) {
	try {
		res.send(await DIHoursService.getDIHours(req.params.id))
		logger.info(`GET - /di_hours/${JSON.stringify(req.params.id)}`)
	} catch (error) {
		next(error)
	}
}

async function deleteDIHours(req, res, next) {
	try {
		await DIHoursService.deleteDIHours(req.params.id)
		res.status(200).json({ msg: 'Ação executada com sucesso' })
		logger.info(`DELETE - /di_hours/${JSON.stringify(req.params.id)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	includeDIHours,
	updateDIHours,
	getAllDIHours,
	getDIHours,
	deleteDIHours,
}
