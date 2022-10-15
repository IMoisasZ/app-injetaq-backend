import { Router } from 'express';
import MachineConroller from '../controller/machine.controller.js';

const route = Router();

route.post('/', MachineConroller.createMachine);
route.patch('/', MachineConroller.updateMachine);
route.get('/', MachineConroller.getMachines);
route.get('/:id', MachineConroller.getMachine);
route.put('/', MachineConroller.disableEnableMachine);

export default route;
