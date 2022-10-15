import EmployeeModel from '../model/employee.model.js';

async function createEmployee(employee) {
  try {
    const newEmployee = await EmployeeModel.create(employee);
    return await getEmployee(newEmployee.id);
  } catch (error) {
    throw error;
  }
}

async function updateEmployee(employee) {
  try {
    await EmployeeModel.update(employee, {
      where: {
        id: employee.id,
      },
    });
    return await getEmployee(employee.id);
  } catch (error) {
    throw error;
  }
}

async function getEmployees() {
  try {
    return await EmployeeModel.findAll();
  } catch (error) {
    throw error;
  }
}

async function getEmployee(id) {
  try {
    return await EmployeeModel.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function disableEnableEmployee(id, actived) {
  try {
    await EmployeeModel.update(
      {
        actived,
      },
      {
        where: {
          id,
        },
      }
    );
    return await getEmployee(id);
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
