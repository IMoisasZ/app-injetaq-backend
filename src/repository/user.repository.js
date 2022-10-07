import UserModel from '../model/user.model.js'

async function createUser(user) {
	try {
		const newUser = await UserModel.create(user)
		return await getUser(newUser.id)
	} catch (error) {
		throw error
	}
}

async function updateUser(id, name, lastName, email, role, actived) {
	try {
		await UserModel.update(
			{
				name,
				lastName,
				email,
				role,
				actived,
			},
			{
				where: {
					id,
				},
			}
		)
		return await getUser(user.id)
	} catch (error) {
		throw error
	}
}

async function updateChangePasswordUser(userId, password) {
	try {
		await UserModel.update(
			{
				password,
			},
			{
				where: {
					id: userId,
				},
			}
		)
		return await getUser(userId)
	} catch (error) {
		throw error
	}
}

async function getUsers() {
	try {
		return await UserModel.findAll()
	} catch (error) {
		throw error
	}
}

async function getUser(id) {
	try {
		return await UserModel.findByPk(id)
	} catch (error) {
		throw error
	}
}

async function getUserByEmail(email) {
	try {
		return await UserModel.findOne({
			where: {
				email,
			},
		})
	} catch (error) {
		throw error
	}
}

async function disableEnableUser(id, actived) {
	try {
		await UserModel.update(
			{
				actived,
			},
			{
				where: {
					id,
				},
			}
		)
		return await getUser(id)
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
	getUserByEmail,
	disableEnableUser,
}
