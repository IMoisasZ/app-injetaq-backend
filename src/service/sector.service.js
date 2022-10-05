import SectorRepository from '../repository/sector.repository.js'

async function createSector(sector) {
	try {
		sector.description = sector.description.toUpperCase()
		return await SectorRepository.createSector(sector)
	} catch (error) {
		throw error
	}
}

async function updateSector(sector) {
	try {
		sector.description = sector.description.toUpperCase()
		return await SectorRepository.updateSector(sector)
	} catch (error) {
		throw error
	}
}

async function getSectors() {
	try {
		return await SectorRepository.getSectors()
	} catch (error) {
		throw error
	}
}

async function getSector(id) {
	try {
		return await SectorRepository.getSector(id)
	} catch (error) {
		throw error
	}
}

async function disableEnableSector(id, actived) {
	console.log(id, actived, 'service')
	try {
		return await SectorRepository.disableEnableSector(id, actived)
	} catch (error) {
		throw error
	}
}

export default {
	createSector,
	updateSector,
	getSectors,
	getSector,
	disableEnableSector,
}
