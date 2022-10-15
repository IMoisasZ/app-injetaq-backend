import MachineModel from '../model/machine.model.js';

async function createMachine(machine) {
  try {
    const newMachine = await MachineModel.create(machine);
    return await getMachine(newMachine.id);
  } catch (error) {
    throw error;
  }
}

async function updateMachine(machine) {
  try {
    await MachineModel.update(machine, {
      where: {
        id: machine.id,
      },
    });
    return await getMachine(machine.id);
  } catch (error) {
    throw error;
  }
}

async function getMachines() {
  try {
    return await MachineModel.findAll();
  } catch (error) {
    throw error;
  }
}

async function getMachine(id) {
  try {
    return await MachineModel.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function disableEnableMachine(id, actived) {
  try {
    await MachineModel.update(
      {
        actived,
      },
      {
        where: {
          id,
        },
      }
    );
    return await getMachine(id);
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
