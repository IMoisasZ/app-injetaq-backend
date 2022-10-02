import ClientModel from '../model/client.model.js'

async function createClient(client) {
	try {
		const newClient = await ClientModel.create(client)
		return await getClient(newClient.id)
	} catch (error) {
		throw error
	}
}

async function updateClient(client) {
	try {
		await ClientModel.update(client, {
			where: {
				id: client.id,
			},
		})
		return await getClient(client.id)
	} catch (error) {
		throw error
	}
}

async function getClients() {
	try {
		return ClientModel.findAll()
	} catch (error) {
		throw error
	}
}

async function getClient(id) {
	try {
		return await ClientModel.findByPk(id)
	} catch (error) {
		throw error
	}
}

async function disableEnableClient(id, actived) {
	try {
		console.log(actived)
		await ClientModel.update(
			{
				actived,
			},
			{
				where: {
					id,
				},
			}
		)
		return await getClient(id)
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
