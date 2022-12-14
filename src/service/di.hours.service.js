import DIHoursRepository from '../repository/di.hours.repository.js'

async function includeDIHours(di_hours) {
	try {
		console.debug('service', di_hours)
		return await DIHoursRepository.includeDIHours(di_hours)
	} catch (error) {
		throw error
	}
}

async function updateDIHours(di_hours) {
	try {
		return await DIHoursRepository.updateDIHours(di_hours)
	} catch (error) {
		throw error
	}
}

async function getAllDIHours(di_id) {
	console.debug('service', di_id)
	try {
		return await DIHoursRepository.getAllDIHours(di_id)
	} catch (error) {
		throw error
	}
}

async function sumByHours(di_id) {
	try {
		return await DIHoursRepository.sumByHours(di_id)
	} catch (error) {
		throw error
	}
}

async function sumTotal(di_id) {
	try {
		return await DIHoursRepository.sumTotal(di_id)
	} catch (error) {
		throw error
	}
}

async function getDIHours(id) {
	try {
		return await DIHoursRepository.getDIHours(id)
	} catch (error) {
		throw error
	}
}

async function deleteDIHours(id) {
	try {
		return await DIHoursRepository.deleteDIHours(id)
	} catch (error) {
		throw error
	}
}

export default {
	includeDIHours,
	updateDIHours,
	getAllDIHours,
	sumByHours,
	sumTotal,
	getDIHours,
	deleteDIHours,
}
