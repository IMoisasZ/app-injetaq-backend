import AppointmentCodeService from '../service/appointmentCode.service.js';

async function createAppointmentCode(req, res, next) {
  try {
    const appointCode = req.body;
    if (!appointCode.description)
      res.status(400).json({ error: 'A descrição deve ser informada!' });
    if (!appointCode.type)
      res.status(400).json({ error: 'O tipo deve ser informado!' });
    res.send(await AppointmentCodeService.createAppointmentCode(appointCode));
    logger.info(`POST - /apointmentCode - ${JSON.stringify(appointCode)}`);
  } catch (error) {
    next(error);
  }
}

async function updateAppointmentCode(req, res, next) {
  try {
    const appointCode = req.body;
    if (!appointCode.description)
      res.status(400).json({ error: 'A descrição deve ser informada!' });
    if (!appointCode.type)
      res.status(400).json({ error: 'O tipo deve ser informado!' });
    res.send(await AppointmentCodeService.updateAppointmentCode(appointCode));
    logger.info(`PATCH - /apointmentCode - ${JSON.stringify(appointCode)}`);
  } catch (error) {
    next(error);
  }
}

async function getAppointmentCodes(req, res, next) {
  try {
    const type = req.query.type;
    if (type) {
      res.send(await AppointmentCodeService.getAppointmentCodesByType(type));
      logger.info(`GET - /appointmentCode?type=${type}`);
    } else {
      res.send(await AppointmentCodeService.getAppointmentCodes());
      logger.info(`GET - /appointmentCode - ALL APPOINTMENT CODES`);
    }
  } catch (error) {
    next(error);
  }
}

async function getAppointmentCode(req, res, next) {
  try {
    res.send(await AppointmentCodeService.getAppointmentCode(req.params.id));
    logger.info(`GET - /appointmentCode/${req.params.id}`);
  } catch (error) {
    next(error);
  }
}

async function disableEnableAppointmentCode(req, res, next) {
  try {
    const { id, actived } = req.body;
    res.send(
      await AppointmentCodeService.disableEnableAppointmentCode(id, actived)
    );
    logger.info(`PUT - /appointmentCode - ${JSON.stringify(req.body)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createAppointmentCode,
  updateAppointmentCode,
  getAppointmentCodes,
  getAppointmentCode,
  disableEnableAppointmentCode,
};
