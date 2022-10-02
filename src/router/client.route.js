import { Router } from 'express'
import ClientController from '../controller/client.controller.js'

const route = Router()

route.post('/', ClientController.createClient)
route.patch('/', ClientController.updateClient)
route.get('/', ClientController.getClients)
route.get('/:id', ClientController.getClient)
route.put('/', ClientController.disableEnableClient)

export default route
