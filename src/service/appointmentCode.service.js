import AppointmentCodeRepository from '../repository/appointmentCode.repository.js';

async function createAppointmentCode(appointCode) {
  try {
    appointCode.description = appointCode.description.toUpperCase();
    appointCode.type = appointCode.type.toUpperCase();
    return await AppointmentCodeRepository.createAppointmentCode(appointCode);
  } catch (error) {
    throw error;
  }
}

async function updateAppointmentCode(appointCode) {
  try {
    appointCode.description = appointCode.description.toUpperCase();
    appointCode.type = appointCode.type.toUpperCase();
    return await AppointmentCodeRepository.updateAppointmentCode(appointCode);
  } catch (error) {
    throw error;
  }
}

async function getAppointmentCodes() {
  try {
    return await AppointmentCodeRepository.getAppointmentCodes();
  } catch (error) {
    throw error;
  }
}

async function getAppointmentCodesByType(type) {
  try {
    return await AppointmentCodeRepository.getAppointmentCodesByType(type);
  } catch (error) {
    throw error;
  }
}

async function getAppointmentCode(id) {
  try {
    return await AppointmentCodeRepository.getAppointmentCode(id);
  } catch (error) {
    throw error;
  }
}

async function disableEnableAppointmentCode(id, actived) {
  try {
    return await AppointmentCodeRepository.disableEnableAppointmentCode(
      id,
      actived
    );
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
