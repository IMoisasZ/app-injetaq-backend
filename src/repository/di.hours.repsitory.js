import DIHoursModel from '../model/di.hours.model.js'
import OperationModel from '../model/operation.model.js'
import DIModel from '../model/di.model.js'
import sequelize from 'sequelize'

async function includeDIHours(di_hours) {
	console.debug('repository', di_hours)
	try {
		const newDIHours = await DIHoursModel.create(di_hours)
		return await getDIHours(newDIHours.id)
	} catch (error) {
		console.log({ error })
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
	try {
		return await DIHoursModel.findAll({
			include: [
				{
					model: OperationModel,
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
