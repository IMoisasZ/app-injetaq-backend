import UserRepository from '../repository/user.repository.js'
import encrypt from '../utils/encrypt._decrypt.utils.js'

async function createUser(user) {
	try {
		if (user.password !== user.confirmPassword) {
			throw new Error('As senhas não conferem!')
		}

		user.password = encrypt(user.password)

		user.name = user.name.toUpperCase()
		user.lastName = user.lastName.toUpperCase()
		return await UserRepository.createUser(user)
	} catch (error) {
		throw error
	}
}

async function updateUser(user) {
	try {
		let { id, name, lastName, email, role, actived } = user
		name = name.toUpperCase()
		lastName = lastName.toUpperCase()
		return await UserRepository.updateUser(
			id,
			name,
			lastName,
			email,
			role,
			actived
		)
	} catch (error) {
		throw error	
	}
}

async function updateChangePasswordUser(email, password, confirmPassword) {
	try {
		const user = await UserRepository.getUserByEmail(email)
		if (!user) throw new Error('Email inexistente!')
		if (password !== confirmPassword) {
			throw new Error('As senhas não conferem!')
		}
		password = encrypt(password)
		const userId = user.id
		return await UserRepository.updateChangePasswordUser(userId, password)
	} catch (error) {
		throw error
	}
}

async function getUsers() {
	try {
		return await UserRepository.getUsers()
	} catch (error) {
		throw error
	}
}

async function getUser(id) {
	try {
		return await UserRepository.getUser(id)
	} catch (error) {
		throw error
	}
}

async function disableEnableUser(id, actived) {
	try {
		return await UserRepository.disableEnableUser(id, actived)
	} catch (error) {
		throw error
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
