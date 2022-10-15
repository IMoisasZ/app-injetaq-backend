import { Router } from 'express';
import EmployeeController from '../controller/employee.controller.js';

const route = Router();

route.post('/', EmployeeController.createEmployee);
route.patch('/', EmployeeController.updateEmployee);
route.get('/', EmployeeController.getEmployees);
route.get('/:id', EmployeeController.getEmployee);
route.put('/', EmployeeController.disableEnableEmployee);

export default route;
