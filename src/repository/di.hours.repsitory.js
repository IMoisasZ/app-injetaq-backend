import DIHoursModel from '../model/di.hours.model.js'
import DIModel from '../model/di.model.js'
import OperationModel from '../model/operation.model.js'

async function includeDIHours(di_hours) {
	try {
		const newDIHours = await DIHoursModel.create(di_hours)
		return await getDIHours(newDIHours.id)
	} catch (error) {
		throw error
	}
}

async function updateDIHours(di_hours) {
	try {
		await DIHoursModel.update(di_hours, {
			where: {
				id: di_hours.id,
			},
		})
		return await getDIHours(di_hours.id)
	} catch (error) {
		throw error
	}
}

async function getAllDIHours(di_id) {
	console.debug('respository', di_id)
	try {
		return await DIHoursModel.findAll({
			include: [
				{
					model: OperationModel,
				},
				{
					model: DIModel,
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

async function getDIHours(id) {
	try {
		return await DIHoursModel.findByPk(id, {
			include: [
				{
					model: OperationModel,
				},
				{
					model: DIModel,
				},
			],
		})
	} catch (error) {
		throw error
	}
}

async function deleteDIHours(id) {
	try {
		await DIHoursModel.destroy({
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
	includeDIHours,
	updateDIHours,
	getAllDIHours,
	getDIHours,
	deleteDIHours,
}
