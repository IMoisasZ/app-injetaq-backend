import OperationRepository from '../repository/operation.repository.js'

async function createOperation(operation) {
	try {
		operation.description = operation.description.toUpperCase()
		return await OperationRepository.createOperation(operation)
	} catch (error) {
		throw error
	}
}

async function updateOperation(operation) {
	try {
		operation.description = operation.description.toUpperCase()
		return await OperationRepository.updateOperation(operation)
	} catch (error) {
		throw error
	}
}

async function getOperations() {
	try {
		return await OperationRepository.getOperations()
	} catch (error) {
		throw error
	}
}

async function getOperation(id) {
	try {
		return await OperationRepository.getOperation(id)
	} catch (error) {
		throw error
	}
}

async function disableEnableOperation(id, actived) {
	try {
		return await OperationRepository.disableEnableOperation(id, actived)
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
