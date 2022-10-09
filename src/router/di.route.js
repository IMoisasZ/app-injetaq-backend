import { Router } from 'express'
import DIController from '../controller/di.controller.js'

const route = Router()

route.post('/', DIController.createDI)
route.patch('/', DIController.updateDI)
route.get('/', DIController.getAllDI)
route.get('/:id', DIController.getDI)
route.put('/', DIController.changeStatusDI)

export default route
