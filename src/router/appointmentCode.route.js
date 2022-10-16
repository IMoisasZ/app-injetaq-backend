import { Router } from 'express';
import AppointmentCodeController from '../controller/appointmentCode.controller.js';

const route = Router();

route.post('/', AppointmentCodeController.createAppointmentCode);
route.patch('/', AppointmentCodeController.updateAppointmentCode);
route.get('/?', AppointmentCodeController.getAppointmentCodes);
route.get('/:id', AppointmentCodeController.getAppointmentCode);
route.put('/', AppointmentCodeController.disableEnableAppointmentCode);

export default route;
