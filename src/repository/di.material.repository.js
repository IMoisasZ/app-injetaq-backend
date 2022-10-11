import DIMaterialModel from '../model/di.material.model.js'
import MaterialModel from '../model/material.model.js'

async function includeDIMaterial(di_material) {
	try {
		const newDIMaterial = await DIMaterialModel.create(di_material)
		return await getDIMaterial(newDIMaterial.id)
	} catch (error) {
		throw error
	}
}

async function updateDIMaterial(di_material) {
	try {
		await DIMaterialModel.update(di_material, {
			where: {
				id: di_material.id,
			},
		})
		return await getDIMaterial(di_material.id)
	} catch (error) {
		throw error
	}
}

async function getAllDIMaterial(di_id) {
	try {
		return await DIMaterialModel.findAll({
			include: [
				{
					model: MaterialModel,
				},
			],
			where: {
				di_id,
			},
		})
	} catch (error) {
		throw error
	}
}

async function getDIMaterial(id) {
	try {
		return await DIMaterialModel.findByPk(id, {
			include: [
				{
					model: MaterialModel,
				},
			],
		})
	} catch (error) {
		throw error
	}
}

async function deleteDIMaterial(id) {
	try {
		await DIMaterialModel.destroy({
			where: {
				id,
			},
		})
		return true
	} catch (error) {
		throw error
	}
}

export default {
	includeDIMaterial,
	updateDIMaterial,
	getAllDIMaterial,
	getDIMaterial,
	deleteDIMaterial,
}
