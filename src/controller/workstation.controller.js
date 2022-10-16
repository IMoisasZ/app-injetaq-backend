import WorkstationService from '../service/workstation.service.js';

async function createWorkstation(req, res, next) {
  try {
    const workstation = req.body;
    if (!workstation.description)
      res.status(400).json({ error: 'A máquina deve ser informada!' });
    if (!workstation.code)
      res.status(400).json({ error: 'O código dee ser informado!' });

    res.send(await WorkstationService.createWorkstation(workstation));
    logger.info(`POST - /workstation - ${JSON.stringify(workstation)}`);
  } catch (error) {
    next(error);
  }
}

async function updateWorkstation(req, res, next) {
  try {
    const workstation = req.body;
    if (!workstation.description)
      res.status(400).json({ error: 'A máquina deve ser informada!' });
    if (!workstation.code)
      res.status(400).json({ error: 'O código dee ser informado!' });

    res.send(await WorkstationService.updateWorkstation(workstation));
    logger.info(`PATCH - /workstation - ${JSON.stringify(workstation)}`);
  } catch (error) {
    next(error);
  }
}

async function getWorkstations(req, res, next) {
  try {
    res.send(await WorkstationService.getWorkstations());
    logger.info(`GET - /workstation - ALL MACHINES`);
  } catch (error) {
    next(error);
  }
}

async function getWorkstation(req, res, next) {
  try {
    res.send(await WorkstationService.getWorkstation(req.params.id));
    logger.info(`GET - /workstation/${req.params.id}`);
  } catch (error) {
    next(error);
  }
}

async function disableEnableWorkstation(req, res, next) {
  try {
    const { id, actived } = req.body;
    res.send(await WorkstationService.disableEnableWorkstation(id, actived));
    logger.info(`PUT - /workstation - ${JSON.stringify(req.body)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createWorkstation,
  updateWorkstation,
  getWorkstations,
  getWorkstation,
  disableEnableWorkstation,
};
