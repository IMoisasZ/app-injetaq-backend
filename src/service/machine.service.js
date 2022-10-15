import MachineRepository from '../repository/machine.repository.js';

async function createMachine(machine) {
  try {
    machine.description = machine.description.toUpperCase();
    machine.type = machine.type.toUpperCase();
    return await MachineRepository.createMachine(machine);
  } catch (error) {
    throw error;
  }
}

async function updateMachine(machine) {
  try {
    machine.description = machine.description.toUpperCase();
    machine.type = machine.type.toUpperCase();
    return await MachineRepository.updateMachine(machine);
  } catch (error) {
    throw error;
  }
}

async function getMachines() {
  try {
    return await MachineRepository.getMachines();
  } catch (error) {
    throw error;
  }
}

async function getMachine(id) {
  try {
    return await MachineRepository.getMachine(id);
  } catch (error) {
    throw error;
  }
}

async function disableEnableMachine(id, actived) {
  try {
    return await MachineRepository.disableEnableMachine(id, actived);
  } catch (error) {
    throw error;
  }
}

export default {
  createMachine,
  updateMachine,
  getMachines,
  getMachine,
  disableEnableMachine,
};
