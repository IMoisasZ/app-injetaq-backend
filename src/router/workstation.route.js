import { Router } from 'express';
import WorkstationConroller from '../controller/workstation.controller.js';

const route = Router();

route.post('/', WorkstationConroller.createWorkstation);
route.patch('/', WorkstationConroller.updateWorkstation);
route.get('/', WorkstationConroller.getWorkstations);
route.get('/:id', WorkstationConroller.getWorkstation);
route.put('/', WorkstationConroller.disableEnableWorkstation);

export default route;
