import DIMaterialService from '../service/di.material.service.js'

async function includeDIMaterial(req, res, next) {
	try {
		const di_material = req.body

		if (!di_material.material_id)
			res.status(400).json({ error: 'O material deve ser informado!' })
		if (!di_material.total)
			res.status(400).json({ error: 'O preço total deve ser informado!' })
		res.send(await DIMaterialService.includeDIMaterial(di_material))
		logger.info(`POST - /di_material - ${JSON.stringify(di_material)}`)
	} catch (error) {
		next(error)
	}
}

async function updateDIMaterial(req, res, next) {
	try {
		const di_material = req.body
		if (!di_material.material_id)
			res.status(400).json({ error: 'O material deve ser informado!' })
		if (!di_material.total)
			res.status(400).json({ error: 'O preço total deve ser informado!' })
		res.send(await DIMaterialService.updateDIMaterial(di_material))
		logger.info(`POST - /di_material - ${JSON.stringify(di_material)}`)
	} catch (error) {
		next(error)
	}
}

async function getAllDIMaterial(req, res, next) {
	try {
		res.send(await DIMaterialService.getAllDIMaterial(req.params.di_id))
		logger.info(`GET - /di_Material/${JSON.stringify(req.params.di_id)}`)
	} catch (error) {
		next(error)
	}
}

async function sumByMaterial(req, res, next) {
	try {
		res.send(await DIMaterialService.sumByMaterial(req.params.di_id))
		logger.info(`GET - /di_Material/material/sum${JSON.stringify(req.params.di_id)}`)
	} catch (error) {
		next(error)
	}
}

async function getDIMaterial(req, res, next) {
	try {
		res.send(await DIMaterialService.getDIMaterial(req.params.id))
		logger.info(`GET - /di_Material/${JSON.stringify(req.params.id)}`)
	} catch (error) {
		next(error)
	}
}

async function deleteDIMaterial(req, res, next) {
	try {
		await DIMaterialService.deleteDIMaterial(req.params.id)
		res.status(200).json({ msg: 'Ação executada com sucesso' })
		logger.info(`DELETE - /di_Material/${JSON.stringify(req.params.id)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	includeDIMaterial,
	updateDIMaterial,
	getAllDIMaterial,
	sumByMaterial,
	getDIMaterial,
	deleteDIMaterial,
}
