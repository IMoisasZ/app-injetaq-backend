import { Router } from 'express'
import OperationController from '../controller/operation.controller.js'

const route = Router()

route.post('/', OperationController.createOperation)
route.patch('/', OperationController.updateOperation)
route.get('/', OperationController.getOperations)
route.get('/:id', OperationController.getOperation)
route.put('/', OperationController.disableEnableOperation)

export default route
