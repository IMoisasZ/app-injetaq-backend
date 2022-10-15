import DIMaterialModel from '../model/di.material.model.js'
import MaterialModel from '../model/material.model.js'
import sequelize from 'sequelize'

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

async function sumByMaterial(di_id) {
	const totalMaterial = await DIMaterialModel.findAll({
		where: {
			di_id,
		},
		include:[
			{
				model: MaterialModel
			}
		],
		attributes: [
			'di_id',
			'material_id',
			[sequelize.fn('sum', sequelize.col('total')), 'total_material'],
		],
		group:['material_id']
	})
	return totalMaterial
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
	sumByMaterial,
	deleteDIMaterial,
}
