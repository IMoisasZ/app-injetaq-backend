import AppointmentCodeModel from '../model/appointmentCode.model.js';

async function createAppointmentCode(appointmentCode) {
  try {
    const newAppointmentCode = await AppointmentCodeModel.create(
      appointmentCode
    );
    return await getAppointmentCode(newAppointmentCode.id);
  } catch (error) {
    throw error;
  }
}

async function updateAppointmentCode(appointmentCode) {
  try {
    await AppointmentCodeModel.update(appointmentCode, {
      where: {
        id: appointmentCode.id,
      },
    });
    return await getAppointmentCode(appointmentCode.id);
  } catch (error) {
    throw error;
  }
}

async function getAppointmentCodes() {
  try {
    return await AppointmentCodeModel.findAll();
  } catch (error) {
    throw error;
  }
}

async function getAppointmentCodesByType(type) {
  try {
    return await AppointmentCodeModel.findAll({
      where: {
        type,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function getAppointmentCode(id) {
  try {
    return await AppointmentCodeModel.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function disableEnableAppointmentCode(id, actived) {
  try {
    await AppointmentCodeModel.update(
      {
        actived,
      },
      {
        where: {
          id,
        },
      }
    );
    return await getAppointmentCode(id);
  } catch (error) {
    throw error;
  }
}

export default {
  createAppointmentCode,
  updateAppointmentCode,
  getAppointmentCodes,
  getAppointmentCodesByType,
  getAppointmentCode,
  disableEnableAppointmentCode,
};
