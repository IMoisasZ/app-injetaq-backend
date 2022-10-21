import WorkstationRepository from '../repository/workstation.repository.js';

async function createWorkstation(workstation) {
  try {
    workstation.description = workstation.description.toUpperCase();
    return await WorkstationRepository.createWorkstation(workstation);
  } catch (error) {
    throw error;
  }
}

async function updateWorkstation(workstation) {
  try {
    workstation.description = workstation.description.toUpperCase();
    return await WorkstationRepository.updateWorkstation(workstation);
  } catch (error) {
    throw error;
  }
}

async function getWorkstations() {
  try {
    return await WorkstationRepository.getWorkstations();
  } catch (error) {
    throw error;
  }
}

async function getWorkstation(id) {
  try {
    return await WorkstationRepository.getWorkstation(id);
  } catch (error) {
    throw error;
  }
}

async function disableEnableWorkstation(id, actived) {
  try {
    return await WorkstationRepository.disableEnableWorkstation(id, actived);
  } catch (error) {
    throw error;
  }
}

// --------------------------connection to operation-----------------------------------
async function createConnectionWorkstationOperation(connection) {
  try {
    return await WorkstationRepository.createConnectionWorkstationOperation(
      connection
    );
  } catch (error) {
    throw error;
  }
}

async function getWokstationConnectionOperation(workstation_id) {
  console.log(workstation_id);
  try {
    return await WorkstationRepository.getWokstationConnectionOperation(
      workstation_id
    );
  } catch (error) {
    throw error;
  }
}

async function deleteWorkstationConnectionOperation(id) {
  try {
    return await WorkstationRepository.deleteWorkstationConnectionOperation(id);
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
