import { Router } from 'express'
import SectorController from '../controller/sector.controller.js'

const route = Router()

route.post('/', SectorController.createSector)
route.patch('/', SectorController.updateSector)
route.get('/?', SectorController.getSectors)
route.get('/:id', SectorController.getSector)
route.put('/', SectorController.disableEnableSector)

export default route
