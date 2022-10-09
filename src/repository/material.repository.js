import MaterialModel from '../model/material.model.js'

async function createMaterial(material) {
	try {
		const newMterial = await MaterialModel.create(material)
		return await getMaterial(newMterial.id)
	} catch (error) {
		throw error
	}
}

async function updateMaterial(material) {
	try {
		await MaterialModel.update(material, {
			where: {
				id: material.id,
			},
		})
		return await getMaterial(material.id)
	} catch (error) {
		throw error
	}
}

async function getMaterials() {
	try {
		return await MaterialModel.findAll()
	} catch (error) {
		throw error
	}
}

async function getMaterial(id) {
	try {
		return await MaterialModel.findByPk(id)
	} catch (error) {
		throw error
	}
}

async function disableEnableMaterial(id, actived) {
	try {
		await MaterialModel.update(
			{
				actived,
			},
			{
				where: {
					id,
				},
			},
		)
		return await getMaterial(id)
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
