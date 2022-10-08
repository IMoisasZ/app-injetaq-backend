import SectorService from '../service/sector.service.js'

async function createSector(req, res, next) {
	try {
		const sector = req.body
		if (!sector.description)
			res.status(400).json({ error: 'O setor deve ser preenchido!' })
		res.send(await SectorService.createSector(sector))
		logger.info(`POST - /sector - ${JSON.stringify(sector)}`)
	} catch (error) {
		next(error)
	}
}

async function updateSector(req, res, next) {
	try {
		const sector = req.body
		if (!sector.description)
			res.status(400).json({ error: 'O setor deve ser preenchido!' })
		res.send(await SectorService.updateSector(sector))
		logger.info(`PATCH - /sector - ${JSON.stringify(sector)}`)
	} catch (error) {
		next(error)
	}
}

async function getSectors(req, res, next) {
	try {
		const { actived } = req.query
		console.log(actived, 'query')
		if (!actived) {
			res.send(await SectorService.getSectors())
			logger.info(`GET - /sector - ALL SECTORS`)
		} else {
			res.send(await SectorService.getSectors(actived))
			logger.info(`GET - /sector - ALL SECTORS`)
		}
	} catch (error) {
		next(error)
	}
}

async function getSector(req, res, next) {
	try {
		res.send(await SectorService.getSector(req.params.id))
		logger.info(`GET - /sector/${req.params.id}`)
	} catch (error) {
		next(error)
	}
}

async function disableEnableSector(req, res, next) {
	try {
		const { id, actived } = req.body
		res.send(await SectorService.disableEnableSector(id, actived))
		logger.info(`PUT - /sector - ${JSON.stringify(req.body)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	createSector,
	updateSector,
	getSectors,
	getSector,
	disableEnableSector,
}
