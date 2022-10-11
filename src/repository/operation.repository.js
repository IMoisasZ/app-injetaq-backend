import OperationModel from '../model/operation.model.js'
import SectorModel from '../model/sector.model.js'

async function createOperation(operation) {
	try {
		const newOperation = await OperationModel.create(operation)
		return await getOperation(newOperation.id)
	} catch (error) {
		throw error
	}
}

async function updateOperation(operation) {
	try {
		await OperationModel.update(operation, {
			where: {
				id: operation.id,
			},
		})
		return await getOperation(operation.id)
	} catch (error) {
		throw error
	}
}

async function getOperations() {
	try {
		return await OperationModel.findAll({
			include: [
				{
					model: SectorModel,
				},
			],
		})
	} catch (error) {
		throw error
	}
}

async function getOperation(id) {
	try {
		return await OperationModel.findByPk(id, {
			include: [
				{
					model: SectorModel,
				},
			],
		})
	} catch (error) {
		throw error
	}
}

async function disableEnableOperation(id, actived) {
	try {
		await OperationModel.update(
			{
				actived,
			},
			{
				where: {
					id,
				},
			}
		)
		return await getOperation(id)
	} catch (error) {
		throw error
	}
}

export default {
	createOperation,
	updateOperation,
	getOperations,
	getOperation,
	disableEnableOperation,
}
