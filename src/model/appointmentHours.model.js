import Sequelize from "sequelize";
import DBCONNECTION from "../connection/db.connection.js";
import EmployeeModel from './employee.model.js'
import WorkstationModel from './workstation.model.js'
import DIModel from './di.model.js'
import AppointmentCodeModel from './appointmentCode.model.js'

const AppointmentHours = DBCONNECTION.define('appointment_hours',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    workstation_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    di_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    position: {
        type: Sequelize.STRING,
        allowNull: true
    },
    start: {
        type: Sequelize.DATE,
        allowNull: false
    },
    interval: {
        type: Sequelize.DATE,
        allowNull: false
    },
    finish: {
        type: Sequelize.DATE,
        allowNull: false
    },
    total: {
        type: Sequelize.DATE,
        allowNull: false
    },
    appointment_code_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    rnc_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    comments: {
        type: Sequelize.STRING,
        allowNull: true
    }
},{tableName: 'appointment_hours'})

AppointmentHours.sync()

AppointmentHours.belongsTo(EmployeeModel,{foreignKey: 'employee_id'})
AppointmentHours.belongsTo(WorkstationModel, {foreignKey: 'workstation_id'})
AppointmentHours.belongsTo(DIModel, {foreignKey: 'di_id'})
AppointmentHours.belongsTo(AppointmentCodeModel, {foreignKey: 'appointment_code_id'})

export default AppointmentHours

