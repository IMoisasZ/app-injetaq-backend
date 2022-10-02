import ClientRepository from '../repository/client.repository.js'

async function createClient(client) {
	try {
		client.description = client.description.toUpperCase()
		return await ClientRepository.createClient(client)
	} catch (error) {
		throw error
	}
}

async function updateClient(client) {
	try {
		client.description = client.description.toUpperCase()
		return await ClientRepository.updateClient(client)
	} catch (error) {
		throw error
	}
}

async function getClients() {
	try {
		return await ClientRepository.getClients()
	} catch (error) {
		throw error
	}
}

async function getClient(id) {
	try {
		return await ClientRepository.getClient(id)
	} catch (error) {
		throw error
	}
}

async function disableEnableClient(id, actived) {
	try {
		return await ClientRepository.disableEnableClient(id, actived)
	} catch (error) {
		throw error
	}
}

export default {
	createClient,
	updateClient,
	getClients,
	getClient,
	disableEnableClient,
}
