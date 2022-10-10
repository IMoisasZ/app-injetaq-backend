import DIModel from '../model/di.model.js'
import ClientModel from '../model/client.model.js'
import DIHoursModel from '../model/di.hours.model.js'
import OperationModel from '../model/operation.model.js'

async function createDI(di) {
	try {
		const newDI = await DIModel.create(di)
		return await getDI(newDI.id)
	} catch (error) {
		throw error
	}
}

async function updateDI(di) {
	try {
		await DIModel.update(di, {
			where: {
				id: di.id,
			},
		})
		return await getDI(di.id)
	} catch (error) {
		throw error
	}
}

async function getAllDI() {
	try {
		return await DIModel.findAll({
			include: [
				{
					model: ClientModel,
				},
				{
					model: DIHoursModel,
					include: [
						{
							model: OperationModel,
						},
					],
				},
			],
		})
	} catch (error) {
		throw error
	}
}

async function getDI(id) {
	try {
		return await DIModel.findByPk(id, {
			include: [
				{
					model: ClientModel,
				},
				{
					model: DIHoursModel,
					include: [
						{
							model: OperationModel,
						},
					],
				},
			],
		})
	} catch (error) {
		throw error
	}
}

async function changeStatusDI(id, status) {
	try {
		await DIModel.update(
			{
				status,
			},
			{
				where: {
					id,
				},
			}
		)
		return await getDI(id)
	} catch (error) {
		throw error
	}
}

export default {
	createDI,
	updateDI,
	getAllDI,
	getDI,
	changeStatusDI,
}
