import EmployeeRepository from '../repository/employee.repository.js';

async function createEmployee(employee) {
  try {
    employee.description = employee.description.toUpperCase();
    return await EmployeeRepository.createEmployee(employee);
  } catch (error) {
    throw error;
  }
}

async function updateEmployee(employee) {
  try {
    employee.description = employee.description.toUpperCase();
    return await EmployeeRepository.updateEmployee(employee);
  } catch (error) {
    throw error;
  }
}

async function getEmployees() {
  try {
    return await EmployeeRepository.getEmployees();
  } catch (error) {
    throw error;
  }
}

async function getEmployee(id) {
  try {
    return await EmployeeRepository.getEmployee(id);
  } catch (error) {
    throw error;
  }
}

async function disableEnableEmployee(id, actived) {
  try {
    return await EmployeeRepository.disableEnableEmployee(id, actived);
  } catch (error) {
    throw error;
  }
}

export default {
  createEmployee,
  updateEmployee,
  getEmployees,
  getEmployee,
  disableEnableEmployee,
};
