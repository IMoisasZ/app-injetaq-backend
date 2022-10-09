import MaterialService from '../service/material.service.js'

async function createMaterial(req, res, next) {
	try {
		const material = req.body
		if (!material.description)
			res.status(400).json({ error: 'O material deve ser informado!' })
		res.send(await MaterialService.createMaterial(material))
		logger.info(`POST - /material - ${JSON.stringify(material)}`)
	} catch (error) {
		next(error)
	}
}

async function updateMaterial(req, res, next) {
	try {
		const material = req.body
		if (!material.description)
			res.status(400).json({ error: 'O material deve ser informado!' })
		res.send(await MaterialService.updateMaterial(material))
		logger.info(`PATCH - /material - ${JSON.stringify(material)}`)
	} catch (error) {
		next(error)
	}
}

async function getMaterials(req, res, next) {
	try {
		res.send(await MaterialService.getMaterials())
		logger.info(`GET - /material - ALL MATERIALS`)
	} catch (error) {
		next(error)
	}
}

async function getMaterial(req, res, next) {
	try {
		res.send(await MaterialService.getMaterial(req.params.id))
		logger.info(`GET - /material/${req.params.id}`)
	} catch (error) {
		next(error)
	}
}

async function disableEnableMaterial(req, res, next) {
	try {
		const { id, actived } = req.body
		res.send(await MaterialService.disableEnableMaterial(id, actived))
		logger.info(`PUT - /material - ${JSON.stringify(req.body)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	createMaterial,
	updateMaterial,
	getMaterials,
	getMaterial,
	disableEnableMaterial,
}
