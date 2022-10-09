import { Router } from 'express'
import MaterialController from '../controller/material.controller.js'

const route = Router()

route.post('/', MaterialController.createMaterial)
route.patch('/', MaterialController.updateMaterial)
route.get('/', MaterialController.getMaterials)
route.get('/:id', MaterialController.getMaterial)
route.put('/', MaterialController.disableEnableMaterial)

export default route
