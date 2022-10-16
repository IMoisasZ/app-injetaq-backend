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

export default {
  createWorkstation,
  updateWorkstation,
  getWorkstations,
  getWorkstation,
  disableEnableWorkstation,
};
