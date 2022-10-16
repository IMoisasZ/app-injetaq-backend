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

export default {
  createWorkstation,
  updateWorkstation,
  getWorkstations,
  getWorkstation,
  disableEnableWorkstation,
};
