import EmployeeService from '../service/employee.service.js';

async function createEmployee(req, res, next) {
  try {
    const employee = req.body;
    if (!employee.description)
      res
        .status(400)
        .json({ error: 'O nome do funcionário deve ser informado!' });
    res.send(await EmployeeService.createEmployee(employee));
    logger.info(`POST - /employee - ${JSON.stringify(employee)}`);
  } catch (error) {
    next(error);
  }
}

async function updateEmployee(req, res, next) {
  try {
    const employee = req.body;
    if (!employee.description)
      res
        .status(400)
        .json({ error: 'O nome do funcionário deve ser informado!' });
    res.send(await EmployeeService.updateEmployee(employee));
    logger.info(`PATCH - /employee - ${JSON.stringify(employee)}`);
  } catch (error) {
    next(error);
  }
}

async function getEmployees(req, res, next) {
  try {
    res.send(await EmployeeService.getEmployees());
    logger.info(`GET - /employee - ALL EMPLOYEES`);
  } catch (error) {
    next(error);
  }
}

async function getEmployee(req, res, next) {
  try {
    res.send(await EmployeeService.getEmployee(req.params.id));
    logger.info(`GET - /employee/${req.params.id}`);
  } catch (error) {
    throw error;
  }
}

async function disableEnableEmployee(req, res, next) {
  try {
    const { id, actived } = req.body;
    res.send(await EmployeeService.disableEnableEmployee(id, actived));
    logger.info(`PUT - /employee - ${JSON.stringify(req.body)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createEmployee,
  updateEmployee,
  getEmployees,
  getEmployee,
  disableEnableEmployee,
};
