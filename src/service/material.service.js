import MaterialRepository from '../repository/material.repository.js'

async function createMaterial(material) {
	try {
		material.description = material.description.toUpperCase()
		return await MaterialRepository.createMaterial(material)
	} catch (error) {
		throw error
	}
}

async function updateMaterial(material) {
	try {
		material.description = material.description.toUpperCase()
		return await MaterialRepository.updateMaterial(material)
	} catch (error) {
		throw error
	}
}

async function getMaterials() {
	try {
		return await MaterialRepository.getMaterials()
	} catch (error) {
		throw error
	}
}

async function getMaterial(id) {
	try {
		return await MaterialRepository.getMaterial(id)
	} catch (error) {
		throw error
	}
}

async function disableEnableMaterial(id, actived) {
	try {
		return await MaterialRepository.disableEnableMaterial(id, actived)
	} catch (error) {
		throw error
	}
}

export default {
	createMaterial,
	updateMaterial,
	getMaterials,
	getMaterial,
	disableEnableMaterial,
}
