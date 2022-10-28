import DIRepository from '../repository/di.repository.js'

async function createDI(di) {
	try {
		di.di = await lastDI()
		di.op = di.op && di.op.toUpperCase()
		di.description = di.description &&  di.description.toUpperCase()
		di.number = di.number && di.number.toUpperCase() 
		di.part_name = di.part_name && di.part_name.toUpperCase() 
		di.part_number = di.part_number && di.part_number.toUpperCase() 
		di.budget_number = di.budget_number && di.budget_number.toUpperCase() 
		di.order_number = di.order_number && di.order_number.toUpperCase() 

		const data = await DIRepository.createDI(di)
		console.log(data);
		return data
	} catch (error) {
		throw error
	}
}

async function lastDI(){
	try {
		const nextDi = await DIRepository.lastDI()
		return nextDi
	} catch (error) {
		throw error
	}
}

async function updateDI(di) {
	try {
		di.op = di.op && di.op.toUpperCase()
		di.description = di.description &&  di.description.toUpperCase()
		di.number = di.number && di.number.toUpperCase() 
		di.part_name = di.part_name && di.part_name.toUpperCase() 
		di.part_number = di.part_number && di.part_number.toUpperCase() 
		di.budget_number = di.budget_number && di.budget_number.toUpperCase() 
		di.order_number = di.order_number && di.order_number.toUpperCase() 

		return await DIRepository.updateDI(di)
	} catch (error) {
		throw error
	}
}

async function getAllDI() {
	try {
		return await DIRepository.getAllDI()
	} catch (error) {
		throw error
	}
}

async function getDI(id) {
	try {
		return await DIRepository.getDI(id)
	} catch (error) {
		throw error
	}
}

async function changeStatusDI(id, status) {
	try {
		status = status.toUpperCase()
		return await DIRepository.changeStatusDI(id, status)
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
