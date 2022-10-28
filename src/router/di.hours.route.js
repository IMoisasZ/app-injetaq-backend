import { Router } from 'express'
import DIHoursController from '../controller/di.hours.controller.js'

const route = Router()

route.post('/', DIHoursController.includeDIHours)
route.patch('/', DIHoursController.updateDIHours)
route.get('/hours/:di_id', DIHoursController.getAllDIHours)
route.get('/sum/:di_id', DIHoursController.sumTotal)
route.get('/operation/sum/:di_id', DIHoursController.sumByHours)
route.get('/:id', DIHoursController.getDIHours)
route.delete('/:id', DIHoursController.deleteDIHours)

export default route
