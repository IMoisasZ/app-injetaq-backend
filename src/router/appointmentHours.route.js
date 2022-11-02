import {Router} from 'express'
import appointmentHoursController from '../controller/appointmentHours.controller.js'
import AppointmentHoursController from '../controller/appointmentHours.controller.js'

const route = Router()

route.post('/', AppointmentHoursController.createAppointmentHours)
route.patch('/', appointmentHoursController.updateAppointmentHours)
route.get('/', AppointmentHoursController.getAllAppointmentHours)
route.get('/:id', AppointmentHoursController.getAppointmentHours)
route.get('/di/:di', AppointmentHoursController.getAppointmentHoursByDI)
route.delete('/:id', AppointmentHoursController.deleteAppointmentHours)

export default route