import MachineService from '../service/machine.service.js';

async function createMachine(req, res, next) {
  try {
    const machine = req.body;
    if (!machine.description)
      res.status(400).json({ error: 'A máquina deve ser informada!' });
    if (!machine.code)
      res.status(400).json({ error: 'O código dee ser informado!' });

    res.send(await MachineService.createMachine(machine));
    logger.info(`POST - /machine - ${JSON.stringify(machine)}`);
  } catch (error) {
    next(error);
  }
}

async function updateMachine(req, res, next) {
  try {
    const machine = req.body;
    if (!machine.description)
      res.status(400).json({ error: 'A máquina deve ser informada!' });
    if (!machine.code)
      res.status(400).json({ error: 'O código dee ser informado!' });

    res.send(await MachineService.updateMachine(machine));
    logger.info(`PATCH - /machine - ${JSON.stringify(machine)}`);
  } catch (error) {
    next(error);
  }
}

async function getMachines(req, res, next) {
  try {
    res.send(await MachineService.getMachines());
    logger.info(`GET - /machine - ALL MACHINES`);
  } catch (error) {
    next(error);
  }
}

async function getMachine(req, res, next) {
  try {
    res.send(await MachineService.getMachine(req.params.id));
    logger.info(`GET - /machine/${req.params.id}`);
  } catch (error) {
    next(error);
  }
}

async function disableEnableMachine(req, res, next) {
  try {
    const { id, actived } = req.body;
    res.send(await MachineService.disableEnableMachine(id, actived));
    logger.info(`PUT - /machine - ${JSON.stringify(req.body)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createMachine,
  updateMachine,
  getMachines,
  getMachine,
  disableEnableMachine,
};
