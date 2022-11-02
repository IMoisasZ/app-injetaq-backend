import express from 'express';
import cors from 'cors';
import winston from 'winston';

// routes import
import ClientRoute from './src/router/client.route.js';
import SectorRoute from './src/router/sector.route.js';
import OperationRoute from './src/router/operation.route.js';
import UserRoute from './src/router/user.route.js';
import MaterialRoute from './src/router/material.route.js';
import DIRoute from './src/router/di.route.js';
import DIHoursRoute from './src/router/di.hours.route.js';
import DIMaterialRoute from './src/router/di.material.route.js';
import EmployeeRoute from './src/router/employee.route.js';
import WorkstationRoute from './src/router/workstation.route.js';
import AppointmentCodeRoute from './src/router/appointmentCode.route.js';
import CommentDIRoute from './src/router/commentDi.router.js'
import AppointmentHoursRoute from './src/router/appointmentHours.route.js'

// create variable app
const app = express();

// cors
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// json
app.use(express.json());

// set routes
app.use('/client', ClientRoute);
app.use('/sector', SectorRoute);
app.use('/operation', OperationRoute);
app.use('/user', UserRoute);
app.use('/material', MaterialRoute);
app.use('/di', DIRoute);
app.use('/di_hours', DIHoursRoute);
app.use('/di_material', DIMaterialRoute);
app.use('/employee', EmployeeRoute);
app.use('/workstation', WorkstationRoute);
app.use('/appointmentCode', AppointmentCodeRoute);
app.use('/comment_di', CommentDIRoute)
app.use('/appointment_hours', AppointmentHoursRoute)

// winston(log)
const { combine, timestamp, label, printf } = winston.format;
const myformat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app-injetaq' }),
  ],
  format: combine(label({ label: 'app-injetaq' }), timestamp(), myformat),
});

// erro padrão
app.use((err, req, res, next) => {
  global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ erros: err.message });
});

export default app;
