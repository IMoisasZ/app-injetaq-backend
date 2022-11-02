import AppointmentHoursModel from "../model/appointmentHours.model.js";
import EmployeeModel from '../model/employee.model.js'
import WorkstationModel from '../model/workstation.model.js'
import DIModel from '../model/di.model.js'
import AppointmentCodeModel from '../model/appointmentCode.model.js'

async function createAppointmentHours(appointmentHours){
    try {
        const newAppointmentHours = await AppointmentHoursModel.create(appointmentHours)
        return await getAppointmentHours(newAppointmentHours.id)
    } catch (error) {
        throw error
    }
}

async function updateAppointmentHours(appointmentHours){
    try {
        await AppointmentHoursModel.update(appointmentHours,
            {
                where: {
                    id: appointmentHours.id
                }
            })
        return await getAppointmentHours(appointmentHours.id)
    } catch (error) {
        throw error
    }
}

async function getAllAppointmentHours(){
    try {
        return await AppointmentHoursModel.findAll({
            include:[
                {
                    model: EmployeeModel
                },
                {
                    model: WorkstationModel
                },
                {
                    model: DIModel
                },
                {
                    model: AppointmentCodeModel
                }
            ]
        })
    } catch (error) {
        throw error
    }
}

async function getAppointmentHours(id){
    try {
        return await AppointmentHoursModel.findByPk(id,{
            include:[
                {
                    model: EmployeeModel
                },
                {
                    model: WorkstationModel
                },
                {
                    model: DIModel
                },
                {
                    model: AppointmentCodeModel
                }
            ]
        })
    } catch (error) {
        throw error
    }
}

async function getAppointmentHoursByDI (di_id) {
    try {
        return await AppointmentHoursModel.findlAll({
            where: {
                di_id
            },
            include:[
                {
                    model: EmployeeModel
                },
                {
                    model: WorkstationModel
                },
                {
                    model: DIModel
                },
                {
                    model: AppointmentCodeModel
                }
            ]

        })
    } catch (error) {
        throw error
    }
}

async function deleteAppointmentHours(id){
    try {
        return await AppointmentHoursModel.destroy({
            where: {
                id
            }
        })
    } catch (error) {
        throw error
    }
}

export default {
    createAppointmentHours,
    updateAppointmentHours,
    getAllAppointmentHours,
    getAllAppointmentHours,
    getAppointmentHours,
    getAppointmentHoursByDI,
    deleteAppointmentHours
}