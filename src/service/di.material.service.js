import DIMaterialRepository from '../repository/di.material.repository.js'

async function includeDIMaterial(di_material) {
	try {
		di_material.description = di_material.description.toUpperCase()
		return await DIMaterialRepository.includeDIMaterial(di_material)
	} catch (error) {
		throw error
	}
}

async function updateDIMaterial(di_material) {
	try {
		di_material.description = di_material.description.toUpperCase()
		return await DIMaterialRepository.updateDIMaterial(di_material)
	} catch (error) {
		throw error
	}
}

async function getAllDIMaterial(di_id) {
	try {
		return await DIMaterialRepository.getAllDIMaterial(di_id)
	} catch (error) {
		throw error
	}
}

async function sumByMaterial(di_id) {
	try {
		return await DIMaterialRepository.sumByMaterial(di_id)
	} catch (error) {
		throw error
	}
}

async function getDIMaterial(id) {
	try {
		return await DIMaterialRepository.getDIMaterial(id)
	} catch (error) {
		throw error
	}
}

async function deleteDIMaterial(id) {
	try {
		return await DIMaterialRepository.deleteDIMaterial(id)
	} catch (error) {
		throw error
	}
}

export default {
	includeDIMaterial,
	updateDIMaterial,
	getAllDIMaterial,
	getDIMaterial,
	sumByMaterial,
	deleteDIMaterial,
}
