import SectorModel from '../model/sector.model.js'

async function createSector(sector) {
	try {
		const newSector = await SectorModel.create(sector)
		return await getSector(newSector.id)
	} catch (error) {
		throw error
	}
}

async function updateSector(sector) {
	try {
		await SectorModel.update(sector, {
			where: {
				id: sector.id,
			},
		})
		return await getSector(sector.id)
	} catch (error) {
		throw error
	}
}

async function getSectors() {
	try {
		return await SectorModel.findAll()
	} catch (error) {
		throw error
	}
}

async function getSectorsActived() {
	try {
		return await SectorModel.findAll({
			where: {
				actived: true,
			},
		})
	} catch (error) {
		throw error
	}
}

async function getSector(id) {
	try {
		return await SectorModel.findByPk(id)
	} catch (error) {
		throw error
	}
}

async function disableEnableSector(id, actived) {
	try {
		await SectorModel.update(
			{
				actived,
			},
			{
				where: {
					id,
				},
			}
		)
		return await getSector(id)
	} catch (error) {
		throw error
	}
}

export default {
	createSector,
	updateSector,
	getSectors,
	getSector,
	getSectorsActived,
	disableEnableSector,
}
