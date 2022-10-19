import UserService from '../service/user.service.js'

async function createUser(req, res, next) {
	try {
		const user = req.body

		if (!user.name)
			return res.status(400).json({ error: 'O nome deve ser informado!' })
		if (!user.lastName)
			return res.status(400).json({ error: 'O sobrenome deve ser informado!' })
		if (!user.email)
			return res.status(400).json({ error: 'O email deve ser informado!' })
		if (!user.role)
			return res
				.status(400)
				.json({ error: 'O tipo de perfil deve ser informado!' })
		if (!user.password)
			return res.status(400).json({ error: 'A senha deve ser informada' })
		if (!user.confirmPassword)
			return res
				.status(400)
				.json({ error: 'A confirmação da senha deve ser informada!' })

		logger.info(`POST - /user - ${JSON.stringify(user)}`)
		return res.send(await UserService.createUser(user))
	} catch (error) {
		next(error)
	}
}

async function updateUser(req, res, next) {
	try {
		const user = req.body
		if (!user.name)
			return res.status(400).json({ error: 'O nome deve ser informado!' })
		if (!user.lastName)
			return res.status(400).json({ error: 'O sobrenome deve ser informado!' })
		if (!user.email)
			return res.status(400).json({ error: 'O email deve ser informado!' })
		if (!user.role)
			return res.status(400).json({ error: 'O tipo de perfil deve ser informado!' })
		res.send(await UserService.updateUser(user))
		logger.info(`PATCH - /user - ${JSON.stringify(user)}`)
	} catch (error) {
		next(error)
	}
}

async function updateChangePasswordUser(req, res, next) {
	try {
		const { email, password, confirmPassword } = req.body
		
		if (!email) return res.status(400).json({ error: 'O email deve ser informado!' })
		if (!password)
			return res.status(400).json({ error: 'A senha deve ser infromada!' })
		if (!confirmPassword)
			return res
				.status(400)
				.json({ error: 'A confrimação da senha deve ser informada!' })

		res.send(
			await UserService.updateChangePasswordUser(
				email,
				password,
				confirmPassword,
			),
		)
		logger.info(`PATCH - /user - ${JSON.stringify(req.body)}`)
	} catch (error) {
		next(error)
	}
}

async function getUsers(req, res, next) {
	try {
		res.send(await UserService.getUsers())
		logger.info(`GET - /user - ALL USERS`)
	} catch (error) {
		next(error)
	}
}

async function getUser(req, res, next) {
	try {
		res.send(await UserService.getUser(req.params.id))
		logger.info(`GET - /user/${req.params.id}`)
	} catch (error) {
		next(error)
	}
}

async function disableEnableUser(req, res, next) {
	try {
		const { id, actived } = req.body
		res.send(await UserService.disableEnableUser(id, actived))
		logger.info(`PUT - /user - ${JSON.stringify(req.body)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	createUser,
	updateUser,
	updateChangePasswordUser,
	getUsers,
	getUser,
	disableEnableUser,
}
