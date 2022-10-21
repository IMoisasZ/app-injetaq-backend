import WorkstationModel from '../model/workstation.model.js';

async function createWorkstation(workstation) {
  try {
    const newWorkstation = await WorkstationModel.create(workstation);
    return await getWorkstation(newWorkstation.id);
  } catch (error) {
    throw error;
  }
}

async function updateWorkstation(workstation) {
  try {
    await WorkstationModel.update(workstation, {
      where: {
        id: workstation.id,
      },
    });
    return await getWorkstation(workstation.id);
  } catch (error) {
    throw error;
  }
}

async function getWorkstations() {
  try {
    return await WorkstationModel.findAll();
  } catch (error) {
    throw error;
  }
}

async function getWorkstation(id) {
  try {
    return await WorkstationModel.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function disableEnableWorkstation(id, actived) {
  try {
    await WorkstationModel.update(
      {
        actived,
      },
      {
        where: {
          id,
        },
      }
    );
    return await getWorkstation(id);
  } catch (error) {
    throw error;
  }
}

// ------------------------------------connection to operation------------------------------------------------
import WorkstationConnectionOperationModel from '../model/workstationConnectOperation.model.js';
import OperationModel from '../model/operation.model.js';

async function createConnectionWorkstationOperation(connection) {
  try {
    const newConnection = await WorkstationConnectionOperationModel.create(
      connection
    );
    return await getWokstationConnectionOperation(newConnection.workstation_id);
  } catch (error) {
    throw error;
  }
}

async function getWokstationConnectionOperation(workstation_id) {
  try {
    return await WorkstationConnectionOperationModel.findAll(
      {
        where: {
          workstation_id,
        },
        include: [
          {
            model: OperationModel,
          },
        ],
      }
    );
  } catch (error) {
    throw error;
  }
}

async function deleteWorkstationConnectionOperation(id) {
  try {
    return await WorkstationConnectionOperationModel.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  createWorkstation,
  updateWorkstation,
  getWorkstations,
  getWorkstation,
  disableEnableWorkstation,
  createConnectionWorkstationOperation,
  getWokstationConnectionOperation,
  deleteWorkstationConnectionOperation,
};
