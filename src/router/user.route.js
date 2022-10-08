import { Router } from 'express'
import UserController from '../controller/user.controller.js'

const route = Router()

route.post('/', UserController.createUser)
route.patch('/', UserController.updateUser)
route.patch('/change_password', UserController.updateChangePasswordUser)
route.get('/', UserController.getUsers)
route.get('/:id', UserController.getUser)
route.put('/', UserController.disableEnableUser)

export default route
