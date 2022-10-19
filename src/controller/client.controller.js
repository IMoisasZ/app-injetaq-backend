import ClientService from '../service/client.service.js'

async function createClient(req, res, next) {
	try {
		const client = req.body
		if (!client.description)
			return res.status(400).json({ error: 'O cliente deve ser informado!' })
		res.send(await ClientService.createClient(client))
		logger.info(`POST - /client - ${JSON.stringify(client)}`)
	} catch (error) {
		next(error)
	}
}

async function updateClient(req, res, next) {
	try {
		const client = req.body
		if (!client.description)
			return res.status(400).json({ error: 'O cliente deve ser informado!' })

		res.send(await ClientService.updateClient(client))
		logger.info(`PATCH - /client - ${JSON.stringify(client)}`)
	} catch (error) {
		next(error)
	}
}

async function getClients(req, res, next) {
	try {
		res.send(await ClientService.getClients())
		logger.info(`GET - /client - ALL CLIENTS`)
	} catch (error) {
		next(error)
	}
}

async function getClient(req, res, next) {
	try {
		res.send(await ClientService.getClient(req.params.id))
		logger.info(`GET - /client/${req.params.id}`)
	} catch (error) {
		next(error)
	}
}

async function disableEnableClient(req, res, next) {
	try {
		const { id, actived } = req.body
		res.send(await ClientService.disableEnableClient(id, actived))
		logger.info(`PUT - /client - ${JSON.stringify(req.body)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	createClient,
	updateClient,
	getClients,
	getClient,
	disableEnableClient,
}
